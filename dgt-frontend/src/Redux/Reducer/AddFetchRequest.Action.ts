export const ADD_FETCH_REQUEST: 'AddFetchRequestAction' = 'AddFetchRequestAction'

export interface AddFetchRequestAction {
    type: 'AddFetchRequestAction'
    id: string
}

export function buildAddFetchRequestAction(id: string): AddFetchRequestAction {
    return {
        type: ADD_FETCH_REQUEST,
        id: id
    }
}