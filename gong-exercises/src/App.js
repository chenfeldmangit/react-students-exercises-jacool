import React, {useState} from 'react';
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
import UserActions from "./actions/UserActions";

const App = (props) => {
    const [page, setPage] = useState("EXPLORE");

    function userManagement() {
        switch (page) {
            case "EXPLORE":
                return <Explore onSelect={(selection) => {setPage(selection)}}/>;
            case "LOGIN":
                return <Login/>;
            case "SIGNUP":
                return <SignUp/>;
            default:
                alert("Error");
        }
    }

    return (
        props.user.loggedInUser == null ? userManagement() :
            (
                <BrowserRouter>
                    <Menu onLogout = { () => { props.logout(); setPage("EXPLORE"); } } />
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

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(UserActions.logout())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
