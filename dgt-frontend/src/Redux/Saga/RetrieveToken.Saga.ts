import {RetrieveTokenSagaAction} from "./RetrieveToken.SagaAction";
import {call, put} from "redux-saga/effects";
import {buildSetRequestIsPendingAction} from "../Reducer/SetRequestIsPending.Action";
import {
    JwtTokenRequest,
    JwtTokenRequestHandler,
    JwtTokenResponse
} from "../../Api/RequestHandler/JwtTokenRequestHandler";
import {buildSetJwtTokenAction} from "../Reducer/SetJwtToken.Action";

export function* RetrieveTokenSaga(action: RetrieveTokenSagaAction) {

    yield put(buildSetRequestIsPendingAction(true));

    const retrieveTokenRequest: JwtTokenRequest = {
        username: action.username,
        password: action.password
    };
    const answer: JwtTokenResponse = yield call(JwtTokenRequestHandler.fetch, retrieveTokenRequest);
    yield put(buildSetRequestIsPendingAction(false));

    if (answer.jwttoken) {
        yield put(buildSetJwtTokenAction(answer.jwttoken));
    }

}