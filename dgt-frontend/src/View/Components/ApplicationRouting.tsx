import React from 'react';
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import './../Style/App.css';
import './../Style/MarginsPaddings.css';
import './../Style/Global.css';
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import HistoryPage from "./Pages/HistoryPage/HistoryPage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import ClassicGamePage from "./Pages/GamePage/ClassicGame/ClassicGamePage";
import GamePage from "./Pages/GamePage/GamePage";

function ApplicationRouting(props: { auth: boolean }) {
    return (
        <Routes>
            <Route path="/" element={<Outlet/>}>
                {   /* Private routes */
                    props.auth &&
                    <React.Fragment>
                        <Route path="/dashboard" element={<DashboardPage/>}/>
                        <Route path="/game" element={<GamePage/>}/>
                        <Route path="/game/classic" element={<ClassicGamePage/>}/>

                        <Route path="history" element={<HistoryPage/>}/>
                        <Route path="settings" element={<SettingsPage/>}/>

                        <Route path="/" element={<Navigate replace to="/dashboard"/>}/>
                    </React.Fragment>
                }
                {   /* Public routes */
                    !props.auth &&
                    <React.Fragment>
                        <Route path="login" element={<WelcomePage/>}/>
                        <Route path="/" element={<Navigate replace to="/login"/>}/>
                    </React.Fragment>
                }
            </Route>
        </Routes>
    );
}

export default ApplicationRouting;
