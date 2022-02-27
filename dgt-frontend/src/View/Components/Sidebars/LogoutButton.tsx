import React from "react";
import './AuthSidebar.css';
import {Logout} from "@mui/icons-material";

interface ComponentProps {
    onClick: () => void;
}

interface InternalState {

}

export default class LogoutButton extends React.Component<ComponentProps, InternalState> {

    constructor(props: ComponentProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={'sidebar-link'} onClick={() => this.props.onClick()}>
                <div className={'icon'}>
                    <Logout/>
                </div>
                <div className={'text'}>
                    Logout
                </div>
            </div>
        );
    }
}

