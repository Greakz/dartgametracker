import {RootState} from "../RootState";
import {ClearJwtTokenAction} from "./ClearJwtToken.Action";

export function clearJwtTokenActionReducer(state: RootState, action: ClearJwtTokenAction): RootState {
    localStorage.removeItem('auth');
    return {
        ...state,
        httpState: {
            ...state.httpState,
            auth: {
                type: 'unauthenticated'
            }
        }
    };
}