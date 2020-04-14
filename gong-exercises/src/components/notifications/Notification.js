import React from 'react';
import PropTypes from "prop-types";

import heart_img from "../../img/notification-like.svg";
import person_img from "../../img/notification-person.svg";

export default function Notification(props) {
    return (
        <div className="notification">
            <img className="category-icon" src={props.content.category === "like" ? heart_img : person_img} alt=""/>
            <span className="notification-content">
                <img src={props.content.authorImage} className="small-profile-pic" alt=""/>
                <div className="content-head"><b>{props.content.author}</b> {props.content.category === "like" ? "liked your reply" : "followed you"}</div>
                <div className="content-text">{props.content.text}</div>
            </span>
        </div>
    )
}

const notificationType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorImage: PropTypes.string.isRequired,
    text: PropTypes.string,
});

Notification.propTypes = {
    content: notificationType.isRequired
};
