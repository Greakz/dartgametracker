import {AuthState} from "./HttpState/AuthState";

export interface HttpState {
    requestIsPending: boolean;
    auth: AuthState;
}

export function initialHttpState(): HttpState {
    return {
        requestIsPending: false,
        auth: {
            type: 'unauthenticated',
        }
    };
}