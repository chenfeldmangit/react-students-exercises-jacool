import React, {useState} from "react";
import EditField from "../common/EditField";
import TextButton from "../common/TextButton";
import {connect} from "react-redux";
import UserActions from "../../actions/UserActions";

const SignUp = (props) => {
    const [userName, setUserName] = useState("");
    return (
        <div>
            <EditField fieldName={"user"} maxLength={20} fieldNameDisplay="User" changeHandler={(fieldName, value) => setUserName(value)}/>
            <EditField fieldName={"pass"} maxLength={20} fieldNameDisplay="Password"/>
            <TextButton onClick={ () => props.setUser(userName) } text="Sign Up" />
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
