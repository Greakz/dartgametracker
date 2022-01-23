import React, {ChangeEvent, Dispatch} from "react";
import GlassPane from "../Optics/GlassPane";
import LogoBig from "../Elements/LogoBig";
import {Link} from "react-router-dom";
import LoadingSpinner from "../Elements/LoadingSpinner";
import {connect} from "react-redux";
import {RootState} from "../../../Redux/RootState";
import {RootAction} from "../../../Redux/RootAction";
import {buildRetrieveTokenSagaAction} from "../../../Redux/Saga/RetrieveToken.SagaAction";

interface InternalState {
    nameInput: string;
    pwInput: string;
    requestSend: boolean;
}

interface StateProps {
    requestIsPending: boolean;
}

interface DispatchProps {
    sendRetrieveTokenRequest: (username: string, password: string) => void;
}

type FinalProps = StateProps & DispatchProps

class Login extends React.Component<FinalProps, InternalState> {

    static mapStateProps(state: RootState): StateProps {
        return {
            requestIsPending: state.httpState.requestIsPending
        };
    }

    static mapDispatchProps(dispatch: Dispatch<RootAction>): DispatchProps {
        return {
            sendRetrieveTokenRequest: (username: string, password: string) => {
                dispatch(buildRetrieveTokenSagaAction(username, password));
            }
        };
    }

    constructor(props: FinalProps) {
        super(props);
        this.state = {
            nameInput: '',
            pwInput: '',
            requestSend: false
        };
    }

    render() {
        return <GlassPane className={"login-panel"}>
            <LogoBig/>
            <hr style={{marginTop: 16}}/>
            {this.nameInput()}
            {this.pwInput()}
            {this.loginButton()}
            <hr style={{marginTop: 16}}/>
            You don't have an Account? Play anonymous or <Link to={'/register'}>register</Link> now!
            <Link to={'/create-game'}>
                <button style={{marginTop: 48}}>Start anonymous Dart Game</button>
            </Link>
        </GlassPane>;
    }

    private nameInput() {
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

    private pwInput() {
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

    private loginButton() {
        if (this.state.requestSend) {
            return (
                <button style={{marginTop: 8}} disabled={true}><LoadingSpinner/></button>
            );
        } else {
            return (
                <button style={{marginTop: 8}} onClick={() => this.sendRegistrationRequest()}>Register</button>
            );
        }
    }

    private sendRegistrationRequest() {
        this.setState({
            ...this.state,
            requestSend: true
        });
        this.props.sendRetrieveTokenRequest(
            this.state.nameInput,
            this.state.pwInput
        );
    }
}

export default connect(Login.mapStateProps, Login.mapDispatchProps)(Login);