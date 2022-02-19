import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../Redux/RootState";
import {RootAction} from "../../../Redux/RootAction";
import './FriendsSidebar.css';
import ChatWindow from "./ChatWindow";

interface ComponentProps {
    children: React.ReactNode;
}

interface StateProps {

}

interface DispatchProps {

}

interface InternalState {

}

type Props = ComponentProps & StateProps & DispatchProps;

class FriendsSidebar extends React.Component<Props, InternalState> {

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
            <React.Fragment>
                <div className={'sidebar-r'}>
                    <div className={'vertical-order'}>
                        <div className={'friend-list-header'}>
                            <h3>Friends</h3>
                        </div>
                        <div className={'friend-list-entries v-scroll'}>

                            {this.friendListEntry()}
                            {this.friendListEntry()}
                            {this.friendListEntry()}
                            {this.friendListEntry()}
                            {this.friendListEntry()}
                            {this.friendListEntry()}
                            {this.friendListEntry()}
                            {this.friendListEntry()}
                            {this.friendListEntry()}
                            {this.friendListEntry()}
                            {this.friendListEntry()}

                        </div>

                    </div>
                </div>
                <div className={'sidebar-inset-r blend-in'}>
                    {this.props.children}
                </div>
                <div className={'bottom-line'}>
                    <ChatWindow />
                    <ChatWindow />
                    <ChatWindow />
                    <ChatWindow />
                </div>
            </React.Fragment>
        );
    }

    private friendListEntry() {
        return(
            <div className={'friend-entry'}>
                <div className={'avatar-left'}>
                    Av
                </div>
                <div className={'info-right'}>
                    <div className={'info-top'}>
                        <div className={'name'}>
                            Luke
                        </div>
                        <div className={'status online' /* ingame afk offline */}>
                            Online
                        </div>
                    </div>
                    <div className={'info-bottom'}>
                        Bottom
                    </div>
                </div>

            </div>
        )
    }
}

export default connect(FriendsSidebar.mapStateProps, FriendsSidebar.mapDispatchProps)(FriendsSidebar);
