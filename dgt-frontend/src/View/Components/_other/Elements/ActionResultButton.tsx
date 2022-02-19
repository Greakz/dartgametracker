import React from "react";
import './ActionResultButton.css';

export type ActionResultButtonStates = 'normal' | 'loading' | 'success' | 'failure';

interface Props {
    text: string;
    state: ActionResultButtonStates;
    onClick: () => void;
    style?: React.CSSProperties;
    disabled?: boolean;
    autoResetOnFailure?: boolean;
}

interface InternalState {
}

export default class ActionResultButton extends React.Component<Props, InternalState> {

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        let classNames = 'ar-btn ';
        switch (this.props.state) {
            case 'normal':
                break;
            case 'loading':
                classNames += 'actionform';
                break;
            case 'success':
                classNames += 'actionform success';
                break;
            case 'failure':
                classNames += 'actionform failure';
                break;
        }
        return (<div
            className={classNames}
            style={this.props.style}
            onClick={() => {
                this.props.onClick();
            }}>
            <div className={"action-button-svg"}>
                {this.props.state === 'success' && ActionResultButton.renderSuccessContent()}
                {this.props.state === 'failure' && ActionResultButton.renderFailureContent()}
                {this.props.state === 'loading' && ActionResultButton.renderLoadingContent()}
            </div>
            {this.props.state === 'normal' && this.props.text}
        </div>);
    }

    private static renderSuccessContent() {
        return <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 8 8">
            <g>
                <path id="success-model"
                      d={"M1.6,3.9 L3.4,5.9 L6.4,2.2"}
                      stroke={'#ffffff'}
                      strokeWidth={0.9}
                      fill={'transparent'}
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}
                />
            </g>
        </svg>;
    }

    private static renderFailureContent() {
        return <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 8 8">
            <g>
                <path id="success-model"
                      d={"M1.9,6.1 L6.1,1.9 M1.9,1.9 L 6.1,6.1"}
                      stroke={'#ffffff'}
                      strokeWidth={0.9}
                      fill={'transparent'}
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}
                />
            </g>
        </svg>;
    }

    private static renderLoadingContent() {
        return <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 8 8">
            <g>
                <g transform={'translate(2,4)'}>
                    <circle
                        id={"loading-circle-1"}
                        cx={0}
                        cy={0}
                        r={0.7}
                        strokeWidth={0.9}
                        fill={'#ffffff'}
                    />
                </g>
                <g transform={'translate(4,4)'}>
                    <circle
                        id={"loading-circle-2"}
                        cx={0}
                        cy={0}
                        r={0.7}
                        strokeWidth={0.9}
                        fill={'#ffffff'}
                    />
                </g>
                <g transform={'translate(6,4)'}>
                    <circle
                        id={"loading-circle-3"}
                        cx={0}
                        cy={0}
                        r={0.7}
                        strokeWidth={0.9}
                        fill={'#ffffff'}
                    />
                </g>
            </g>
        </svg>;
    }


}