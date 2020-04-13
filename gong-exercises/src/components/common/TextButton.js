import React from "react";
import PropTypes from "prop-types";

export default function TextButton(props) {
    return <button
        className={props.framedStyle ? "text-button-framed" : "text-button-solid"}
        onClick={props.onClick}
        disabled={props.disabled}>{props.text}</button>;
}

TextButton.defaultProps = {
    disabled: false,
    framedStyle: true
};

TextButton.propTypes = {
    text: PropTypes.string.isRequired,
    framedStyle: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};
