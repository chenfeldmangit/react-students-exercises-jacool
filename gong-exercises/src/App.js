import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import './sass/common.scss';

import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import TrendsContainer from "./components/trends/TrendsContainer";
import Profile from "./components/profile/Profile";
import Routs from "./components/common/Routs";
import Notifications from "./components/notifications/Notifications";

export default function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Switch>
                <Route path={Routs.HOME} component={Home} exact/>
                <Route path={Routs.NOTIFICATIONS} component={Notifications}/>
                <Route path={Routs.PROFILE} component={Profile}/>} />
            </Switch>
            <TrendsContainer/>
        </BrowserRouter>
    );
}
