import React from 'react';
import '../Style/App.css';
import {BrowserRouter, Outlet, Route, Routes, Navigate} from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import CreateGame from "./Pages/CreateGame";

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
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route path="register" element={<Register/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="create-game" element={<CreateGame/>}/>
                        <Route path="home" element={<Home/>}/>
                        <Route path="/" element={<Navigate replace to="/login" />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default ApplicationRouting;
