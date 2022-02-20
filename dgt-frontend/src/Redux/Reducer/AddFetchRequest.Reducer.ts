import {RootState} from "../RootState";
import {AddFetchRequestAction} from "./AddFetchRequest.Action";

export function addFetchRequestReducer(state: RootState, action: AddFetchRequestAction): RootState {
    return {
        ...state,
        httpState: {
            ...state.httpState,
            requests: [
                ...state.httpState.requests,
                {
                    id: action.id,
                    status: 'pending'
                }
            ]
        }
    };
}