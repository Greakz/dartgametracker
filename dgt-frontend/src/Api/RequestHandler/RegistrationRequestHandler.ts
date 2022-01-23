import {POSTRequestHandler} from "../RequestHandler";
import {POSTHttpApi} from "../HttpApi";
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

export abstract class RegistrationRequestHandler extends POSTRequestHandler<RegistrationRequest, RegistrationResponse> {
    static async fetch(body: RegistrationRequest): Promise<RegistrationResponse> {
        const request: PostRequest = {
            url: 'register',
            body: JSON.stringify(body)
        }
        const promise = await POSTHttpApi.publicPOST(request);
        return promise.json();
    }
}