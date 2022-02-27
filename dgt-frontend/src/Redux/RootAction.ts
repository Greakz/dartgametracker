import {AddFetchRequestAction} from "./Reducer/AddFetchRequest.Action";
import {SagaActions} from "./RootSaga";
import {SetFetchRequestResultAction} from "./Reducer/SetFetchRequestResult.Action";
import {SetJwtTokenAction} from "./Reducer/SetJwtToken.Action";
import {ClearJwtTokenAction} from "./Reducer/ClearJwtToken.Action";

export type RootAction =
    | SagaActions
    // Auth Actions
    | SetJwtTokenAction
    | ClearJwtTokenAction
    | AddFetchRequestAction
    | SetFetchRequestResultAction
