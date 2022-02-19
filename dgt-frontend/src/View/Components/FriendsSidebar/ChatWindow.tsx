import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../Redux/RootState";
import {RootAction} from "../../../Redux/RootAction";
import './FriendsSidebar.css';

interface ComponentProps {
}

interface StateProps {

}

interface DispatchProps {

}

interface InternalState {
    open: boolean;
}

type Props = ComponentProps & StateProps & DispatchProps;

class ChatWindow extends React.Component<Props, InternalState> {

    static mapStateProps(state: RootState): StateProps {
        return {};
    }

    static mapDispatchProps(dispatch: Dispatch<RootAction>): DispatchProps {
        return {};
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div className={'chat-window-mount' + (this.state.open ? ' open' : '')}>
                {
                    this.state.open &&
                    <div className={'chat-window-open'}>
                        <div className={'chat v-scroll'}>

                            <div className={'message-author self'}>
                                Luke
                            </div>
                            <div className={'message self'}>
                                Lorem ipsum dolor sit amet, cruisius irgodos maximos
                            </div>
                            <div className={'message-author other'}>
                                Adrian
                            </div>
                            <div className={'message other'}>
                                Lorem ipsum dolor sit amet, cruisius irgodos maximos
                            </div>
                            <div className={'message-author self'}>
                                Luke
                            </div>
                            <div className={'message self'}>
                                Lorem ipsum dolor sit amet, cruisius irgodos maximos
                            </div>
                            <div className={'message-author other'}>
                                Adrian
                            </div>
                            <div className={'message other'}>
                                Lorem ipsum dolor sit amet, cruisius irgodos maximos
                            </div>

                        </div>
                        <div className={'input'}>

                            <input type={'text'} />
                            <div className={'enter'}>Enter</div>

                        </div>
                    </div>
                }
                <div className={'chat-window-chip'} onClick={() => this.toggle()}>
                    <div className={'name'}>Adrian</div>
                    <div className={'info'}>+2</div>
                </div>
            </div>
        );
    }

    private toggle() {
        this.setState({
            ...this.state,
            open: !this.state.open
        });
    }
}

export default connect(ChatWindow.mapStateProps, ChatWindow.mapDispatchProps)(ChatWindow);
