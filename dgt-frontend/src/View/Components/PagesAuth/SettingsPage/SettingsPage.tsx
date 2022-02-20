import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../../Redux/RootState";
import {RootAction} from "../../../../Redux/RootAction";
import './SettingsPage.css';

interface StateProps {

}

interface DispatchProps {

}

interface InternalState {

}

type Props = StateProps & DispatchProps;

class SettingsPage extends React.Component<Props, InternalState> {

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

                <div className={'page-title'}>Settings</div>


            </div>
        );
    }
}

export default connect(SettingsPage.mapStateProps, SettingsPage.mapDispatchProps)(SettingsPage);
