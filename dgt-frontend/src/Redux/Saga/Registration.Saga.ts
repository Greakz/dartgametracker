import {call, put} from "redux-saga/effects";
import {RegistrationSagaAction} from "./Registration.SagaAction";
import {buildAddFetchRequestAction} from "../Reducer/AddFetchRequest.Action";
import {
    RegistrationRequest,
    RegistrationRequestHandler,
    RegistrationResponse
} from "../../Api/RequestHandler/RegistrationRequestHandler";
import {buildSetFetchRequestResultAction} from "../Reducer/SetFetchRequestResult.Action";

export function* RegistrationSaga(action: RegistrationSagaAction) {
    // prepare Data for fetch
    const registrationRequest: RegistrationRequest = {
        username: action.username,
        email: action.email,
        password: action.password
    };

    // mark fetch in State
    yield put(buildAddFetchRequestAction('register'));

    // call the fetch
    const answer: RegistrationResponse = yield call(RegistrationRequestHandler.fetch, registrationRequest);

    // put the answer in State
    yield put(buildSetFetchRequestResultAction('register', answer));
}