import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../../Redux/RootState";
import {RootAction} from "../../../../Redux/RootAction";
import './WelcomePage.css';
import {Link} from "react-router-dom";

interface StateProps {

}

interface DispatchProps {

}

interface InternalState {

}

type Props = StateProps & DispatchProps;

class WelcomePage extends React.Component<Props, InternalState> {

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
            <div className={'welcome-container blend-in'}>

                <div className={'welcome-container-vert-flex'}>

                    <div className={'header-logo'}>DartGameTracker</div>

                    <div className={'login-form'}>

                        <div className={'input-container p025'}>
                            <label htmlFor={'name'}>Name / Email</label>
                            <input type={'text'}/>
                        </div>

                        <div className={'input-container p025'}>
                            <label htmlFor={'name'}>Password</label>
                            <input type={'password'}/>
                        </div>

                        <div className={'button-container'}>
                            <Link to={'/dashboard'}>
                                <button>
                                    Login
                                </button>
                            </Link>
                        </div>

                    </div>


                </div>
            </div>
        );
    }
}

export default connect(WelcomePage.mapStateProps, WelcomePage.mapDispatchProps)(WelcomePage);