import React from "react";
import PropTypes from "prop-types";

class IconButton extends React.Component {
    render() {
        return <img src={this.props.imgPath} width="18" height="18"
                    className={"icon-button " + this.props.colorationClass}
                    onClick={this.props.clickHandler}
                    alt={this.props.alt}/>;
    }
}

IconButton.defaultProps = {
    colorationClass: "grey-colored",
    alt: ""
};

IconButton.propTypes = {
    imgPath: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
    colorationClass: PropTypes.string,
    alt: PropTypes.string
};

export default IconButton;
