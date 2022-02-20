import {RootState} from "../RootState";
import {SetFetchRequestResultAction} from "./SetFetchRequestResult.Action";
import {StateRequestEntry} from "../State/HttpState/StateRequestEntry";

export function setFetchRequestResultReducer(state: RootState, action: SetFetchRequestResultAction): RootState {
    return {
        ...state,
        httpState: {
            ...state.httpState,
            requests: state.httpState.requests.map((r: StateRequestEntry) => {
                if(r.id === action.id) {
                    return {
                        id: r.id,
                        status: 'success',
                        response: action.response
                    }
                }
                return r;
            })
        }
    };
}