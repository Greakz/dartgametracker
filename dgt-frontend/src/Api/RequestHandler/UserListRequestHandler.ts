import {GETRequestHandler} from "../RequestHandler";
import {GETHttpApi} from "../HttpApi";
import {GetRequest} from "../Request";

/*
export interface UserListResponse {
    usernames: string[];
}
 */

export abstract class UserListRequestHandler extends GETRequestHandler<string[]> {
    static async fetch(): Promise<string[]> {
        const request: GetRequest = {
            url: 'user-list'
        };
        const promise = await GETHttpApi.authGET(request);
        return promise.json();
    }
}