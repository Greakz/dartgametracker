import * as React from "react";
import {RootState} from "../Redux/RootState";
import {RootAction} from "../Redux/RootAction";
import {connect, DispatchProp} from "react-redux";
import AuthSidebar from "./Components/Sidebars/AuthSidebar";
import FriendsSidebar from "./Components/Sidebars/FriendsSidebar";
import ApplicationRouting from "./Components/ApplicationRouting";
import {BrowserRouter} from "react-router-dom";


interface StateProps {
    auth: boolean;
}

interface DispatchProps {

}

type Props = StateProps & DispatchProps;


class Layout extends React.Component<Props, {}> {

    static mapStateProps(state: RootState) {
        return {
            auth: true //state.httpState.auth.type === 'authenticated'
        };
    }

    static mapDispatchProps(dispatch: DispatchProp<RootAction>) {
        return {};
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