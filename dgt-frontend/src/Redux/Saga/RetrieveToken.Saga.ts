import {RetrieveTokenSagaAction} from "./RetrieveToken.SagaAction";
import {call, put} from "redux-saga/effects";
import {buildAddFetchRequestAction} from "../Reducer/AddFetchRequest.Action";
import {
    JwtTokenRequest,
    JwtTokenRequestHandler,
    JwtTokenResponse
} from "../../Api/RequestHandler/JwtTokenRequestHandler";
import {buildSetJwtTokenAction} from "../Reducer/SetJwtToken.Action";
import {buildSetFetchRequestResultAction} from "../Reducer/SetFetchRequestResult.Action";

export function* RetrieveTokenSaga(action: RetrieveTokenSagaAction) {

    yield put(buildAddFetchRequestAction('retrieve-token'));

    const retrieveTokenRequest: JwtTokenRequest = {
        username: action.username,
        password: action.password
    };
    const answer: JwtTokenResponse = yield call(JwtTokenRequestHandler.fetch, retrieveTokenRequest);
    yield put(buildSetFetchRequestResultAction('retrieve-token', answer));

    if (answer.token) {
        yield put(buildSetJwtTokenAction(answer.token));
    }

}