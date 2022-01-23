export const SET_REQUEST_IS_PENDING: 'SetRequestIsPendingAction' = 'SetRequestIsPendingAction'

export interface SetRequestIsPendingAction {
    type: 'SetRequestIsPendingAction'
    requestIsPending: boolean
}

export function buildSetRequestIsPendingAction(requestIsPending: boolean): SetRequestIsPendingAction {
    return {
        type: SET_REQUEST_IS_PENDING,
        requestIsPending: requestIsPending
    }
}