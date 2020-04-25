import React from "react";
import PropTypes from "prop-types";
import TextButton from "../common/TextButton";

const Explore = (props) => {
    return (
        <div>
            <TextButton text="Sign Up" onClick={() => props.onSelect("SIGNUP")} />
            <TextButton text="Log in" disabled={props.userCredentials == null} onClick={() => props.onSelect("LOGIN")} />
        </div>
    );
};

Explore.propTypes = {
    onSelect: PropTypes.func.isRequired,
    userCredentials: PropTypes.object
};

export default Explore;


