import {AuthState} from "./HttpState/AuthState";
import {StateRequestEntry} from "./HttpState/StateRequestEntry";

export interface HttpState {
    requests: StateRequestEntry[];
    auth: AuthState;
}

export function initialHttpState(): HttpState {
    return {
        requests: [],
        auth: {
            type: 'unauthenticated',
        }
    };
}

export function getStateRequestEntry(httpState: HttpState, requestId: string): StateRequestEntry | undefined {
    return httpState.requests.find((r: StateRequestEntry) => r.id === requestId);
}