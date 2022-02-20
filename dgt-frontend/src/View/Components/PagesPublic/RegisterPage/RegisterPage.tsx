import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../../Redux/RootState";
import {RootAction} from "../../../../Redux/RootAction";
import './RegisterPage.css';
import {Link} from "react-router-dom";

interface StateProps {

}

interface DispatchProps {

}

interface InternalState {

}

type Props = StateProps & DispatchProps;

class RegisterPage extends React.Component<Props, InternalState> {

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

                    <div className={'header-logo'}>DartGameTracker Registration</div>

                    <div className={'login-form'}>

                        <div className={'input-container p025'}>
                            <label htmlFor={'name'}>Name</label>
                            <input type={'text'}/>
                        </div>

                        <div className={'input-container p025'}>
                            <label htmlFor={'name'}>Email</label>
                            <input type={'text'}/>
                        </div>

                        <div className={'input-container p025'}>
                            <label htmlFor={'name'}>Password</label>
                            <input type={'password'}/>
                        </div>

                        <div className={'button-container'}>
                            <Link to={'/dashboard'}>
                                <button>
                                    Register
                                </button>
                            </Link>
                        </div>

                    </div>


                </div>
            </div>
        );
    }
}

export default connect(RegisterPage.mapStateProps, RegisterPage.mapDispatchProps)(RegisterPage);