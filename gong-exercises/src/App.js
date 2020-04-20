import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';
import './sass/common.scss';

import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import TrendsContainer from "./components/trends/TrendsContainer";
import Profile from "./components/profile/Profile";
import Routs from "./components/common/Routs";
import Notifications from "./components/notifications/Notifications";
import Explore from "./components/login/Explore";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";

const App = (props) => {
    const [page, setPage] = useState("EXPLORE");

    return (
        props.user.loggedInUser == null
            ? (page === "EXPLORE" ?
                <Explore onSelect={(selection) => {
                    setPage(selection)
                }}/>
                : (page === "LOGIN" ? <Login/> : <SignUp/>)
            )
            :
            (
                <BrowserRouter>
                    <Menu/>
                    <Switch>
                        <Route path={Routs.HOME} component={Home} exact/>
                        <Route path={Routs.NOTIFICATIONS} component={Notifications}/>
                        <Route path={Routs.PROFILE} component={Profile}/>} />
                    </Switch>
                    <TrendsContainer/>
                </BrowserRouter>
            )
    );
};

const mapStateToProps = (store) => {
    return {
        user: store.user
    }
};

export default connect(mapStateToProps)(App);
