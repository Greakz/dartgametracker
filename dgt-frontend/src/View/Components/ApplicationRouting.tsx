import React from 'react';
import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import './../Style/App.css';
import './../Style/MarginsPaddings.css';
import './../Style/Global.css';
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import HistoryPage from "./Pages/HistoryPage/HistoryPage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import ClassicGamePage from "./Pages/GamePage/ClassicGame/ClassicGamePage";
import GamePage from "./Pages/GamePage/GamePage";
import AuthSidebar from "./AuthSidebar/AuthSidebar";
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar";

function ApplicationRouting() {
    /*
    const login = false;
    let defPage;
    if (login) {
        defPage = <Home/>;
    } else {
        defPage = <Login/>;
    }
    */
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Outlet/>}>
                    {/* Public routes */}
                    <Route path="login" element={<WelcomePage/>}/>
                </Route>
            </Routes>

            <AuthSidebar>
                <FriendsSidebar>
                    <Routes>
                        <Route path="/" element={<Outlet/>}>

                            {/* Private routes */}
                            <Route path="dashboard" element={<DashboardPage/>}/>
                            <Route path="/game" element={<GamePage/>}/>
                            <Route path="/game/classic" element={<ClassicGamePage/>}/>

                            <Route path="history" element={<HistoryPage/>}/>
                            <Route path="settings" element={<SettingsPage/>}/>
                            <Route path="/" element={<Navigate replace to="/login"/>}/>
                        </Route>
                    </Routes>

                </FriendsSidebar>
            </AuthSidebar>

        </BrowserRouter>
    );
}

export default ApplicationRouting;
