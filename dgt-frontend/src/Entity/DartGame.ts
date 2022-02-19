import {GamePlayer} from "./GamePlayer";
import {DartGameTurn} from "./DartGameTurn";

export type DartGameType = '301' | '501' | 'CRICKET' | 'CUSTOM';

interface BaseGame {
    type: DartGameType;
    users: GamePlayer[]; // name suggestions: players
    turns: DartGameTurn[];
}

interface Norm301 extends BaseGame {
    type: '301';
    ruleSet: {
        doubleIn: false,
        doubleOut: true
    };
}

interface Norm501 extends BaseGame {
    type: '501';
    ruleSet: {
        doubleIn: false,
        doubleOut: true
    };
}

interface Cricket extends BaseGame {
    type: 'CRICKET';
    ruleSet: {};
}

interface Custom extends BaseGame {
    type: 'CUSTOM';
    ruleSet: {[key: string]: any};
}

export type DartGame = Norm301 | Norm501 | Cricket | Custom