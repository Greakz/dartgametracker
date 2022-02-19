import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../../../Redux/RootState";
import {RootAction} from "../../../../../Redux/RootAction";
import AuthSidebar from "../../../AuthSidebar/AuthSidebar";
import PlayerSetup from "./PlayerSetup";
import {GamePlayer} from "../../../../../Entity/GamePlayer";
import {DartGame} from "../../../../../Entity/DartGame";
import './Game.css';
import DartBoardThrowSelection from "./DartBoardThrowSelection";
import {DartBoardHit} from "../DartBoardClickable/DartBoardSvgClickable";
import {DartGameTurn} from "../../../../../Entity/DartGameTurn";

interface StateProps {

}

interface DispatchProps {

}

interface InternalState {
    inCreation: boolean;
    turnIndex: number;
    currentInputResult: {
        value: number;
        throws: DartBoardHit[]
    } | null;
    game: DartGame;
}

type Props = StateProps & DispatchProps;

class GameMode501 extends React.Component<Props, InternalState> {

    static mapStateProps(state: RootState): StateProps {
        return {};
    }

    static mapDispatchProps(dispatch: Dispatch<RootAction>): DispatchProps {
        return {};
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            inCreation: true,
            turnIndex: 0,
            currentInputResult: null,
            game: {
                type: '501',
                users: [
                    {name: "Player 1"},
                    {name: "Player 2"},
                ],
                ruleSet: {
                    doubleIn: false,
                    doubleOut: true
                },
                turns: [
                    /*
                    {
                        user: "Player 1",
                        turnNumber: 0,
                        throws: [
                            {
                                result: 14,
                                throwType: 'SINGLE',
                                number: 14
                            },
                            {
                                result: 8,
                                throwType: 'DOUBLE',
                                number: 4
                            },
                            {
                                result: 21,
                                throwType: 'TRIPPLE',
                                number: 7
                            }
                        ],
                        result: 43
                    }
*/
                ]
            }
        };
    }

    render() {
        return (
            <AuthSidebar>
                <div className={'p2 flex-v'}>
                    <div className={'page-title'}>Play Game</div>
                    <div className={'region-title'}>Normal 501</div>
                    {this.state.inCreation && this.gameSetup()}
                    {!this.state.inCreation && this.gameRunning()}
                </div>
            </AuthSidebar>

        );
    }

    private gameRunning() {
        return (<div>
            <div className={'game-vertical-flex'}>
                <div className={'top-chip-container'}>
                    <div className={'top-chip p1 glass'}>
                        <div>Turn</div>
                        <div>3</div>
                    </div>
                    <div className={'top-chip p1 glass'}>
                        <div>Next</div>
                        <div>Player 1</div>
                    </div>
                </div>

                <div>
                    {
                        this.state.game.users.map((user: GamePlayer, index: number) => {
                            return this.gamePlayer(user, index);
                        })
                    }
                </div>

            </div>
        </div>);
    }

    private getAvgScore(user: GamePlayer) {
        let turns = 0;
        let acc = this.state.game.turns.reduce((prev: number, turn: DartGameTurn) => {
            if(turn.user === user.name) {
                turns++;
                return prev + turn.result;
            }
            return prev;
        },
            0);
        if(turns === 0) {
            return "..."
        }
        let score: string = (acc / turns).toString();
        let split = score.split(".");
        if(split.length < 2) {
            return split[0]
        }
        return split[0] + "." + split[1].substring(0, 2);
    }

    private gamePlayer(user: GamePlayer, index: number) {
        const active = index == this.state.turnIndex ? ' active' : '';
        const userCount = this.state.game.users.length;
        const turns = this.state.game.turns.filter((v: DartGameTurn, i: number) => (i % userCount === index));
        let partialResult = 501;
        return (
            <div className={'player-container'}>
                <div className={'name-plate glass' + active}>
                    {user.name}
                </div>
                <div className={'player-game-data'}>
                    <div className={'statistics p1 glass'}>
                        <div className={'fact'}>Turn Avg</div>
                        <div className={'fact-result'}>{this.getAvgScore(user)}</div>
                        <div className={'fact'}>Top Score</div>
                        <div className={'fact-result'}>140</div>
                    </div>
                    <div className={'scores'}>
                        <div className={'single-score'}>
                            <div className={'throws glass'}>&nbsp;</div>
                            <div className={'result glass'}>501</div>
                        </div>

                        {
                            turns.map((turn: DartGameTurn) => {
                                if(partialResult - turn.result > 1 || partialResult - turn.result === 0) {
                                    partialResult -= turn.result
                                }
                                return (
                                    <div className={'single-score'}>
                                        <div className={'throws glass'}>
                                            <div className={'darts-sum'}>{turn.result}</div>
                                            {
                                                turn.throws.length >= 3 &&
                                                <div className={'single-darts'}>
                                                    {turn.throws[0].result} - {turn.throws[1].result} - {turn.throws[2].result}
                                                </div>
                                            }
                                            {
                                                turn.throws.length < 3 &&
                                                <div className={'single-darts'}>X - X - X</div>
                                            }

                                        </div>
                                        <div className={'result glass'}>{partialResult}</div>
                                    </div>
                                );
                            })
                        }

                        {
                            /*
                            index === this.state.turnIndex &&
                            <DartTurnInput
                                previousScore={426}
                                turn={(r: number,
                                       d1: DartGameThrow | null,
                                       d2: DartGameThrow | null,
                                       d3: DartGameThrow | null) => this.commitTurn(r, d1, d2, d3)}
                            />
*/
                        }
                        {
                            index === this.state.turnIndex &&
                            <div className={'single-score'}>
                                <div className={'throws'}>
                                    <DartBoardThrowSelection
                                        updateResult={(result: number, throws: DartBoardHit[]) => {
                                            this.updateThrowSelection(result, throws);
                                        }}
                                        resetResult={() => {
                                            this.resetThrowSelection();
                                        }}
                                    />
                                </div>
                                <div className={'result'}>
                                    {
                                        this.state.currentInputResult !== null &&
                                        <div className={'button-container'}
                                             style={{width: 'calc(100% + 1em)', fontSize: '0.5em', margin: '-0.5em'}}
                                             onClick={() => this.commitTurn()}>
                                            <button>Submit</button>
                                        </div>
                                    }

                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        );
    }

    private resetThrowSelection() {
        const state = {...this.state};
        state.currentInputResult = null;
        this.setState(state);
    }

    private updateThrowSelection(result: number, throws: DartBoardHit[]) {
        const state = {...this.state};
        state.currentInputResult = {
            value: result,
            throws: throws
        };
        this.setState(state);
    }

    private commitTurn() {
        const state = {...this.state};
        if (state.currentInputResult !== null) {
            const turnNumber = Math.floor(state.game.turns.length / state.game.users.length) + 1; // plus 1 only if 1-base, remove for 0-based

            const turn: DartGameTurn = {
                user: state.game.users[state.turnIndex].name,
                throws: state.currentInputResult.throws.map((hit: DartBoardHit) => {
                    const type = (hit.fieldType === 'UPPER_SINGLE' || hit.fieldType === 'LOWER_SINGLE') ? 'SINGLE' : hit.fieldType;
                    const mod = type === 'SINGLE' ? 1 : type === 'DOUBLE' ? 2 : 3;
                    return {
                        throwType: type,
                        number: hit.fieldNumber,
                        result: hit.fieldNumber * mod
                    };
                }),
                turnNumber: turnNumber,
                result: state.currentInputResult.value
            };

            state.game.turns.push(turn);
            state.turnIndex++;
            state.currentInputResult = null;
            if (state.turnIndex >= state.game.users.length) {
                state.turnIndex = 0;
            }
            this.setState(state);
        }
    }

    private gameSetup() {
        return (<div>
            <div className={'game-vertical-flex'}>


                <div className={'region-label'}>Ruleset</div>

                - 501 Points down to zero.<br/>
                - Finish with double out.

                <div className={'region-label'}>Players</div>

                <PlayerSetup
                    playerList={this.state.game.users}
                    changePlayerList={(player: GamePlayer[]) => {
                        const state = {...this.state};
                        state.game.users = player;
                        this.setState(state);
                    }}
                />

                <div className={'button-container mt_2'} style={{alignSelf: 'flex-end'}}
                     onClick={() => this.startGame()}>
                    <button>
                        Start Game
                    </button>
                </div>

            </div>
        </div>);
    }

    private startGame() {
        this.setState({...this.state, inCreation: false});
    }

}

export default connect(GameMode501.mapStateProps, GameMode501.mapDispatchProps)(GameMode501);
