import React from "react";

interface ComponentProps {

}

interface InternalState {
}

class GamePlayerScores extends React.Component<ComponentProps, InternalState> {

    constructor(props: ComponentProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {this.player()}
            </div>
        );
    }

    private player() {
        return (<div style={{width: 200, height: 100 + '%'}}>
            <div style={{display: 'flex', height: 30, marginBottom: 4, justifyContent: 'space-between'}} className={'glass'}>
                <span style={{fontSize: '1.4em', marginLeft: 8}}>Greakz</span>
                <span style={{float: 'right', marginRight: 8}}>Sets 0/2</span>
            </div>
            <div style={{width: 200, height: 15, marginBottom: 4}} className={'glass'}>Current Leg</div>
        </div>)
    }
}

export default GamePlayerScores;