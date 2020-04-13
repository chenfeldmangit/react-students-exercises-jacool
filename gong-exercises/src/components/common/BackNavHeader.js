import React from 'react';
import PropTypes from 'prop-types';
import back_arrow_img from "../../img/back-arrow.svg";

export default function BackNavHeader(props) {
    return (
        <div className="back-nav">
            <img src={back_arrow_img} width="16" height="16" className="icon-button colored" alt="Back" onClick={props.goBackHandler}/>
            <h2 className="tab-title">{props.text}</h2>
        </div>
    );
}

BackNavHeader.propTypes = {
    text: PropTypes.string.isRequired,
    goBackHandler: PropTypes.func.isRequired
};
