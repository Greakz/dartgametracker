import React, {ChangeEvent, Dispatch} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../../Redux/RootState";
import {RootAction} from "../../../../Redux/RootAction";
import './DartTurnInput.css';
import {DartGameThrow} from "../../../../Entity/DartGameThrow";
import {ArrowRight, ChevronRight} from "@mui/icons-material";


interface ComponentProps {
    previousScore: number
    turn: (r: number,
           d1: DartGameThrow | null,
           d2: DartGameThrow | null,
           d3: DartGameThrow | null) => void;
}

interface StateProps {

}

interface DispatchProps {

}

interface InternalState {

    inputResult: number;
    inputDart1: number | null;
    inputDart2: number | null;
    inputDart3: number | null;

}

type Props = StateProps & DispatchProps & ComponentProps;

class DartTurnInput extends React.Component<Props, InternalState> {

    static mapStateProps(state: RootState): StateProps {
        return {};
    }

    static mapDispatchProps(dispatch: Dispatch<RootAction>): DispatchProps {
        return {};
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            inputResult: 0,
            inputDart1: null,
            inputDart2: null,
            inputDart3: null
        };
    }

    render() {
        const resultOnCommit = this.props.previousScore - this.state.inputResult;
        return (
            <div className={'single-score'}>
                <div className={'throws glass'}>
                    <div className={'dart-turn-input'}>
                        <div className={'top-input'}>
                            <input
                                type={'text'}
                                value={this.state.inputResult}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => this.inputResult(e.target.value)}
                            />
                        </div>
                        <div className={'bottom-input'}>
                            <input
                                type={'text'}
                                value={this.toString(this.state.inputDart1)}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => this.inputDart(1, e.target.value)}
                            />
                            <input
                                type={'text'}
                                value={this.toString(this.state.inputDart2)}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => this.inputDart(2, e.target.value)}
                            />
                            <input
                                type={'text'}
                                value={this.toString(this.state.inputDart3)}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => this.inputDart(3, e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className={'result glass active commit-button'}>
                        {resultOnCommit}
                        <ArrowRight />
                </div>
            </div>
        );
    }

    private toString(value: number | null): string {
        if(value === null) {
            return '-';
        }
        return '' + value
    }

    private inputResult(value: string) {
        let val = this.checkNumber(value);
        const state = {...this.state};
        if(val === null) {
            val = 0;
        }
        state.inputResult = val;
        state.inputDart1 = null;
        state.inputDart2 = null;
        state.inputDart3 = null;
        this.setState(state);
    }

    private inputDart(dart: number, value: string) {
        const val = this.checkNumber(value);
        const state = {...this.state};
        if(dart === 1) {
            state.inputDart1 = val;
        }
        if(dart === 2) {
            state.inputDart2 = val;
        }
        if(dart === 3) {
            state.inputDart3 = val;
        }
        let result = 0;
        result += state.inputDart1 !== null ? state.inputDart1 : 0;
        result += state.inputDart2 !== null ? state.inputDart2 : 0;
        result += state.inputDart3 !== null ? state.inputDart3 : 0;
        state.inputResult = result;
        this.setState(state);
    }

    private checkNumber(value: string): number | null {
        if(parseInt(value)) {
            return parseInt(value)
        }
        return null
    }

}

export default connect(DartTurnInput.mapStateProps, DartTurnInput.mapDispatchProps)(DartTurnInput);
