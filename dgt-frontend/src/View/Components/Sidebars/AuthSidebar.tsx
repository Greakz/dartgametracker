import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../Redux/RootState";
import {RootAction} from "../../../Redux/RootAction";
import './AuthSidebar.css';
import {Dashboard, ManageSearch, Settings, SettingsInputComposite} from "@mui/icons-material";
import SidebarLink from "./SidebarLink";
import LogoutButton from "./LogoutButton";
import {Link} from "react-router-dom";
import {buildClearJwtTokenAction} from "../../../Redux/Reducer/ClearJwtToken.Action";

interface ComponentProps {
    children: React.ReactNode;
}

interface StateProps {

}

interface DispatchProps {
    clearJwtToken: () => void;
}

interface InternalState {

}

type Props = ComponentProps & StateProps & DispatchProps;

class AuthSidebar extends React.Component<Props, InternalState> {

    static mapStateProps(state: RootState): StateProps {
        return {};
    }

    static mapDispatchProps(dispatch: Dispatch<RootAction>): DispatchProps {
        return {
            clearJwtToken: () => {
                dispatch(buildClearJwtTokenAction());
            }
        };
    }

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className={'sidebar'}>
                    <div className={'vertical-order'}>
                        <div className={'top'}>
                            <div className={'header'}>
                                DartGameTracker
                            </div>

                            <SidebarLink linkTo={'/dashboard'} icon={<Dashboard/>} onClick={() => {
                            }}>Dashboard</SidebarLink>
                            <SidebarLink linkTo={'/game'} icon={<SettingsInputComposite/>} onClick={() => {
                            }}>Play Game</SidebarLink>
                            <SidebarLink linkTo={'/history'} icon={<ManageSearch/>} onClick={() => {
                            }}>History</SidebarLink>
                            <SidebarLink linkTo={'/settings'} icon={<Settings/>} onClick={() => {
                            }}>Settings</SidebarLink>
                        </div>
                        <div className={'bottom'}>
                            <LogoutButton
                                onClick={() => {
                                    this.props.clearJwtToken();
                                }}
                            />
                            <Link to={'#'}>
                                <div className={'imprint'}>
                                    Imprint
                                </div>
                            </Link>
                            <Link to={'#'}>
                                <div className={'tos'}>
                                    Terms of Service
                                </div>
                            </Link>
                            <Link to={'#'}>
                                <div className={'support'}>
                                    Support us
                                </div>
                            </Link>
                            <div className={'copyright'}>
                                2022 &#169; DartGameTracker
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'sidebar-inset'}>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}

export default connect(AuthSidebar.mapStateProps, AuthSidebar.mapDispatchProps)(AuthSidebar);
