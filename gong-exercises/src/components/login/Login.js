import React, {useState} from "react";
import EditField from "../common/EditField";
import TextButton from "../common/TextButton";
import {connect} from "react-redux";
import UserActions from "../../actions/UserActions";
import useLocalStorage from "../../data/useLocalStorage";
import LocalKeys from "../../data/LocalKeys";

const Login = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userCredentials] = useLocalStorage(LocalKeys.USER, null, null);

    const performLogin = () => {
        if (userCredentials.userName === userName && userCredentials.password === password)
            props.setLoggedInUser(userName);
        else {
            setUserName("");
            setPassword("");
        }
    };

    const areProperCredentials = () => {
        return userName.length > 0 && password.length > 0;
    };

    return (
        <div>
            <EditField fieldName={"user"} maxLength={20} fieldNameDisplay="User" value={userName} changeHandler={(fieldName, value) => setUserName(value)}/>
            <EditField fieldName={"pass"} maxLength={20} fieldNameDisplay="Password" value={password} changeHandler={(fieldName, value) => setPassword(value)}/>
            <TextButton onClick={ () => performLogin() } disabled={!areProperCredentials()} text="Log in" />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedInUser: userName => {
            dispatch(UserActions.login(userName))
        }
    }
};

export default connect(null, mapDispatchToProps)(Login);
