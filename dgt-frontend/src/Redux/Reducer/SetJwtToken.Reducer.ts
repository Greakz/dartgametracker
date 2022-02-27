import {RootState} from "../RootState";
import {SetJwtTokenAction} from "./SetJwtToken.Action";

export function setJwtTokenActionReducer(state: RootState, action: SetJwtTokenAction): RootState {
    localStorage.setItem('auth', action.token);
    return {
        ...state,
        httpState: {
            ...state.httpState,
            auth: {
                type: 'authenticated',
                token: action.token
            }
        }
    };
}