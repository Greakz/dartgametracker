import {SetRequestIsPendingAction} from "./Reducer/SetRequestIsPending.Action";
import {SagaActions} from "./RootSaga";

export type RootAction =
    | SagaActions
    | SetRequestIsPendingAction
