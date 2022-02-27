import {GetRequest, PostRequest} from "./Request";
import {store} from "../index";
import {AuthState} from "../Redux/State/HttpState/AuthState";

abstract class Api {
    protected static readonly baseUrl = "http://localhost:8080/";

    protected static token(): string {
        const auth: AuthState = store.getState().httpState.auth;
        if(auth.type === "unauthenticated") {
            throw new Error("Tried to fetch a protected route while unauthenticated")
        }
        return 'Bearer ' + auth.token;
    }
}

export abstract class POSTHttpApi extends Api {

    protected static readonly baseUrl = "http://localhost:8080/";

    protected static publicPOST(postRequest: PostRequest): Promise<any> {
        return fetch(
            Api.baseUrl + postRequest.url,
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

    protected static authPOST(postRequest: PostRequest): Promise<any> {
        const jwtToken = Api.token();
        return fetch(
            Api.baseUrl + postRequest.url,
            {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': jwtToken
                },
                body: postRequest.body,
            }
        );
    }
}

export abstract class GETHttpApi extends Api {

    protected static publicGET(getRequest: GetRequest): Promise<any> {
        return fetch(
            Api.baseUrl + getRequest.url,
            {
                method: 'GET',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        );
    }

    protected static authGET(getRequest: GetRequest): Promise<any> {
        const jwtToken = Api.token();
        return fetch(
            Api.baseUrl + getRequest.url,
            {
                method: 'GET',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': jwtToken
                },
            }
        );
    }
}