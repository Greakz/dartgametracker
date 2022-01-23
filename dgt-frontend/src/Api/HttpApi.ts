import {GetRequest, PostRequest} from "./Request";
import {store} from "../index";
import {AuthState} from "../Redux/State/HttpState/AuthState";

export abstract class HttpApi {

    protected static readonly baseUrl = "http://localhost:8080/";

    protected static publicGET(getRequest: GetRequest): Promise<any> {
        return fetch(
            HttpApi.baseUrl + getRequest.url,
            {
                method: 'GET',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        );
    }

    protected static publicPOST(postRequest: PostRequest): Promise<any> {
        return fetch(
            HttpApi.baseUrl + postRequest.url,
            {
                method: 'POST',
                // mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: postRequest.body,
            }
        );
    }

    protected static authGET(getRequest: GetRequest): Promise<any> {
        const jwtToken = HttpApi.token();
        return fetch(
            HttpApi.baseUrl + getRequest.url,
            {
                method: 'GET',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                    'Authentication': jwtToken
                },
            }
        );
    }

    protected static authPOST(postRequest: PostRequest): Promise<any> {
        const jwtToken = HttpApi.token();
        return fetch(
            HttpApi.baseUrl + postRequest.url,
            {
                method: 'POST',
                // mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                    'Authentication': jwtToken
                },
                body: postRequest.body,
            }
        );
    }

    private static token(): string {
        const auth: AuthState = store.getState().httpState.auth;
        if(auth.type === "unauthenticated") {
            throw new Error("Tried to fetch a protected route while unauthenticated")
        }
        return 'Bearer ' + auth.token;
    }

}