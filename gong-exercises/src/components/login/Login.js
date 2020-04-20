import React, {useState} from "react";
import EditField from "../common/EditField";
import TextButton from "../common/TextButton";
import {connect} from "react-redux";
import UserActions from "../../actions/UserActions";

const Login = (props) => {
    const [userName, setUserName] = useState("");
    return (
        <div>
            <EditField fieldName={"user"} maxLength={20} fieldNameDisplay="User" value={userName} changeHandler={(fieldName, value) => setUserName(value)}/>
            <EditField fieldName={"pass"} maxLength={20} fieldNameDisplay="Password"/>
            <TextButton onClick={ () => props.setUser(userName) } text="Log in" />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: user => {
            dispatch(UserActions.login(user))
        }
    }
};

export default connect(null, mapDispatchToProps)(Login);
