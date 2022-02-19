import {DartGameThrow} from "./DartGameThrow";

export interface DartGameTurn {
    turnNumber: number;
    result: number
    user: string
    throws: DartGameThrow[]
}