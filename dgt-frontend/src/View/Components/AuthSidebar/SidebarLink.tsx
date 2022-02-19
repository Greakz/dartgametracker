import React from "react";
import './AuthSidebar.css';
import {Link} from "react-router-dom";

interface ComponentProps {
    children: React.ReactNode;
    icon: React.ReactNode;
    linkTo: string
    onClick: () => void;
}

interface InternalState {

}

export default class SidebarLink extends React.Component<ComponentProps, InternalState> {

    constructor(props: ComponentProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Link to={this.props.linkTo}>
                <div className={'sidebar-link'}>
                    <div className={'icon'}>
                        {this.props.icon}
                    </div>
                    <div className={'text'}>
                        {this.props.children}
                    </div>
                </div>
            </Link>
        );
    }
}

