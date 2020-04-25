import React from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../../data/useLocalStorage";
import LocalKeys from "../../data/LocalKeys";
import TextButton from "../common/TextButton";

const Explore = (props) => {
    const [userCredentials] = useLocalStorage(LocalKeys.USER, null, null);

    return (
        <div>
            <TextButton text="Sign Up" onClick={() => props.onSelect("SIGNUP")} />
            <TextButton text="Log in" disabled={userCredentials == null} onClick={() => props.onSelect("LOGIN")} />
        </div>
    );
};

Explore.propTypes = {
    onSelect: PropTypes.func.isRequired
};

export default Explore;


