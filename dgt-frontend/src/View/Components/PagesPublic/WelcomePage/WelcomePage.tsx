import React, {ChangeEvent, Dispatch} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../../Redux/RootState";
import {RootAction} from "../../../../Redux/RootAction";
import './WelcomePage.css';
import {Link} from "react-router-dom";
import {StateRequestEntry} from "../../../../Redux/State/HttpState/StateRequestEntry";
import {getStateRequestEntry} from "../../../../Redux/State/HttpState";
import {
    JwtTokenRequest,
    JwtTokenRequestHandler,
    JwtTokenResponse
} from "../../../../Api/RequestHandler/JwtTokenRequestHandler";
import {buildSetJwtTokenAction} from "../../../../Redux/Reducer/SetJwtToken.Action";
import {ResponseWrapper} from "../../../../Api/BaseResponse";

interface StateProps {
    loginRequest: StateRequestEntry | undefined
}

interface DispatchProps {
    setToken: (token: string) => void;
}

interface InternalState {
    request: StateRequestEntry;
    nameInput: string;
    pwInput: string;
    error: string
}

type Props = StateProps & DispatchProps;

class WelcomePage extends React.Component<Props, InternalState> {

    static mapStateProps(state: RootState): StateProps {
        return {
            loginRequest: getStateRequestEntry(state.httpState, 'retrieve-token')
        };
    }

    static mapDispatchProps(dispatch: Dispatch<RootAction>): DispatchProps {
        return {
            setToken: (token: string) => {
                dispatch(buildSetJwtTokenAction(token));
            }
        };
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            request: {
                id: 'login',
                status: 'not-requested'
            },
            nameInput: '',
            pwInput: '',
            error: ''
        };
    }

    render() {
        return (
            <div className={'welcome-container blend-in'}>

                <div className={'welcome-container-vert-flex'}>

                    <div className={'header-logo'}>DartGameTracker</div>

                    <div className={'login-form'}>

                        <div className={'input-container p025'}>
                            <label htmlFor={'name'}>Name / Email</label>
                            <input
                                type={'text'}
                                value={this.state.nameInput}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => this.inputName(e.target.value)}
                            />
                        </div>

                        <div className={'input-container p025'}>
                            <label htmlFor={'name'}>Password</label>
                            <input
                                type={'password'}
                                value={this.state.pwInput}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => this.inputPw(e.target.value)}
                            />
                        </div>

                        {this.state.error}

                        <div className={'button-container'} onClick={() => this.hitLoginButton()}>
                            <button>
                                Login
                            </button>
                        </div>

                        <Link to={'/register'}>
                            Register
                        </Link>
                    </div>


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

    private inputPw(v: string) {
        this.setState({
            ...this.state,
            pwInput: v,
        });
    }

    private hitLoginButton() {
        if (this.state.request.status === 'not-requested') {
            const retrieveTokenRequest: JwtTokenRequest = {
                username: this.state.nameInput,
                password: this.state.pwInput
            };
            this.setState({
                ...this.state,
                request: {
                    id: 'login',
                    status: 'pending',
                }
            });
            JwtTokenRequestHandler.fetch(retrieveTokenRequest).then((r: ResponseWrapper<JwtTokenResponse>) => {
                if(r.status === 200) {
                    console.log(r.data.token)
                    this.props.setToken(r.data.token)
                } else {
                    this.setState({
                        ...this.state,
                        request: {
                            id: 'login',
                            status: 'not-requested'
                        },
                        error: r.message
                    })
                }
            });
        }
    }
}

export default connect(WelcomePage.mapStateProps, WelcomePage.mapDispatchProps)(WelcomePage);