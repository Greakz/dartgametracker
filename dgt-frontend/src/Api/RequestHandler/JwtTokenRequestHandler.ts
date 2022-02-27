import {POSTRequestHandler} from "../RequestHandler";
import {POSTHttpApi} from "../HttpApi";
import {PostRequest} from "../Request";
import {BaseResponse, ResponseWrapper} from "../BaseResponse";

export interface JwtTokenRequest {
    username: string
    password: string
}

export interface JwtTokenResponse extends BaseResponse  {
    token: string;
}

export abstract class JwtTokenRequestHandler extends POSTRequestHandler<JwtTokenRequest, ResponseWrapper<JwtTokenResponse>> {
    static async fetch(body: JwtTokenRequest): Promise<ResponseWrapper<JwtTokenResponse>> {
        const request: PostRequest = {
            url: 'authenticate',
            body: JSON.stringify(body)
        }
        const promise = await POSTHttpApi.publicPOST(request);
        return promise.json();
    }
}