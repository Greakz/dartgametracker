import React from "react";
import './DartBoardStyle.css';

export interface DartBoardHit {
    fieldNumber: number;
    fieldType: DartBoardHitType;
}

export type DartBoardHitType = 'DOUBLE' | 'UPPER_SINGLE' | 'TRIPPLE' | 'LOWER_SINGLE'

interface ComponentProps {
    onClick: (hitElem: DartBoardHit) => void;
    onHover: (hoverElem: DartBoardHit | null) => void;
}

interface InternalState {
    hover: DartBoardHit | null;
}

export default class DartBoardSvgClickable extends React.Component<ComponentProps, InternalState> {

    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            hover: null
        };
    }

    render() {
        return (
            <div
                style={{
                    display: 'inline-block',
                    width: '400px',
                    borderRadius: '55%',
                    paddingTop: 3,
                    paddingLeft: 2,
                    paddingRight: 2,
                    background: '#000',
                    boxShadow: '2px 1px 6px 2px rgba(0,0,0,0.4)',
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                     width={'100%'}
                     preserveAspectRatio={'xMinYMin'}
                     viewBox="-11.6 -11.6 23.2 23.2"
                     onClick={() => {
                         if (this.state.hover !== null) {
                             this.props.onClick(this.state.hover);
                         }
                     }}
                >
                    <circle cx="0" cy="0" r="11.5"
                            className="black-field"
                            onMouseEnter={() => {
                                this.setHover(0, 'LOWER_SINGLE');
                            }}
                            onMouseLeave={() => {
                                this.clearHover(0, 'LOWER_SINGLE');
                            }}
                    />
                    <path d="M1.471,-9.28 A 9.405 9.405 0 0 0 -1.47,-9.28 L -1.56,-9.87 A 10 10 0 0 1 1.564,-9.87 Z "
                          onMouseEnter={() => {
                              this.setHover(20, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(20, 'DOUBLE');
                          }}
                          className="red-field"/>
                    <path
                        d="M0.977,-6.17 A 6.249999999999999 6.249999999999999 0 0 0 -0.97,-6.17 L -1.47,-9.28 A 9.405 9.405 0 0 1 1.471,-9.28 Z "
                        onMouseEnter={() => {
                            this.setHover(20, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(20, 'UPPER_SINGLE');
                        }}
                        className="black-field"/>
                    <path
                        d="M0.884,-5.58 A 5.654999999999999 5.654999999999999 0 0 0 -0.88,-5.58 L -0.97,-6.17 A 6.249999999999999 6.249999999999999 0 0 1 0.977,-6.17 Z "
                        onMouseEnter={() => {
                            this.setHover(20, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(20, 'TRIPPLE');
                        }}
                        className="red-field"/>
                    <path
                        d="M0.139,-0.88 A 0.893 0.893 0 0 0 -0.13,-0.88 L -0.88,-5.58 A 5.654999999999999 5.654999999999999 0 0 1 0.884,-5.58 Z "
                        onMouseEnter={() => {
                            this.setHover(20, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(20, 'LOWER_SINGLE');
                        }}
                        className="black-field"/>
                    <path d="M-1.47,-9.28 A 9.405 9.405 0 0 0 -4.26,-8.37 L -4.53,-8.91 A 10 10 0 0 1 -1.56,-9.87 Z "
                          onMouseEnter={() => {
                              this.setHover(5, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(5, 'DOUBLE');
                          }}
                          className="green-field"/>
                    <path
                        d="M-0.97,-6.17 A 6.249999999999999 6.249999999999999 0 0 0 -2.83,-5.56 L -4.26,-8.37 A 9.405 9.405 0 0 1 -1.47,-9.28 Z "
                        onMouseEnter={() => {
                            this.setHover(5, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(5, 'UPPER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path
                        d="M-0.88,-5.58 A 5.654999999999999 5.654999999999999 0 0 0 -2.56,-5.03 L -2.83,-5.56 A 6.249999999999999 6.249999999999999 0 0 1 -0.97,-6.17 Z "
                        onMouseEnter={() => {
                            this.setHover(5, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(5, 'TRIPPLE');
                        }}
                        className="green-field"/>
                    <path
                        d="M-0.13,-0.88 A 0.893 0.893 0 0 0 -0.40,-0.79 L -2.56,-5.03 A 5.654999999999999 5.654999999999999 0 0 1 -0.88,-5.58 Z "
                        onMouseEnter={() => {
                            this.setHover(5, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(5, 'LOWER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path d="M-4.26,-8.37 A 9.405 9.405 0 0 0 -6.65,-6.65 L -7.07,-7.07 A 10 10 0 0 1 -4.53,-8.91 Z "
                          onMouseEnter={() => {
                              this.setHover(12, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(12, 'DOUBLE');
                          }}
                          className="red-field"/>
                    <path
                        d="M-2.83,-5.56 A 6.249999999999999 6.249999999999999 0 0 0 -4.41,-4.41 L -6.65,-6.65 A 9.405 9.405 0 0 1 -4.26,-8.37 Z "
                        onMouseEnter={() => {
                            this.setHover(12, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(12, 'UPPER_SINGLE');
                        }}
                        className="black-field"/>
                    <path
                        d="M-2.56,-5.03 A 5.654999999999999 5.654999999999999 0 0 0 -3.99,-3.99 L -4.41,-4.41 A 6.249999999999999 6.249999999999999 0 0 1 -2.83,-5.56 Z "
                        onMouseEnter={() => {
                            this.setHover(12, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(12, 'TRIPPLE');
                        }}
                        className="red-field"/>
                    <path
                        d="M-0.40,-0.79 A 0.893 0.893 0 0 0 -0.63,-0.63 L -3.99,-3.99 A 5.654999999999999 5.654999999999999 0 0 1 -2.56,-5.03 Z "
                        onMouseEnter={() => {
                            this.setHover(12, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(12, 'LOWER_SINGLE');
                        }}
                        className="black-field"/>
                    <path d="M-6.65,-6.65 A 9.405 9.405 0 0 0 -8.37,-4.26 L -8.91,-4.53 A 10 10 0 0 1 -7.07,-7.07 Z "
                          onMouseEnter={() => {
                              this.setHover(9, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(9, 'DOUBLE');
                          }}
                          className="green-field"/>
                    <path
                        d="M-4.41,-4.41 A 6.249999999999999 6.249999999999999 0 0 0 -5.56,-2.83 L -8.37,-4.26 A 9.405 9.405 0 0 1 -6.65,-6.65 Z "
                        onMouseEnter={() => {
                            this.setHover(9, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(9, 'UPPER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path
                        d="M-3.99,-3.99 A 5.654999999999999 5.654999999999999 0 0 0 -5.03,-2.56 L -5.56,-2.83 A 6.249999999999999 6.249999999999999 0 0 1 -4.41,-4.41 Z "
                        onMouseEnter={() => {
                            this.setHover(9, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(9, 'TRIPPLE');
                        }}
                        className="green-field"/>
                    <path
                        d="M-0.63,-0.63 A 0.893 0.893 0 0 0 -0.79,-0.40 L -5.03,-2.56 A 5.654999999999999 5.654999999999999 0 0 1 -3.99,-3.99 Z "
                        onMouseEnter={() => {
                            this.setHover(9, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(9, 'LOWER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path d="M-8.37,-4.26 A 9.405 9.405 0 0 0 -9.28,-1.47 L -9.87,-1.56 A 10 10 0 0 1 -8.91,-4.53 Z "
                          onMouseEnter={() => {
                              this.setHover(14, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(14, 'DOUBLE');
                          }}
                          className="red-field"/>
                    <path
                        d="M-5.56,-2.83 A 6.249999999999999 6.249999999999999 0 0 0 -6.17,-0.97 L -9.28,-1.47 A 9.405 9.405 0 0 1 -8.37,-4.26 Z "
                        onMouseEnter={() => {
                            this.setHover(14, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(14, 'UPPER_SINGLE');
                        }}
                        className="black-field"/>
                    <path
                        d="M-5.03,-2.56 A 5.654999999999999 5.654999999999999 0 0 0 -5.58,-0.88 L -6.17,-0.97 A 6.249999999999999 6.249999999999999 0 0 1 -5.56,-2.83 Z "
                        onMouseEnter={() => {
                            this.setHover(14, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(14, 'TRIPPLE');
                        }}
                        className="red-field"/>
                    <path
                        d="M-0.79,-0.40 A 0.893 0.893 0 0 0 -0.88,-0.13 L -5.58,-0.88 A 5.654999999999999 5.654999999999999 0 0 1 -5.03,-2.56 Z "
                        onMouseEnter={() => {
                            this.setHover(14, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(14, 'LOWER_SINGLE');
                        }}
                        className="black-field"/>
                    <path d="M-9.28,-1.47 A 9.405 9.405 0 0 0 -9.28,1.471 L -9.87,1.564 A 10 10 0 0 1 -9.87,-1.56 Z "
                          onMouseEnter={() => {
                              this.setHover(11, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(11, 'DOUBLE');
                          }}
                          className="green-field"/>
                    <path
                        d="M-6.17,-0.97 A 6.249999999999999 6.249999999999999 0 0 0 -6.17,0.977 L -9.28,1.471 A 9.405 9.405 0 0 1 -9.28,-1.47 Z "
                        onMouseEnter={() => {
                            this.setHover(11, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(11, 'UPPER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path
                        d="M-5.58,-0.88 A 5.654999999999999 5.654999999999999 0 0 0 -5.58,0.884 L -6.17,0.977 A 6.249999999999999 6.249999999999999 0 0 1 -6.17,-0.97 Z "
                        onMouseEnter={() => {
                            this.setHover(11, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(11, 'TRIPPLE');
                        }}
                        className="green-field"/>
                    <path
                        d="M-0.88,-0.13 A 0.893 0.893 0 0 0 -0.88,0.139 L -5.58,0.884 A 5.654999999999999 5.654999999999999 0 0 1 -5.58,-0.88 Z "
                        onMouseEnter={() => {
                            this.setHover(11, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(11, 'LOWER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path d="M-9.28,1.471 A 9.405 9.405 0 0 0 -8.37,4.269 L -8.91,4.539 A 10 10 0 0 1 -9.87,1.564 Z "
                          onMouseEnter={() => {
                              this.setHover(8, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(8, 'DOUBLE');
                          }}
                          className="red-field"/>
                    <path
                        d="M-6.17,0.977 A 6.249999999999999 6.249999999999999 0 0 0 -5.56,2.837 L -8.37,4.269 A 9.405 9.405 0 0 1 -9.28,1.471 Z "
                        onMouseEnter={() => {
                            this.setHover(8, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(8, 'UPPER_SINGLE');
                        }}
                        className="black-field"/>
                    <path
                        d="M-5.58,0.884 A 5.654999999999999 5.654999999999999 0 0 0 -5.03,2.567 L -5.56,2.837 A 6.249999999999999 6.249999999999999 0 0 1 -6.17,0.977 Z "
                        onMouseEnter={() => {
                            this.setHover(8, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(8, 'TRIPPLE');
                        }}
                        className="red-field"/>
                    <path
                        d="M-0.88,0.139 A 0.893 0.893 0 0 0 -0.79,0.405 L -5.03,2.567 A 5.654999999999999 5.654999999999999 0 0 1 -5.58,0.884 Z "
                        onMouseEnter={() => {
                            this.setHover(8, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(8, 'LOWER_SINGLE');
                        }}
                        className="black-field"/>
                    <path d="M-8.37,4.269 A 9.405 9.405 0 0 0 -6.65,6.650 L -7.07,7.071 A 10 10 0 0 1 -8.91,4.539 Z "
                          onMouseEnter={() => {
                              this.setHover(16, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(16, 'DOUBLE');
                          }}
                          className="green-field"/>
                    <path
                        d="M-5.56,2.837 A 6.249999999999999 6.249999999999999 0 0 0 -4.41,4.419 L -6.65,6.650 A 9.405 9.405 0 0 1 -8.37,4.269 Z "
                        onMouseEnter={() => {
                            this.setHover(16, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(16, 'UPPER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path
                        d="M-5.03,2.567 A 5.654999999999999 5.654999999999999 0 0 0 -3.99,3.998 L -4.41,4.419 A 6.249999999999999 6.249999999999999 0 0 1 -5.56,2.837 Z "
                        onMouseEnter={() => {
                            this.setHover(16, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(16, 'TRIPPLE');
                        }}
                        className="green-field"/>
                    <path
                        d="M-0.79,0.405 A 0.893 0.893 0 0 0 -0.63,0.631 L -3.99,3.998 A 5.654999999999999 5.654999999999999 0 0 1 -5.03,2.567 Z "
                        onMouseEnter={() => {
                            this.setHover(16, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(16, 'LOWER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path d="M-6.65,6.650 A 9.405 9.405 0 0 0 -4.26,8.379 L -4.53,8.910 A 10 10 0 0 1 -7.07,7.071 Z "
                          onMouseEnter={() => {
                              this.setHover(7, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(7, 'DOUBLE');
                          }}
                          className="red-field"/>
                    <path
                        d="M-4.41,4.419 A 6.249999999999999 6.249999999999999 0 0 0 -2.83,5.568 L -4.26,8.379 A 9.405 9.405 0 0 1 -6.65,6.650 Z "
                        onMouseEnter={() => {
                            this.setHover(7, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(7, 'UPPER_SINGLE');
                        }}
                        className="black-field"/>
                    <path
                        d="M-3.99,3.998 A 5.654999999999999 5.654999999999999 0 0 0 -2.56,5.038 L -2.83,5.568 A 6.249999999999999 6.249999999999999 0 0 1 -4.41,4.419 Z "
                        onMouseEnter={() => {
                            this.setHover(7, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(7, 'TRIPPLE');
                        }}
                        className="red-field"/>
                    <path
                        d="M-0.63,0.631 A 0.893 0.893 0 0 0 -0.40,0.795 L -2.56,5.038 A 5.654999999999999 5.654999999999999 0 0 1 -3.99,3.998 Z "
                        onMouseEnter={() => {
                            this.setHover(7, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(7, 'LOWER_SINGLE');
                        }}
                        className="black-field"/>
                    <path d="M-4.26,8.379 A 9.405 9.405 0 0 0 -1.47,9.289 L -1.56,9.876 A 10 10 0 0 1 -4.53,8.910 Z "
                          onMouseEnter={() => {
                              this.setHover(19, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(19, 'DOUBLE');
                          }}
                          className="green-field"/>
                    <path
                        d="M-2.83,5.568 A 6.249999999999999 6.249999999999999 0 0 0 -0.97,6.173 L -1.47,9.289 A 9.405 9.405 0 0 1 -4.26,8.379 Z "
                        onMouseEnter={() => {
                            this.setHover(19, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(19, 'UPPER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path
                        d="M-2.56,5.038 A 5.654999999999999 5.654999999999999 0 0 0 -0.88,5.585 L -0.97,6.173 A 6.249999999999999 6.249999999999999 0 0 1 -2.83,5.568 Z "
                        onMouseEnter={() => {
                            this.setHover(19, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(19, 'TRIPPLE');
                        }}
                        className="green-field"/>
                    <path
                        d="M-0.40,0.795 A 0.893 0.893 0 0 0 -0.13,0.882 L -0.88,5.585 A 5.654999999999999 5.654999999999999 0 0 1 -2.56,5.038 Z "
                        onMouseEnter={() => {
                            this.setHover(19, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(19, 'LOWER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path d="M-1.47,9.289 A 9.405 9.405 0 0 0 1.471,9.289 L 1.564,9.876 A 10 10 0 0 1 -1.56,9.876 Z "
                          onMouseEnter={() => {
                              this.setHover(3, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(3, 'DOUBLE');
                          }}
                          className="red-field"/>
                    <path
                        d="M-0.97,6.173 A 6.249999999999999 6.249999999999999 0 0 0 0.977,6.173 L 1.471,9.289 A 9.405 9.405 0 0 1 -1.47,9.289 Z "
                        onMouseEnter={() => {
                            this.setHover(3, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(3, 'UPPER_SINGLE');
                        }}
                        className="black-field"/>
                    <path
                        d="M-0.88,5.585 A 5.654999999999999 5.654999999999999 0 0 0 0.884,5.585 L 0.977,6.173 A 6.249999999999999 6.249999999999999 0 0 1 -0.97,6.173 Z "
                        onMouseEnter={() => {
                            this.setHover(3, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(3, 'TRIPPLE');
                        }}
                        className="red-field"/>
                    <path
                        d="M-0.13,0.882 A 0.893 0.893 0 0 0 0.139,0.882 L 0.884,5.585 A 5.654999999999999 5.654999999999999 0 0 1 -0.88,5.585 Z "
                        onMouseEnter={() => {
                            this.setHover(3, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(3, 'LOWER_SINGLE');
                        }}
                        className="black-field"/>
                    <path d="M1.471,9.289 A 9.405 9.405 0 0 0 4.269,8.379 L 4.539,8.910 A 10 10 0 0 1 1.564,9.876 Z "
                          onMouseEnter={() => {
                              this.setHover(17, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(17, 'DOUBLE');
                          }}
                          className="green-field"/>
                    <path
                        d="M0.977,6.173 A 6.249999999999999 6.249999999999999 0 0 0 2.837,5.568 L 4.269,8.379 A 9.405 9.405 0 0 1 1.471,9.289 Z "
                        onMouseEnter={() => {
                            this.setHover(17, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(17, 'UPPER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path
                        d="M0.884,5.585 A 5.654999999999999 5.654999999999999 0 0 0 2.567,5.038 L 2.837,5.568 A 6.249999999999999 6.249999999999999 0 0 1 0.977,6.173 Z "
                        onMouseEnter={() => {
                            this.setHover(17, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(17, 'TRIPPLE');
                        }}
                        className="green-field"/>
                    <path
                        d="M0.139,0.882 A 0.893 0.893 0 0 0 0.405,0.795 L 2.567,5.038 A 5.654999999999999 5.654999999999999 0 0 1 0.884,5.585 Z "
                        onMouseEnter={() => {
                            this.setHover(17, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(17, 'LOWER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path d="M4.269,8.379 A 9.405 9.405 0 0 0 6.650,6.650 L 7.071,7.071 A 10 10 0 0 1 4.539,8.910 Z "
                          onMouseEnter={() => {
                              this.setHover(2, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(2, 'DOUBLE');
                          }}
                          className="red-field"/>
                    <path
                        d="M2.837,5.568 A 6.249999999999999 6.249999999999999 0 0 0 4.419,4.419 L 6.650,6.650 A 9.405 9.405 0 0 1 4.269,8.379 Z "
                        onMouseEnter={() => {
                            this.setHover(2, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(2, 'UPPER_SINGLE');
                        }}
                        className="black-field"/>
                    <path
                        d="M2.567,5.038 A 5.654999999999999 5.654999999999999 0 0 0 3.998,3.998 L 4.419,4.419 A 6.249999999999999 6.249999999999999 0 0 1 2.837,5.568 Z "
                        onMouseEnter={() => {
                            this.setHover(2, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(2, 'TRIPPLE');
                        }}
                        className="red-field"/>
                    <path
                        d="M0.405,0.795 A 0.893 0.893 0 0 0 0.631,0.631 L 3.998,3.998 A 5.654999999999999 5.654999999999999 0 0 1 2.567,5.038 Z "
                        onMouseEnter={() => {
                            this.setHover(2, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(2, 'LOWER_SINGLE');
                        }}
                        className="black-field"/>
                    <path d="M6.650,6.650 A 9.405 9.405 0 0 0 8.379,4.269 L 8.910,4.539 A 10 10 0 0 1 7.071,7.071 Z "
                          onMouseEnter={() => {
                              this.setHover(15, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(15, 'DOUBLE');
                          }}
                          className="green-field"/>
                    <path
                        d="M4.419,4.419 A 6.249999999999999 6.249999999999999 0 0 0 5.568,2.837 L 8.379,4.269 A 9.405 9.405 0 0 1 6.650,6.650 Z "
                        onMouseEnter={() => {
                            this.setHover(15, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(15, 'UPPER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path
                        d="M3.998,3.998 A 5.654999999999999 5.654999999999999 0 0 0 5.038,2.567 L 5.568,2.837 A 6.249999999999999 6.249999999999999 0 0 1 4.419,4.419 Z "
                        onMouseEnter={() => {
                            this.setHover(15, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(15, 'TRIPPLE');
                        }}
                        className="green-field"/>
                    <path
                        d="M0.631,0.631 A 0.893 0.893 0 0 0 0.795,0.405 L 5.038,2.567 A 5.654999999999999 5.654999999999999 0 0 1 3.998,3.998 Z "
                        onMouseEnter={() => {
                            this.setHover(15, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(15, 'LOWER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path d="M8.379,4.269 A 9.405 9.405 0 0 0 9.289,1.471 L 9.876,1.564 A 10 10 0 0 1 8.910,4.539 Z "
                          onMouseEnter={() => {
                              this.setHover(10, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(10, 'DOUBLE');
                          }}
                          className="red-field"/>
                    <path
                        d="M5.568,2.837 A 6.249999999999999 6.249999999999999 0 0 0 6.173,0.977 L 9.289,1.471 A 9.405 9.405 0 0 1 8.379,4.269 Z "
                        onMouseEnter={() => {
                            this.setHover(10, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(10, 'UPPER_SINGLE');
                        }}
                        className="black-field"/>
                    <path
                        d="M5.038,2.567 A 5.654999999999999 5.654999999999999 0 0 0 5.585,0.884 L 6.173,0.977 A 6.249999999999999 6.249999999999999 0 0 1 5.568,2.837 Z "
                        onMouseEnter={() => {
                            this.setHover(10, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(10, 'TRIPPLE');
                        }}
                        className="red-field"/>
                    <path
                        d="M0.795,0.405 A 0.893 0.893 0 0 0 0.882,0.139 L 5.585,0.884 A 5.654999999999999 5.654999999999999 0 0 1 5.038,2.567 Z "
                        onMouseEnter={() => {
                            this.setHover(10, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(10, 'LOWER_SINGLE');
                        }}
                        className="black-field"/>
                    <path d="M9.289,1.471 A 9.405 9.405 0 0 0 9.289,-1.47 L 9.876,-1.56 A 10 10 0 0 1 9.876,1.564 Z "
                          onMouseEnter={() => {
                              this.setHover(6, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(6, 'DOUBLE');
                          }}
                          className="green-field"/>
                    <path
                        d="M6.173,0.977 A 6.249999999999999 6.249999999999999 0 0 0 6.173,-0.97 L 9.289,-1.47 A 9.405 9.405 0 0 1 9.289,1.471 Z "
                        onMouseEnter={() => {
                            this.setHover(6, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(6, 'UPPER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path
                        d="M5.585,0.884 A 5.654999999999999 5.654999999999999 0 0 0 5.585,-0.88 L 6.173,-0.97 A 6.249999999999999 6.249999999999999 0 0 1 6.173,0.977 Z "
                        onMouseEnter={() => {
                            this.setHover(6, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(6, 'TRIPPLE');
                        }}
                        className="green-field"/>
                    <path
                        d="M0.882,0.139 A 0.893 0.893 0 0 0 0.882,-0.13 L 5.585,-0.88 A 5.654999999999999 5.654999999999999 0 0 1 5.585,0.884 Z "
                        onMouseEnter={() => {
                            this.setHover(6, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(6, 'LOWER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path d="M9.289,-1.47 A 9.405 9.405 0 0 0 8.379,-4.26 L 8.910,-4.53 A 10 10 0 0 1 9.876,-1.56 Z "
                          onMouseEnter={() => {
                              this.setHover(13, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(13, 'DOUBLE');
                          }}
                          className="red-field"/>
                    <path
                        d="M6.173,-0.97 A 6.249999999999999 6.249999999999999 0 0 0 5.568,-2.83 L 8.379,-4.26 A 9.405 9.405 0 0 1 9.289,-1.47 Z "
                        onMouseEnter={() => {
                            this.setHover(13, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(13, 'UPPER_SINGLE');
                        }}
                        className="black-field"/>
                    <path
                        d="M5.585,-0.88 A 5.654999999999999 5.654999999999999 0 0 0 5.038,-2.56 L 5.568,-2.83 A 6.249999999999999 6.249999999999999 0 0 1 6.173,-0.97 Z "
                        onMouseEnter={() => {
                            this.setHover(13, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(13, 'TRIPPLE');
                        }}
                        className="red-field"/>
                    <path
                        d="M0.882,-0.13 A 0.893 0.893 0 0 0 0.795,-0.40 L 5.038,-2.56 A 5.654999999999999 5.654999999999999 0 0 1 5.585,-0.88 Z "
                        onMouseEnter={() => {
                            this.setHover(13, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(13, 'LOWER_SINGLE');
                        }}
                        className="black-field"/>
                    <path d="M8.379,-4.26 A 9.405 9.405 0 0 0 6.650,-6.65 L 7.071,-7.07 A 10 10 0 0 1 8.910,-4.53 Z "
                          onMouseEnter={() => {
                              this.setHover(4, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(4, 'DOUBLE');
                          }}
                          className="green-field"/>
                    <path
                        d="M5.568,-2.83 A 6.249999999999999 6.249999999999999 0 0 0 4.419,-4.41 L 6.650,-6.65 A 9.405 9.405 0 0 1 8.379,-4.26 Z "
                        onMouseEnter={() => {
                            this.setHover(4, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(4, 'UPPER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path
                        d="M5.038,-2.56 A 5.654999999999999 5.654999999999999 0 0 0 3.998,-3.99 L 4.419,-4.41 A 6.249999999999999 6.249999999999999 0 0 1 5.568,-2.83 Z "
                        onMouseEnter={() => {
                            this.setHover(4, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(4, 'TRIPPLE');
                        }}
                        className="green-field"/>
                    <path
                        d="M0.795,-0.40 A 0.893 0.893 0 0 0 0.631,-0.63 L 3.998,-3.99 A 5.654999999999999 5.654999999999999 0 0 1 5.038,-2.56 Z "
                        onMouseEnter={() => {
                            this.setHover(4, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(4, 'LOWER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path d="M6.650,-6.65 A 9.405 9.405 0 0 0 4.269,-8.37 L 4.539,-8.91 A 10 10 0 0 1 7.071,-7.07 Z "
                          onMouseEnter={() => {
                              this.setHover(18, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(18, 'DOUBLE');
                          }}
                          className="red-field"/>
                    <path
                        d="M4.419,-4.41 A 6.249999999999999 6.249999999999999 0 0 0 2.837,-5.56 L 4.269,-8.37 A 9.405 9.405 0 0 1 6.650,-6.65 Z "
                        onMouseEnter={() => {
                            this.setHover(18, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(18, 'UPPER_SINGLE');
                        }}
                        className="black-field"/>
                    <path
                        d="M3.998,-3.99 A 5.654999999999999 5.654999999999999 0 0 0 2.567,-5.03 L 2.837,-5.56 A 6.249999999999999 6.249999999999999 0 0 1 4.419,-4.41 Z "
                        onMouseEnter={() => {
                            this.setHover(18, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(18, 'TRIPPLE');
                        }}
                        className="red-field"/>
                    <path
                        d="M0.631,-0.63 A 0.893 0.893 0 0 0 0.405,-0.79 L 2.567,-5.03 A 5.654999999999999 5.654999999999999 0 0 1 3.998,-3.99 Z "
                        onMouseEnter={() => {
                            this.setHover(18, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(18, 'LOWER_SINGLE');
                        }}
                        className="black-field"/>
                    <path d="M4.269,-8.37 A 9.405 9.405 0 0 0 1.471,-9.28 L 1.564,-9.87 A 10 10 0 0 1 4.539,-8.91 Z "
                          onMouseEnter={() => {
                              this.setHover(1, 'DOUBLE');
                          }}
                          onMouseLeave={() => {
                              this.clearHover(1, 'DOUBLE');
                          }}
                          className="green-field"/>
                    <path
                        d="M2.837,-5.56 A 6.249999999999999 6.249999999999999 0 0 0 0.977,-6.17 L 1.471,-9.28 A 9.405 9.405 0 0 1 4.269,-8.37 Z "
                        onMouseEnter={() => {
                            this.setHover(1, 'UPPER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(1, 'UPPER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <path
                        d="M2.567,-5.03 A 5.654999999999999 5.654999999999999 0 0 0 0.884,-5.58 L 0.977,-6.17 A 6.249999999999999 6.249999999999999 0 0 1 2.837,-5.56 Z "
                        onMouseEnter={() => {
                            this.setHover(1, 'TRIPPLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(1, 'TRIPPLE');
                        }}
                        className="green-field"/>
                    <path
                        d="M0.405,-0.79 A 0.893 0.893 0 0 0 0.139,-0.88 L 0.884,-5.58 A 5.654999999999999 5.654999999999999 0 0 1 2.567,-5.03 Z "
                        onMouseEnter={() => {
                            this.setHover(1, 'LOWER_SINGLE');
                        }}
                        onMouseLeave={() => {
                            this.clearHover(1, 'LOWER_SINGLE');
                        }}
                        className="yellow-field"/>
                    <circle cx="0" cy="0" r="0.893"
                            className="green-field"
                            onMouseEnter={() => {
                                this.setHover(25, 'LOWER_SINGLE');
                            }}
                            onMouseLeave={() => {
                                this.clearHover(25, 'LOWER_SINGLE');
                            }}
                    />
                    <circle cx="0" cy="0" r="0.357"
                            className="red-field"
                            onMouseEnter={() => {
                                this.setHover(25, 'DOUBLE');
                            }}
                            onMouseLeave={() => {
                                this.clearHover(25, 'DOUBLE');
                            }}
                    />
                </svg>
            </div>
        );
    }

    private clearHover(number: number, type: DartBoardHitType) {
        if (this.state.hover !== null && this.state.hover.fieldType === type && this.state.hover.fieldNumber === number) {
            this.setState({
                hover: null
            });
        }
        this.props.onHover(null);
    }

    private setHover(number: number, type: DartBoardHitType) {
        this.setState({
            hover: {
                fieldNumber: number,
                fieldType: type
            }
        });
        this.props.onHover({
            fieldNumber: number,
            fieldType: type
        });
    }
}