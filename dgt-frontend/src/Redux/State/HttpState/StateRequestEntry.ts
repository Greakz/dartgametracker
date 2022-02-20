import {BaseResponse} from "../../../Api/BaseResponse";

export type StateRequestEntry = NotRequested | PendingRequest | FailedRequest | SuccessRequest

export interface SuccessRequest {
    id: string
    status: 'success'
    response: BaseResponse
}
export interface FailedRequest {
    id: string
    status: 'failed'
}
export interface PendingRequest {
    id: string
    status: 'pending'
}
export interface NotRequested {
    id: string
    status: 'not-requested'
}