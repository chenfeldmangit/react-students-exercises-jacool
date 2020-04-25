import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export default function MenuItem(props) {
    return (
        <li className="menu-item">
            <Link to={props.route ? props.route : "/"} className="menu-item-link">
                <img src={props.path} alt={props.text} width="25" height="25"
                     className={props.path.endsWith("jpeg") ? "profile-pic" : ""}/>
                <span className="menu-item-text">{props.text}</span>
            </Link>
        </li>
    );
}

MenuItem.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    route: PropTypes.string
};
