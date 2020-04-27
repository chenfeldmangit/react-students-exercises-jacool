import React from 'react';
import Notification from "./Notification";
import Throbber from "../common/Throbber";
import {connect} from "react-redux";

const NotificationsFeed = (props) => {
    return (
        <div>
            {
                props.notifications.length === 0
                    ? <Throbber text="Loading notifications..."/>
                    : props.notifications.map(n => <Notification content={n} key={n.id}/>)
            }
        </div>
    )
};

const mapStateToProps = (store) => {
    return {
        notifications: store.mentions
    }
};

export default connect(mapStateToProps)(NotificationsFeed);
