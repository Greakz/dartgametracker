import React from 'react';
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import './../Style/App.css';
import './../Style/MarginsPaddings.css';
import './../Style/Global.css';
import WelcomePage from "./PagesPublic/WelcomePage/WelcomePage";
import DashboardPage from "./PagesAuth/DashboardPage/DashboardPage";
import HistoryPage from "./PagesAuth/HistoryPage/HistoryPage";
import SettingsPage from "./PagesAuth/SettingsPage/SettingsPage";
import GamePage from "./PagesAuth/GamePage/GamePage";
import ClassicGamePage from "./PagesAuth/GamePage/ClassicGame/ClassicGamePage";
import RegisterPage from "./PagesPublic/RegisterPage/RegisterPage";

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

                        <Route path="/history" element={<HistoryPage/>}/>
                        <Route path="/settings" element={<SettingsPage/>}/>

                        <Route element={<Navigate replace to="/dashboard"/>} path={'*'}/>
                    </React.Fragment>
                }
                {   /* Public routes */
                    !props.auth &&
                    <React.Fragment>
                        <Route path="/login" element={<WelcomePage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>

                        <Route path="/" element={<Navigate replace to="/login"/>}/>

                        <Route element={<Navigate replace to="/login"/>} path={'*'}/>
                    </React.Fragment>
                }
            </Route>
        </Routes>
    );
}

export default ApplicationRouting;
