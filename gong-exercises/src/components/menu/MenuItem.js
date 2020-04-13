import React from 'react';
import PropTypes from 'prop-types';

export default function MenuItem(props) {
    return (
        <>
            <li onClick={() => props.clickHandler()}>
                <img src={props.path} alt={props.text} width="25" height="25"
                     className={props.path.endsWith("jpeg") ? "profile-pic" : ""}/>
                <span className="menu-item-text">{props.text}</span>
            </li>
        </>
    );
}

MenuItem.defaultProps = {
    clickHandler: () => {}
};

MenuItem.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func
};
