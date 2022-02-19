import React, {ChangeEvent} from "react";
import DartBoardSvgClickable, {DartBoardHit, DartBoardHitType} from "../DartBoardClickable/DartBoardSvgClickable";

interface ComponentProps {
    updateResult: (result: number, throws: DartBoardHit[]) => void;
    resetResult: () => void;
}

interface InternalState {
    hoverOpen: boolean;
    focusOpen: boolean;
    hoverNextSelection: {
        fieldNumber: number;
        fieldType: DartBoardHitType
    } | null;
    throws: DartBoardHit[];
    currentThrow: number;
    sumResultInput: string;
}


export default class DartBoardThrowSelection extends React.Component<ComponentProps, InternalState> {

    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            hoverOpen: false,
            focusOpen: false,
            hoverNextSelection: null,
            throws: [],
            currentThrow: 0,
            sumResultInput: ''
        };
    }

    render() {
        const sz = this.state.sumResultInput === '';
        const active_1 = this.state.currentThrow === 0 ? ' active' : '';
        const active_2 = this.state.currentThrow === 1 ? ' active' : '';
        const active_3 = this.state.currentThrow === 2 ? ' active' : '';
        const value_1 = this.state.throws.length > 0 ? this.throwDesc(this.state.throws[0]) : active_1 && sz ? '...' : 'X';
        const value_2 = this.state.throws.length > 1 ? this.throwDesc(this.state.throws[1]) : active_2 && sz ? '...' : 'X';
        const value_3 = this.state.throws.length > 2 ? this.throwDesc(this.state.throws[2]) : active_3 && sz ? '...' : 'X';

        return (
            <div style={{position: "relative"}}>
                {
                    (this.state.hoverOpen || this.state.focusOpen) &&
                    <div className={'dart-board-elevation'}>
                        <div className={'button-container reset-button'} onClick={() => this.resetThrows()}>
                            <button>reset</button>
                        </div>
                        <div style={{alignSelf: 'center', marginBottom: 0.5 + 'em'}}>
                            Select your results
                            {
                                this.state.hoverNextSelection !== null &&
                                <span>
                            [{
                                    this.state.hoverNextSelection.fieldNumber
                                    + this.typeDesc(this.state.hoverNextSelection.fieldType)
                                }]
                        </span>
                            }
                        </div>
                        <DartBoardSvgClickable
                            onClick={(hitElem: DartBoardHit) => {
                                this.enterThrow(hitElem);
                            }}
                            onHover={(hitElem: DartBoardHit | null) => {
                                this.setState({
                                    ...this.state,
                                    hoverNextSelection: hitElem
                                });
                            }}
                        />
                        <div style={{alignSelf: 'center', marginTop: 0.5 + 'em', display: 'flex'}}>
                            <div className={'throw-result' + active_1}>{value_1}</div>
                            <div className={'throw-result' + active_2}>{value_2}</div>
                            <div className={'throw-result' + active_3}>{value_3}</div>
                        </div>
                    </div>
                }
                <div
                    className={'input-container'}
                    style={{width: '100%'}}
                    onMouseEnter={() => {
                        this.setState({...this.state, hoverOpen: true});
                    }}
                    onMouseLeave={() => {
                        this.setState({...this.state, hoverOpen: false});
                    }}
                    onFocus={() => {
                        this.setState({...this.state, focusOpen: true});
                    }}
                >
                    <input
                        id={'throw-result-input'}
                        type={'text'}
                        value={this.state.sumResultInput}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => this.manualInput(event.target.value)}
                    />
                </div>
            </div>
        );
    }

    private typeDesc(type: DartBoardHitType): string {
        return type === 'DOUBLE' ? 'D' : type === 'TRIPPLE' ? 'T' : '';
    }

    private throwDesc(hit: DartBoardHit) {
        const type = hit.fieldType === 'DOUBLE' ? 'D' : hit.fieldType === 'TRIPPLE' ? 'T' : '';
        const mod = hit.fieldType === 'DOUBLE' ? 2 : hit.fieldType === 'TRIPPLE' ? 3 : 1;
        return (hit.fieldNumber * mod).toString();
    }

    private enterThrow(hit: DartBoardHit) {
        const state = {...this.state};
        if (state.currentThrow <= 3) {
            state.throws.push(hit);
            state.currentThrow++;
            if (state.currentThrow == 3) {
                const result = this.addDarts(state.throws);
                state.sumResultInput = result.toString();
                this.props.updateResult(result, state.throws);
                // this.props.thirdDartSelected(state.throws);
            }
            this.setState(state);
        }

    }

    private addDarts(list: DartBoardHit[]) {
        return list.reduce((prevVal: number, current: DartBoardHit, currentIndex: number) => {
            const mod = current.fieldType === 'DOUBLE' ? 2 : current.fieldType === 'TRIPPLE' ? 3 : 1;
            return prevVal + (mod * current.fieldNumber);
        }, 0);
    }

    private manualInput(value: string) {
        if (value === '') {
            value = '0';
        }
        // @ts-ignore
        if (parseInt(value) !== 'NaN' && parseInt(value) !== undefined
            && parseInt(value) >= 0 && parseInt(value) <= 180) {
            this.setState({
                ...this.state,
                throws: [],
                currentThrow: 0,
                sumResultInput: value
            });
            this.props.updateResult(parseInt(value), []);
        }
    }

    private resetThrows() {
        this.setState({
            ...this.state,
            throws: [],
            currentThrow: 0,
            sumResultInput: ''
        });
        this.props.resetResult();
    }
}
