import React, {ChangeEvent, Dispatch} from "react";
import {connect} from "react-redux";
import {RootState} from "../../../../../Redux/RootState";
import {RootAction} from "../../../../../Redux/RootAction";
import './PlayerSetup.css';
import {GamePlayer} from "../../../../../Entity/GamePlayer";
import {Add, Delete, KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";

interface ComponentProps {
    playerList: GamePlayer[];
    changePlayerList: (player: GamePlayer[]) => void;
}

interface StateProps {

}

interface DispatchProps {

}

interface InternalState {

}

type Props = StateProps & DispatchProps & ComponentProps;

class PlayerSetup extends React.Component<Props, InternalState> {

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
            <div className={'player-setup'}>
                {
                    this.props.playerList.map((player: GamePlayer, index: number) => {
                        return this.player(player, index);
                    })
                }
                <div className={'flex mt_1'}>
                    <div className={'button-container-svg'} onClick={() => this.addPlayer()}>
                        <Add/>
                    </div>
                </div>

            </div>
        );
    }

    player(player: GamePlayer, index: number) {

        const upDisabled = (index === 0) ? ' disabled' : '';
        const downDisabled = (index === this.props.playerList.length - 1) ? ' disabled' : '';

        return (
            <div className={'flex mt_05'} key={'p-' + index}>
                <div className={'chevrons'}>
                    <div className={'chevron-wrap' + upDisabled} onClick={() => this.swapUp(index)}>
                        <KeyboardArrowUp/>
                    </div>
                    <div className={'chevron-wrap' + downDisabled} onClick={() => this.swapDown(index)}>
                        <KeyboardArrowDown/>
                    </div>
                </div>
                <div className={'input-container'}>
                    <input
                        type={'text'}
                        value={player.name}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => this.changePlayerName(index, event.target.value)}/>
                </div>
                <div className={'flex'} onClick={() => this.deletePlayer(index)}>
                    <div className={'button-container-svg delete-option'}>
                        <Delete/>
                    </div>
                </div>
            </div>
        );
    }

    private swapDown(index: number) {
        if (index < this.props.playerList.length - 1) {
            const playerList = [...this.props.playerList];
            playerList[index] = this.props.playerList[index + 1];
            playerList[index + 1] = this.props.playerList[index];
            this.props.changePlayerList(playerList);
        }
    }

    private swapUp(index: number) {
        if (index > 0) {
            const playerList = [...this.props.playerList];
            playerList[index] = this.props.playerList[index - 1];
            playerList[index - 1] = this.props.playerList[index];
            this.props.changePlayerList(playerList);
        }
    }

    private changePlayerName(index: number, value: string) {
        const playerList = [...this.props.playerList];
        playerList[index] = {...playerList[index], name: value};
        this.props.changePlayerList(playerList);
    }

    private addPlayer() {
        const playerList = [...this.props.playerList];
        const newName = 'Player ' + (this.props.playerList.length + 1);
        playerList.push({name: newName});
        this.props.changePlayerList(playerList);
    }

    private deletePlayer(index: number) {
        const playerList = [...this.props.playerList];
        playerList.splice(index, 1);
        this.props.changePlayerList(playerList);
    }
}

export default connect(PlayerSetup.mapStateProps, PlayerSetup.mapDispatchProps)(PlayerSetup);
