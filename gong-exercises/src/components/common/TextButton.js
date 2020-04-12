import React from "react";
import PropTypes from "prop-types";

class TextButton extends React.Component {
    render() {
        return <button
            className={this.props.framedStyle ? "text-button-framed" : "text-button-solid"}
            onClick={this.props.onClick}
            disabled={this.props.disabled}>{this.props.text}</button>;
    }
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

export default TextButton;
