import {initialRootState, RootState} from "./RootState";
import {RootAction} from "./RootAction";
import {ADD_FETCH_REQUEST} from "./Reducer/AddFetchRequest.Action";
import {SET_FETCH_REQUEST_RESULT} from "./Reducer/SetFetchRequestResult.Action";
import {setFetchRequestResultReducer} from "./Reducer/SetFetchRequestResult.Reducer";
import {addFetchRequestReducer} from "./Reducer/AddFetchRequest.Reducer";
import {SET_JWT_TOKEN} from "./Reducer/SetJwtToken.Action";
import {setJwtTokenActionReducer} from "./Reducer/SetJwtToken.Reducer";
import {CLEAR_JWT_TOKEN} from "./Reducer/ClearJwtToken.Action";
import {clearJwtTokenActionReducer} from "./Reducer/ClearJwtToken.Reducer";

export function rootReducer(rootState: RootState | undefined, action: RootAction): RootState {
    if (rootState === undefined) {
        console.error("no state available -> Store creation has failed");
        return initialRootState();
    }
    switch (action.type) {
        /**
         * Action/Reducer Call Register
         */

        case ADD_FETCH_REQUEST:
            return addFetchRequestReducer(rootState, action);

        case SET_FETCH_REQUEST_RESULT:
            return setFetchRequestResultReducer(rootState, action);

        case SET_JWT_TOKEN:
            return setJwtTokenActionReducer(rootState, action);

        case CLEAR_JWT_TOKEN:
            return clearJwtTokenActionReducer(rootState, action);


        /**
         *  Action/Reducer Call Register End
         */
        default:
            console.warn('No action was performed on action: ' + action.type);
            return rootState;
    }
}