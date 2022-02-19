import React, {Dispatch} from "react";
import {connect} from "react-redux";
import './ClassicGame.css';
import {RootState} from "../../../../../../Redux/RootState";
import {DartBoardHit} from "../../DartBoardClickable/DartBoardSvgClickable";
import {DartGame} from "../../../../../../Entity/DartGame";
import {RootAction} from "../../../../../../Redux/RootAction";
import AuthSidebar from "../../../../Sidebars/AuthSidebar";
import GamePlayerScores from "./GamePlayerScores";

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

class ClassicGame extends React.Component<Props, InternalState> {

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
                turns: []
            }
        };
    }

    render() {
        return (
            <AuthSidebar>
                <div className={'input-sidebar-inset'}>
                <div className={'classic-game'}>
                    <div className={'classic-game-header'}>
                        <div className={'title glass'}>Classic 501</div>
                        <div className={'turn glass'}>
                            Turn: <span className={"value"}>4</span><br />
                            Darts: <span className={"value"}>10,11,12</span><br />
                            Player: <span className={"value"}>Luke</span>
                        </div>
                        <div className={'statistics glass'}>
                            TurnAvg: <span className={"value"}>40.25</span><br />
                            Tripple 20's: <span className={"value"}>3</span><br />
                            0er Darts: <span className={"value"}>2</span>
                        </div>
                    </div>
                    <div className={'classic-game-hr glass'} />
                    <div className={'classic-game-player-scores'}>
                        <GamePlayerScores />
                    </div>
                </div>
                </div>
                <div className={'input-sidebar'}>
                    sidebar
                </div>
            </AuthSidebar>

        );
    }
}

export default connect(ClassicGame.mapStateProps, ClassicGame.mapDispatchProps)(ClassicGame);
