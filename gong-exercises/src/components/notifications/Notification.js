import React from 'react';
import PropTypes from "prop-types";

import heart_img from "../../img/notification-like.svg";
import person_img from "../../img/notification-person.svg";

export default function Notification(props) {
    return (
        <div>
            <img src={props.content.category === "like" ? heart_img : person_img} width="50" height="50"/>
            <span>
                <img src={props.content.authorImage} className="profile-pic" width="50" height="50"/>
                <div>{props.content.author}</div>
                <div>{props.content.text}</div>
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
