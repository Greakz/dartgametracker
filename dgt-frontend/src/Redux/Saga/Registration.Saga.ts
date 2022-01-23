import {call, put} from "redux-saga/effects";
import {RegistrationSagaAction} from "./Registration.SagaAction";
import {buildSetRequestIsPendingAction} from "../Reducer/SetRequestIsPending.Action";
import {
    RegistrationRequest,
    RegistrationRequestHandler,
    RegistrationResponse
} from "../../Api/RequestHandler/RegistrationRequestHandler";

export function* RegistrationSaga(action: RegistrationSagaAction) {

    yield put(buildSetRequestIsPendingAction(true));

    const registrationRequest: RegistrationRequest = {
        username: action.username,
        email: action.email,
        password: action.password
    };
    const answer: RegistrationResponse = yield call(RegistrationRequestHandler.fetch, registrationRequest);

    yield put(buildSetRequestIsPendingAction(false));


}