import React, {ChangeEvent, Dispatch} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../Redux/RootState";
import {RootAction} from "../../../Redux/RootAction";
import './FriendsSidebar.css';
import ChatWindow from "./ChatWindow";
import {AccountBox, Close, Done, Gamepad, PersonAdd} from "@mui/icons-material";
import {SendFriendRequestHandler} from "../../../Api/RequestHandler/SendFriendRequestHandler";
import LoadingSpinner from "../_other/Elements/LoadingSpinner";

interface ComponentProps {
    children: React.ReactNode;
}

interface StateProps {

}

interface DispatchProps {

}

interface InternalState {
    isSending: boolean
    friendRequestInput: string
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
        this.state = {
            isSending: false,
            friendRequestInput: ''
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className={'sidebar-r'}>
                    <div className={'vertical-order'}>
                        <div className={'friend-list-header'}>
                            Friendlist
                        </div>
                        <div className={'friend-list-entries v-scroll'}>
                            <div className={'header'}>Friends</div>

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


                        <div className={'friend-list-entries open-requests'}>
                            <div className={'header primary'}>Received Friend Requests</div>

                            <div className={'request'}>
                                <div className={'avatar-left'}>av</div>
                                <div className={'name-left'}>Adrianovic</div>
                                <div className={'options-right'}>
                                    <div className={'icon'}>
                                        <Done/>
                                    </div>
                                    <div className={'icon x'}>
                                        <Close/>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={'friend-list-options'}>
                            <div className={'add-friend-btn'} onClick={() => this.sendFriendRequest()}>
                                {this.state.isSending && <LoadingSpinner />}
                                {!this.state.isSending && <PersonAdd />}
                            </div>
                            <input
                                className={'add-friend-input'}
                                placeholder={'add Friend'}
                                value={this.state.friendRequestInput}
                                onChange={(e:ChangeEvent<HTMLInputElement>) => {
                                    this.setState({
                                        ...this.state,
                                        friendRequestInput: e.target.value
                                    })
                                }}
                                disabled={this.state.isSending}
                            />
                        </div>

                    </div>
                </div>
                <div className={'sidebar-inset-r'}>
                    {this.props.children}
                </div>
                <div className={'bottom-line'}>
                    <ChatWindow/>
                    <ChatWindow/>
                    <ChatWindow/>
                    <ChatWindow/>
                </div>
            </React.Fragment>
        );
    }

    private friendListEntry() {
        return (
            <div className={'friend-entry'}>
                <div className={'avatar-left'}>
                    Av
                </div>
                <div className={'name-left'}>
                    Lukeerinosabula
                </div>
                <div className={'info-right'}>
                    <div className={'options'}>
                        <div className={'icon-btn'}>
                            <AccountBox />
                        </div>
                        <div className={'icon-btn'}>
                            <Gamepad />
                        </div>
                    </div>
                    <div className={'status online'}>
                        Online
                    </div>

                </div>

            </div>
        );
    }

    private sendFriendRequest() {
        this.setState({
            ...this.state,
            isSending: true
        })
        SendFriendRequestHandler
            .fetch({
                friendUsername: this.state.friendRequestInput
            })
            .then((d: any) => {
                console.log(d);
                this.setState({
                    ...this.state,
                    isSending: false,
                    friendRequestInput: ''
                })
        })
    }
}

export default connect(FriendsSidebar.mapStateProps, FriendsSidebar.mapDispatchProps)(FriendsSidebar);
