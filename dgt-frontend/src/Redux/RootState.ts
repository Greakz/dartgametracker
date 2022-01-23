import {HttpState, initialHttpState} from "./State/HttpState";

export interface RootState {
    httpState: HttpState

}

export function initialRootState(): RootState {
    return {
        httpState: initialHttpState(),
    }
}