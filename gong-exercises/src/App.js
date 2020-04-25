import React, {useState, useEffect} from 'react';
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
import useLocalStorage from "./data/useLocalStorage";
import LocalKeys from "./data/LocalKeys";

const App = (props) => {
    const [userCredentials] = useLocalStorage(LocalKeys.USER, null, null);
    const [page, setPage] = useState("EXPLORE");
    const [autoLogin, setAutoLogin] = useState(true);

    const setLoggedInUser = props.setLoggedInUser;
    useEffect(() => {
        if (userCredentials != null && autoLogin)
            setLoggedInUser(userCredentials.userName) // auto-login
    }, [userCredentials, autoLogin, setLoggedInUser]);

    const userManagement = () => {
        switch (page) {
            case "EXPLORE":
                return <Explore userCredentials={userCredentials} onSelect={setPage}/>;
            case "LOGIN":
                return <Login/>;
            case "SIGNUP":
                return <SignUp/>;
            default:
                alert("Error");
        }
    };

    return (
        props.user.loggedInUser == null ? userManagement() :
            (
                <BrowserRouter>
                    <Menu onLogout = { () => { props.logout(); setPage("EXPLORE"); setAutoLogin(false); } } />
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
        },
        setLoggedInUser: userName => {
            dispatch(UserActions.login(userName))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
