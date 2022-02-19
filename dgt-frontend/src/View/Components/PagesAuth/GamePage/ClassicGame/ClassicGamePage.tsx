import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../../../Redux/RootState";
import {RootAction} from "../../../../../Redux/RootAction";
import './ClassicGamePage.css';
import {ChevronLeft} from "@mui/icons-material";
import DartBoardSvgClickable, {DartBoardHit} from "../DartBoardClickable/DartBoardSvgClickable";

interface StateProps {

}

interface DispatchProps {

}

interface InternalState {

}

type Props = StateProps & DispatchProps;

class ClassicGamePage extends React.Component<Props, InternalState> {

    static mapStateProps(state: RootState): StateProps {
        return {};
    }

    static mapDispatchProps(dispatch: Dispatch<RootAction>): DispatchProps {
        return {};
    }

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={'game-view-horizontal-master-frame'}>
                <div className={'game-view-vertical-master-frame'}>
                    <div className={'game-view-header'}>
                        <div className={'game-view-title'}>
                            Classic
                        </div>
                        <div className={'game-view-statistics'}>
                            {this.statistics()}
                        </div>
                    </div>
                    <div className={'game-view-main-frame'}>
                        {this.mainFrame()}
                    </div>
                </div>
            </div>
        );
    }

    statistics() {
        return (
            <React.Fragment>
                <div className={'rule-set'}>
                    Double Out&nbsp;&nbsp;|&nbsp;&nbsp;501 Down&nbsp;&nbsp;|&nbsp;&nbsp;BO5
                    Sets&nbsp;&nbsp;|&nbsp;&nbsp;BO3 Legs&nbsp;&nbsp;|&nbsp;&nbsp;2 Player
                </div>
                <div className={'game-view-statistics-horizontal-frame'}>
                    <div className={'data-box-frame'}>

                        <div className={'data-entry'}>
                            <div className={'label'}>
                                Match Avg:
                            </div>
                            <div className={'value-box'}>
                                <div className={'value'}>
                                    21.335
                                </div>
                                <div className={'value-sub'}>
                                    per Turn
                                </div>
                            </div>
                        </div>

                        <div className={'data-entry'}>
                            <div className={'label'}>
                                Game Avg:
                            </div>
                            <div className={'value-box'}>
                                <div className={'value'}>
                                    21.335
                                </div>
                                <div className={'value-sub'}>
                                    per Turn
                                </div>
                            </div>
                        </div>

                        <div className={'data-entry'}>
                            <div className={'label'}>
                                Peak Avg:
                            </div>
                            <div className={'value-box'}>
                                <div className={'value'}>
                                    21.335
                                </div>
                                <div className={'value-sub'}>
                                    per Turn
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={'statistics-button'}>
                        Btn
                    </div>
                </div>
            </React.Fragment>

        );
    }

    rightBar() {
        return (
            <div>
                Right Bar
            </div>
        );
    }

    mainFrame() {
        return (
            <React.Fragment>
                <div className={'left-space'}>

                    {this.playerCard(1)}
                    {this.playerCard(2)}
                    {this.playerCard(3)}

                </div>
                <div className={'right-space'}>
                    {this.rightSpaceInput()}
                </div>
            </React.Fragment>
        );
    }

    playerCard(i: number) {
        return (
            <div className={'player-card big' + ((i === 2) ? ' active-turn' : '')}>
                <div className={'player-info'}>
                    <div className={'left'}>
                        <span className={'name'}>Luke</span><br/>
                        <span className={'standing'}>SETS: 2 | CURR.LEGS 1</span>
                    </div>
                    <div className={'right'}>
                        <span className={'position-2'}>2.</span>
                    </div>
                </div>
                <div className={'statistics'}>
                    ...
                </div>
                <div className={'player-score'}>
                    402
                </div>
            </div>
        );
    }

    private dartboardinput: React.RefObject<HTMLDivElement> = React.createRef();

    rightSpaceInput() {

        return (
            <div className={'input-frame'}>
                <div className={'above-board'}>
                    <div className={'who-turn'}>Luke's Turn</div>
                </div>
                <div className={'dartboard'} ref={this.dartboardinput}>
                    <DartBoardSvgClickable
                        onClick={(hitElem: DartBoardHit) => {

                        }}
                        onHover={(hoverElem: DartBoardHit | null) => {

                        }}
                    />
                </div>
                <div className={'below-board'}>
                    <input type={'text'} value={'t-t-t'}/>
                    <button>Enter</button>
                </div>
            </div>
        );
    }

    rightSpaceHistory() {
        return (
            <div className={'in-game-history'}>
                <div className={'info'}>
                    <div className={'left'}>
                        <div className={'btn-w-icon'}>
                            <div className={'icon'}>
                                <ChevronLeft/>
                            </div>
                            <div className={'text'}>
                                <div>gameview</div>
                            </div>
                        </div>
                    </div>
                    <div className={'right'}>
                        Luke' Turns
                    </div>
                </div>
                <div className={'table'}>
                    <table>
                        <tr>
                            <th className={'turn'}>Turn</th>
                            <th className={'fill'}></th>
                            <th className={'darts'}>Darts</th>
                            <th className={'result'}>Result</th>
                            <th className={'score'}>Score</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td/>
                            <td>20T - 20T - 20T</td>
                            <td>180</td>
                            <td>321</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td/>
                            <td>20T - 20T - 20T</td>
                            <td>180</td>
                            <td>141</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td/>
                            <td>20T - 19T - 12D</td>
                            <td>141</td>
                            <td>0</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default connect(ClassicGamePage.mapStateProps, ClassicGamePage.mapDispatchProps)(ClassicGamePage);
