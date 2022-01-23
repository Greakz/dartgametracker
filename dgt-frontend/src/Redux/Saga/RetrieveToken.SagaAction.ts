export const RETRIEVE_TOKEN_SAGA_ACTION: 'RetrieveTokenSagaAction' = 'RetrieveTokenSagaAction';

export interface RetrieveTokenSagaAction {
    type: 'RetrieveTokenSagaAction';
    username: string;
    password: string;
}

export function buildRetrieveTokenSagaAction(username: string, password: string): RetrieveTokenSagaAction {
    return {
        type: RETRIEVE_TOKEN_SAGA_ACTION,
        username: username,
        password: password
    };
}