import {BaseResponse} from "../../Api/BaseResponse";

export const SET_FETCH_REQUEST_RESULT: 'SetFetchRequestResultAction' = 'SetFetchRequestResultAction'

export interface SetFetchRequestResultAction {
    type: 'SetFetchRequestResultAction'
    id: string
    response: BaseResponse
}

export function buildSetFetchRequestResultAction(id: string, response: BaseResponse): SetFetchRequestResultAction {
    return {
        type: SET_FETCH_REQUEST_RESULT,
        id: id,
        response: response
    }
}