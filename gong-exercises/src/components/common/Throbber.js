import React from "react";
import PropTypes from "prop-types";

export default function Throbber(props) {
    return <div id="throbber" className="post-container boxy">
        <article className="post">
            <h3>{props.text}</h3>
        </article>
    </div>;
}

Throbber.propTypes = {
    text: PropTypes.string.isRequired
};
