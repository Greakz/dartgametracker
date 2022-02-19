import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../../Redux/RootState";
import {RootAction} from "../../../../Redux/RootAction";
import './GamePage.css';
import {Link} from "react-router-dom";

interface StateProps {

}

interface DispatchProps {

}

interface InternalState {
    state: 'game-select' | 'in-game';
}

type Props = StateProps & DispatchProps;

class GamePage extends React.Component<Props, InternalState> {

    static mapStateProps(state: RootState): StateProps {
        return {};
    }

    static mapDispatchProps(dispatch: Dispatch<RootAction>): DispatchProps {
        return {};
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            state: 'game-select'
        };
    }

    render() {
        switch (this.state.state) {

        }
        return (
            <div className={'p2'}>

                <div className={'page-title'}>Play Game</div>

                <div className={'create-game-text'}>Create Custom Game Lobby</div>
                <div className={'game-type-chips'}>
                    <Link to={'/game/classic'}>
                        <div className={'chip p2 glass'}>
                            <div className={'chip-title'}>Normal 501</div>
                            <div className={'chip-description'}>
                                Play the Classic Darts game. Start with 501 Points and hit a Double to finish at the
                                End!
                            </div>
                            <div className={'flex'}>
                                <div className={'chip-prop'}>Ruleset:</div>
                                <div className={'chip-value'}>double-out</div>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/game'}>
                        <div className={'chip p2 glass'}>
                            <div className={'chip-title'}>Cricket</div>
                            <div className={'chip-description'}>
                                Hit the 15, 16, ..., 20 and Bullseye multiple times!
                            </div>
                        </div>
                    </Link>
                </div>

            </div>

        );
    }
}

export default connect(GamePage.mapStateProps, GamePage.mapDispatchProps)(GamePage);
