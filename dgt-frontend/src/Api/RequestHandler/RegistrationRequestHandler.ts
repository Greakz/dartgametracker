import {RequestHandler} from "../RequestHandler";
import {HttpApi} from "../HttpApi";
import {PostRequest} from "../Request";

export interface RegistrationRequest {
    username: string
    email: string
    password: string
}

export interface RegistrationResponse {
    success: boolean;
    registered_username: string;
    registered_email: string;
    message: string;
}

export abstract class RegistrationRequestHandler extends RequestHandler<RegistrationRequest, RegistrationResponse> {
    static async fetch(body: RegistrationRequest): Promise<RegistrationResponse> {
        const request: PostRequest = {
            url: 'register',
            body: JSON.stringify(body)
        }
        const promise = await HttpApi.publicPOST(request);
        return promise.json();
    }
}