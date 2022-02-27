import * as React from "react";
import {RootState} from "../Redux/RootState";
import {RootAction} from "../Redux/RootAction";
import {connect} from "react-redux";
import AuthSidebar from "./Components/Sidebars/AuthSidebar";
import FriendsSidebar from "./Components/Sidebars/FriendsSidebar";
import ApplicationRouting from "./Components/ApplicationRouting";
import {BrowserRouter} from "react-router-dom";
import {buildSetJwtTokenAction} from "../Redux/Reducer/SetJwtToken.Action";
import {Dispatch} from "react";


interface StateProps {
    auth: boolean;
}

interface DispatchProps {
    setJwtToken: (token: string) => void
}

type Props = StateProps & DispatchProps;


class Layout extends React.Component<Props, {}> {

    static mapStateProps(state: RootState) {
        return {
            auth: state.httpState.auth.type === 'authenticated'
        };
    }

    static mapDispatchProps(dispatch: Dispatch<RootAction>) {
        return {
            setJwtToken: (token: string) => {
                dispatch(buildSetJwtTokenAction(token))
            }
        };
    }

    constructor(props: Props) {
        super(props);
        const token = localStorage.getItem('auth');
        if(token !== null) {
            props.setJwtToken(token)
        }
    }


    render() {
        if (this.props.auth) {
            return (
                <BrowserRouter>
                    <AuthSidebar>
                        <FriendsSidebar>
                            <ApplicationRouting auth={true}/>
                        </FriendsSidebar>
                    </AuthSidebar>
                </BrowserRouter>
            );
        } else {
            return (
                <BrowserRouter>
                    <ApplicationRouting auth={false}/>
                </BrowserRouter>
            );
        }
    }


}


export default connect(Layout.mapStateProps, Layout.mapDispatchProps)(Layout);