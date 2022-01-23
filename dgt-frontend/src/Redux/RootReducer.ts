import {initialRootState, RootState} from "./RootState";
import {RootAction} from "./RootAction";
import {SET_REQUEST_IS_PENDING} from "./Reducer/SetRequestIsPending.Action";
import {setRequestIsPendingReducer} from "./Reducer/SetLoadingState.Reducer";

export function rootReducer(rootState: RootState | undefined, action: RootAction) {
    if (rootState === undefined) {
        console.error("no state available -> Store creation has failed");
        return initialRootState();
    }
    switch (action.type) {
        /**
         * Action/Reducer Call Register
         */

        case SET_REQUEST_IS_PENDING:
            return setRequestIsPendingReducer(rootState, action);


        /**
         *  Action/Reducer Call Register End
         */
        default:
            console.warn('No action was performed on action: ' + action.type);
            return rootState;
    }
}