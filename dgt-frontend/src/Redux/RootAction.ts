import {AddFetchRequestAction} from "./Reducer/AddFetchRequest.Action";
import {SagaActions} from "./RootSaga";
import {SetFetchRequestResultAction} from "./Reducer/SetFetchRequestResult.Action";
import {SetJwtTokenAction} from "./Reducer/SetJwtToken.Action";

export type RootAction =
    | SagaActions
    // Auth Actions
    | SetJwtTokenAction
    | AddFetchRequestAction
    | SetFetchRequestResultAction
