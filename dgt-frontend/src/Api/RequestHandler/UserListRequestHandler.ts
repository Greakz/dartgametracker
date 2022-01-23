import {RequestHandler} from "../RequestHandler";
import {HttpApi} from "../HttpApi";
import {GetRequest, PostRequest} from "../Request";

export interface UserListRequest {
}

export interface UserListResponse {
    usernames: string[]
}

export abstract class RegistrationRequestHandler extends RequestHandler<UserListRequest, UserListResponse> {
    static async fetch(body: UserListRequest): Promise<UserListResponse> {
        const request: GetRequest = {
            url: 'user-list'
        }
        const promise = await HttpApi.authGET(request);
        return promise.json();
    }
}