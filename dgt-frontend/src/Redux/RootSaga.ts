import {takeEvery} from 'redux-saga/effects';
import {REGISTRATION_SAGA_ACTION, RegistrationSagaAction} from "./Saga/Registration.SagaAction";
import {RegistrationSaga} from "./Saga/Registration.Saga";
import {RETRIEVE_TOKEN_SAGA_ACTION, RetrieveTokenSagaAction} from "./Saga/RetrieveToken.SagaAction";
import {RetrieveTokenSaga} from "./Saga/RetrieveToken.Saga";

export type SagaActions =
    | RetrieveTokenSagaAction
    | RegistrationSagaAction

export function* rootSaga() {
    yield takeEvery(RETRIEVE_TOKEN_SAGA_ACTION, RetrieveTokenSaga);
    yield takeEvery(REGISTRATION_SAGA_ACTION, RegistrationSaga);
}
