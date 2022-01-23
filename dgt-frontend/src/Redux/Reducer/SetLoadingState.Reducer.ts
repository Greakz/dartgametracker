import {RootState} from "../RootState";
import {SetRequestIsPendingAction} from "./SetRequestIsPending.Action";

export function setRequestIsPendingReducer(state: RootState, action: SetRequestIsPendingAction): RootState {
    return {
        ...state,
        httpState: {
            ...state.httpState,
            requestIsPending: action.requestIsPending
        }
    };
}