import React from "react";
import GlassPane from "../Optics/GlassPane";
import LogoBig from "../Elements/LogoBig";
import {Link} from "react-router-dom";

export default class Home extends React.Component<{}, {}> {

    render() {
        return <GlassPane className={"login-panel"}>
            <LogoBig/>
            <hr style={{marginTop: 16}}/>
            Hello, xyz
            <div style={{width: 240, height: 120, border: '1px solid rgba(230, 126, 34,1.0)', margin: '8px auto'}}>
                Statistics:<br/>
                <span style={{fontStyle: 'italic'}}>comming soon (hopefully)</span>
            </div>
            <div style={{
                width: 240,
                height: 160,
                border: '1px solid rgba(230, 126, 34,1.0)',
                margin: '0 auto',
                padding: 16
            }}>
                <button>Play Training</button>
                <br/>
                (vs AI, for Statistics, exercises, etc.)<br/><br/>
                <Link to={'/create-game'}>
                    <button>Create Game Lobby</button>
                </Link>
                <br/>
                (get a lobby-code and play with your friends)
            </div>
            <Link to={'/login'}>
                <button style={{marginTop: 8}}>Logout</button>
            </Link>
        </GlassPane>;
    }

}