import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../../Redux/RootState";
import {RootAction} from "../../../../Redux/RootAction";
import './DashboardPage.css';

interface StateProps {

}

interface DispatchProps {

}

interface InternalState {

}

type Props = StateProps & DispatchProps;

class DashboardPage extends React.Component<Props, InternalState> {

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
            <div className={'p2 blend-in'}>

                <div className={'page-title'}>Dashboard</div>

                <div className={'dashboard-chips'}>
                    <div className={'chip p2 glass'}>
                        <div className={'chip-title'}>Base Statistics</div>
                        <div className={'flex'}>
                            <div className={'chip-prop'}>Games Played</div>
                            <div className={'chip-value'}>14</div>
                        </div>
                    </div>
                    <div className={'chip p2 glass'}>
                        <div className={'chip-title'}>Game Averages</div>
                        <div className={'flex'}>
                            <div className={'chip-prop'}>Match Darts</div>
                            <div className={'chip-value'}>14.3</div>
                        </div>
                        <div className={'flex'}>
                            <div className={'chip-prop'}>Turn Score</div>
                            <div className={'chip-value'}>41.7</div>
                        </div>
                        <div className={'flex'}>
                            <div className={'chip-prop'}>Dart Score</div>
                            <div className={'chip-value'}>7.2</div>
                        </div>
                    </div>
                    <div className={'chip p2 glass'}>
                        <div className={'chip-title'}>Last Matches</div>

                        <div className={'flex'}>
                            <div className={'chip-prop'}>3 Player - 09.01.2022 - 18:44</div>
                            <div className={'chip-value'}>won | 15D</div>
                        </div>
                        <div className={'flex'}>
                            <div className={'chip-prop'}>2 Player - 09.01.2022 - 18:59</div>
                            <div className={'chip-value'}>135L | 15D</div>
                        </div>
                    </div>
                </div>


            </div>

        );
    }
}

export default connect(DashboardPage.mapStateProps, DashboardPage.mapDispatchProps)(DashboardPage);
