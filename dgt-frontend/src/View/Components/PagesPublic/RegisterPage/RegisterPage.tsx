import React, {ChangeEvent, Dispatch} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../../Redux/RootState";
import {RootAction} from "../../../../Redux/RootAction";
import './RegisterPage.css';
import {Link} from "react-router-dom";
import {StateRequestEntry} from "../../../../Redux/State/HttpState/StateRequestEntry";
import LoadingSpinner from "../../_other/Elements/LoadingSpinner";
import {
    RegistrationRequest,
    RegistrationRequestHandler,
    RegistrationResponse
} from "../../../../Api/RequestHandler/RegistrationRequestHandler";
import {call} from "redux-saga/effects";
import {ResponseWrapper} from "../../../../Api/BaseResponse";

interface StateProps {
}

interface DispatchProps {
}

interface InternalState {
    request: StateRequestEntry;
    nameInput: string;
    emailInput: string;
    pwInput: string;
    nameError: string;
    emailError: string;
    pwError: string;
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
        this.state = {
            request: {
                id: 'registration',
                status: 'not-requested'
            },
            nameInput: '',
            emailInput: '',
            pwInput: '',
            nameError: '',
            emailError: '',
            pwError: '',
        };
    }

    render() {
        return (
            <div className={'welcome-container blend-in'}>

                <div className={'welcome-container-vert-flex'}>

                    <div className={'header-logo'}>DartGameTracker Registration</div>

                    {(this.state.request.status === 'not-requested' || this.state.request.status === 'pending') && this.formContent()}
                    {(this.state.request.status === 'success') && this.finishedContent()}


                </div>
            </div>
        );
    }

    formContent() {
        return (
            <div className={'login-form'}>

                <div className={'input-container p025'}>
                    <label htmlFor={'name'}>Name</label>
                    <input
                        type={'text'}
                        value={this.state.nameInput}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => this.inputName(e.target.value)}
                    />
                </div>

                <div className={'input-container p025'}>
                    <label htmlFor={'email'}>Email</label>
                    <input
                        type={'text'}
                        value={this.state.emailInput}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => this.inputEmail(e.target.value)}
                    />
                </div>

                <div className={'input-container p025'}>
                    <label htmlFor={'password'}>Password</label>
                    <input
                        type={'password'}
                        value={this.state.pwInput}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => this.inputPw(e.target.value)}
                    />
                </div>

                <div className={'button-container'} onClick={() => this.hitRegisterButton()}>
                    <button>
                        {
                            this.state.request.status === 'not-requested' && 'Register'
                        }
                        {
                            this.state.request.status === 'pending' && <LoadingSpinner/>
                        }
                    </button>
                </div>

            </div>
        );
    }

    private inputName(v: string) {
        this.setState({
            ...this.state,
            nameInput: v,
        });
    }

    private inputEmail(v: string) {
        this.setState({
            ...this.state,
            emailInput: v,
        });
    }

    private inputPw(v: string) {
        this.setState({
            ...this.state,
            pwInput: v,
        });
    }

    private hitRegisterButton() {
        if (this.state.request.status === "not-requested") {
            let nameError = '';
            let pwError = '';
            let emailError = '';

            if (this.state.nameInput.length < 2) {
                nameError = 'name-to-short';
            }

            if (this.state.pwInput.length < 6) {
                nameError = 'pw-to-short';
            }

            const e_split = this.state.emailInput.split("@");
            const after_add_split = e_split[e_split.length - 1].split(".");
            if (e_split.length < 2 || after_add_split.length < 2) {
                emailError = 'wrong-email';
            }

            if (nameError !== '' || pwError !== '' || emailError !== '') {
                this.setState({
                    ...this.state,
                    nameError: nameError,
                    pwError: pwError,
                    emailError: emailError,
                });
            } else {
                const registrationRequest: RegistrationRequest = {
                    username: this.state.nameInput,
                    email: this.state.emailInput,
                    password: this.state.pwInput
                };
                this.setState({
                    ...this.state,
                    request: {
                        id: 'registration',
                        status: 'pending'
                    }
                });

                RegistrationRequestHandler.fetch(registrationRequest).then((r: ResponseWrapper<RegistrationResponse>) => {
                        this.setState({
                            ...this.state,
                            request: {
                                id: 'registration',
                                status: 'success',
                                response: r
                            }
                        })
                });

            }
        }
    }


    finishedContent() {
        return (
            <div className={'login-form'}>
                Registration Complete! You can now <Link to={'/login'}>LogIn</Link>!
            </div>
        );
    }

}

export default connect(RegisterPage.mapStateProps, RegisterPage.mapDispatchProps)(RegisterPage);