import React from "react";
import PropTypes from "prop-types";

export default function IconButton(props) {
    return <img src={props.imgPath} width="18" height="18"
                className={"icon-button " + props.colorationClass}
                onClick={props.clickHandler}
                alt={props.alt}/>;
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
