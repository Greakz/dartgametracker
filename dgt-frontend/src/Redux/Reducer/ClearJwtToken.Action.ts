export const CLEAR_JWT_TOKEN: 'ClearJwtTokenAction' = 'ClearJwtTokenAction';

export interface ClearJwtTokenAction {
    type: 'ClearJwtTokenAction';
}

export function buildClearJwtTokenAction(): ClearJwtTokenAction {
    return {
        type: CLEAR_JWT_TOKEN,
    };
}