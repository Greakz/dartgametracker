import {HttpState} from "../HttpState";
import {StateRequestEntry} from "./StateRequestEntry";

export type AuthState = AuthenticatedState | UnauthenticatedState

export interface AuthenticatedState {
    type: 'authenticated';
    token: string;
}

export interface UnauthenticatedState {
    type: 'unauthenticated';
}