import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../../Redux/RootState";
import {RootAction} from "../../../../Redux/RootAction";
import AuthSidebar from "../../Sidebars/AuthSidebar";


interface StateProps {

}

interface DispatchProps {

}

interface InternalState {

}

type Props = StateProps & DispatchProps;

class GameMode301 extends React.Component<Props, InternalState> {

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
            <AuthSidebar>
                <div className={'p2'}>

                    <div className={'page-title'}>Play Game: Normal301</div>

                </div>
            </AuthSidebar>

        );
    }
}

export default connect(GameMode301.mapStateProps, GameMode301.mapDispatchProps)(GameMode301);
