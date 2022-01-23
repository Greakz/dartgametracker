export const REGISTRATION_SAGA_ACTION: 'RegistrationSagaAction' = 'RegistrationSagaAction'

export interface RegistrationSagaAction {
    type: 'RegistrationSagaAction'
    username: string
    password: string
    email: string
}

export function buildRegistrationSagaAction(username: string, password: string, email: string): RegistrationSagaAction {
    return {
        type: REGISTRATION_SAGA_ACTION,
        username: username,
        password: password,
        email: email
    }
}