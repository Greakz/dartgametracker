export const SET_JWT_TOKEN: 'SetJwtTokenAction' = 'SetJwtTokenAction';

export interface SetJwtTokenAction {
    type: 'SetJwtTokenAction';
    token: string;
}

export function buildSetJwtTokenAction(token: string): SetJwtTokenAction {
    return {
        type: SET_JWT_TOKEN,
        token: token
    };
}