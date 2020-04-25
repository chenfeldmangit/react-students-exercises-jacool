import React, {useState} from "react";
import EditField from "../common/EditField";
import TextButton from "../common/TextButton";
import {connect} from "react-redux";
import UserActions from "../../actions/UserActions";
import useLocalStorage from "../../data/useLocalStorage";
import LocalKeys from "../../data/LocalKeys";

const SignUp = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [, setUserCredentials] = useLocalStorage(LocalKeys.USER, null, null);

    const performSignUp = () => {
        props.setUser(userName);
        setUserCredentials({userName: userName, password: password});
    };

    const areProperCredentials = () => {
        return userName.length > 0 && password.length > 0;
    };

    return (
        <div>
            <EditField fieldName={"user"} maxLength={20} fieldNameDisplay="User" value={userName} changeHandler={(fieldName, value) => setUserName(value)}/>
            <EditField fieldName={"pass"} maxLength={20} fieldNameDisplay="Password" value={password} changeHandler={(fieldName, value) => setPassword(value)}/>
            <TextButton onClick={ () => performSignUp() } disabled={!areProperCredentials()} text="Sign Up" />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: user => {
            dispatch(UserActions.signUp(user))
        }
    }
};

export default connect(null, mapDispatchToProps)(SignUp);
