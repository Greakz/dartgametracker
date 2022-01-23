import React, {ChangeEvent, Dispatch} from "react";
import GlassPane from "../Optics/GlassPane";
import LogoBig from "../Elements/LogoBig";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {RootState} from "../../../Redux/RootState";
import {RootAction} from "../../../Redux/RootAction";
import {buildRegistrationSagaAction} from "../../../Redux/Saga/Registration.SagaAction";
import LoadingSpinner from "../Elements/LoadingSpinner";

interface InternalState {
    nameInput: string;
    pwInput: string;
    emailInput: string;
    requestSend: boolean;
}

interface StateProps {
    requestIsPending: boolean;
}

interface DispatchProps {
    sendRegistrationRequest: (username: string, email: string, password: string) => void;
}

type FinalProps = StateProps & DispatchProps

class Register extends React.Component<FinalProps, InternalState> {

    static mapStateProps(state: RootState): StateProps {
        return {
            requestIsPending: state.httpState.requestIsPending
        };
    }

    static mapDispatchProps(dispatch: Dispatch<RootAction>): DispatchProps {
        return {
            sendRegistrationRequest: (username: string, email: string, password: string) => {
                dispatch(buildRegistrationSagaAction(username, password, email));
            }
        };
    }

    constructor(props: FinalProps) {
        super(props);
        this.state = {
            nameInput: '',
            pwInput: '',
            emailInput: '',
            requestSend: false
        };
    }

    render() {
        return <GlassPane className={"registration-panel"}>
            <LogoBig/>
            Registration
            <hr style={{marginTop: 16}}/>
            {this.userInput()}
            {this.emailInput()}
            {this.passwordInput()}
            {this.finishButton()}
            <hr style={{marginTop: 16}}/>
            {this.bottomHint()}
        </GlassPane>;
    }

    private userInput() {
        return (
            <div className={'input-container'}>
                <label htmlFor={'name'}>Username:</label><br/>
                <input
                    type={'text'}
                    id={"name"}
                    value={this.state.nameInput}
                    placeholder={'...'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        this.setState({...this.state, nameInput: e.target.value});
                    }}
                />
            </div>
        );
    }

    private emailInput() {
        return (
            <div className={'input-container'}>
                <label htmlFor={'email'}>Email:</label><br/>
                <input
                    type={'email'}
                    id={'email'}
                    value={this.state.emailInput}
                    placeholder={'...'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        this.setState({...this.state, emailInput: e.target.value});
                    }}
                />
            </div>
        );
    }

    private passwordInput() {
        return (
            <div className={'input-container'}>
                <label htmlFor={'password'}>Password:</label><br/>
                <input
                    type={'password'}
                    id={'password'}
                    value={this.state.pwInput}
                    placeholder={'...'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        this.setState({...this.state, pwInput: e.target.value});
                    }}
                />
            </div>
        );
    }

    private bottomHint() {
        if (this.state.requestSend && this.props.requestIsPending) {
            return null;
        } else if (this.state.requestSend && !this.props.requestIsPending) {
            return (
                <React.Fragment>
                    Your Account was created. You can <Link to={'/login'}>login now!</Link>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    Already have an Account? <Link to={'/login'}>Login now!</Link>
                </React.Fragment>
            );
        }
    }

    private finishButton() {
        if (this.state.requestSend && this.props.requestIsPending) {
            return (
                <button style={{marginTop: 8}} disabled={true}><LoadingSpinner/></button>
            );
        } else if (this.state.requestSend) {
            return (
                <button style={{marginTop: 8}} disabled={true}>Registration successfully finished</button>
            );
        } else {
            return (
                <button style={{marginTop: 8}} onClick={() => this.sendRegistrationRequest()}>Register</button>
            );
        }
    }

    private sendRegistrationRequest() {
        if (this.state.nameInput.length < 2) {
            console.error("name to short");
            return;
        }
        if (this.state.pwInput.length < 8) {
            console.error("password to short");
            return;
        }
        if (this.state.emailInput.length < 1) {
            console.error("no email");
            return;
        }
        this.setState({
            ...this.state,
            requestSend: true
        });
        this.props.sendRegistrationRequest(
            this.state.nameInput,
            this.state.emailInput,
            this.state.pwInput
        );
    }

}

export default connect(Register.mapStateProps, Register.mapDispatchProps)(Register);