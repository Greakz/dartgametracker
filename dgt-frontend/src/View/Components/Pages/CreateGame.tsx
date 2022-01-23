import React, {ChangeEvent} from "react";
import GlassPane from "../Optics/GlassPane";
import LogoBig from "../Elements/LogoBig";
import {Link} from "react-router-dom";
import LoadingSpinner from "../Elements/LoadingSpinner";


interface PlayerSetup {
    name: string;
    connected: boolean;
}

interface InternalState {
    setup: {
        player: PlayerSetup[],
        startRequestSend: boolean
    };
}

export default class CreateGame extends React.Component<{}, InternalState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            setup: {
                player: [
                    {name: 'Player 1', connected: false},
                    {name: 'Greakz', connected: true},
                    {name: 'Player 3', connected: false},
                ],
                startRequestSend: false
            }
        };
    }

    render() {
        return <GlassPane className={"login-panel"}>
            <div style={{position: "absolute", left: 8, top: 8}}><Link to={'/home'}>&#060; Zurück</Link></div>
            <LogoBig/>
            <div className={'container'}>
                Create new Game: {this.state.setup.player.length} Players<br/>
            </div>
            <div className={'container'}>
                GameRules:
            </div>
            <button onClick={() => this.addPlayer()}>Add Player</button>
            <div className={"container"} style={{maxHeight: 220, overflowY: 'auto', overflowX: 'hidden'}}>
                {
                    this.state.setup.player.map((player: PlayerSetup, index: number) => {
                        return (
                            <div
                                className={'border'}
                                style={{
                                    padding: 8,
                                    marginBottom: 4,
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <div style={{width: 180}}>
                                    <input
                                        type={'text'}
                                        value={player.name}
                                        disabled={player.connected}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => this.nameInput(index, e.target.value)}
                                    />
                                </div>
                                <div style={{display: 'inline-block', paddingTop: 8}}>
                                    {player.connected && <span className={'green'}>connected</span>}
                                    {!player.connected && <span className={'red'}>free slot</span>}
                                </div>
                                <div
                                    style={{cursor: "pointer", marginRight: 8}}
                                    onClick={() => this.removePlayer(index)}
                                >
                                    <span className={'red'} style={{fontWeight: "bold", fontSize: 20}}>X</span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className={'container'}>
                <button onClick={() => this.startGame()}>
                    {
                        this.state.setup.startRequestSend && <LoadingSpinner />
                    }
                    {
                        !this.state.setup.startRequestSend && <span>Start</span>
                    }
                </button>
            </div>
        </GlassPane>;
    }

    private addPlayer() {
        const copy = {...this.state};
        copy.setup.player.push({
            name: "Player " + (copy.setup.player.length + 1),
            connected: false
        });
        this.setState(copy);
    }

    private nameInput(playerIndex: number, value: string) {
        const copy = {...this.state};
        copy.setup.player[playerIndex].name = value;
        this.setState(copy);
    }

    private removePlayer(playerIndex: number) {
        const copy = {...this.state};
        copy.setup.player.splice(playerIndex, 1);
        this.setState(copy);
    }

    private startGame() {
        const copy = {...this.state};
        copy.setup.startRequestSend = true;
        this.setState(copy);
    }
}