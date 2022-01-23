import {RequestHandler} from "../RequestHandler";
import {HttpApi} from "../HttpApi";
import {PostRequest} from "../Request";

export interface JwtTokenRequest {
    username: string
    password: string
}

export interface JwtTokenResponse {
    jwttoken: string;
}

export abstract class JwtTokenRequestHandler extends RequestHandler<JwtTokenRequest, JwtTokenResponse> {
    static async fetch(body: JwtTokenRequest): Promise<JwtTokenResponse> {
        const request: PostRequest = {
            url: 'authenticate',
            body: JSON.stringify(body)
        }
        const promise = await HttpApi.publicPOST(request);
        return promise.json();
    }
}