import {RootState} from "../RootState";
import {SetJwtTokenAction} from "./SetJwtToken.Action";

export function setJwtTokenActionReducer(state: RootState, action: SetJwtTokenAction): RootState {
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