import React from "react";
import { connect } from 'react-redux';

const Explore = (props) => {
    return (
        <div>
            <button onClick={() => props.onSelect("SIGNUP")}>Sign up</button>
            <button onClick={() => props.onSelect("LOGIN")}>Log in</button>
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        user: store.user
    }
};

export default connect(mapStateToProps)(Explore);


