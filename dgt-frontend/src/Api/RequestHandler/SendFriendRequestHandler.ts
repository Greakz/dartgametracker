import {POSTRequestHandler} from "../RequestHandler";
import {POSTHttpApi} from "../HttpApi";
import {PostRequest} from "../Request";
import {BaseResponse, ResponseWrapper} from "../BaseResponse";

export interface SendFriendRequestRequest {
    friendUsername: string
}

export interface SendFriendRequestResponse extends BaseResponse {
    friendUsername: string;
}

export abstract class SendFriendRequestHandler extends POSTRequestHandler<SendFriendRequestRequest, ResponseWrapper<SendFriendRequestResponse>> {
    static async fetch(body: SendFriendRequestRequest): Promise<ResponseWrapper<SendFriendRequestResponse>> {
        const request: PostRequest = {
            url: 'add-friend',
            body: JSON.stringify(body)
        }
        const promise = await POSTHttpApi.authPOST(request);
        return promise.json();
    }
}