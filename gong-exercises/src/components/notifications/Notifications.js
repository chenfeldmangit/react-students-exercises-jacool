import React from 'react';

import "../../sass/notifications.scss";

import TabTitleContainer from "../common/TabTitleContainer";
import NotificationsTabs from "./NotificationsTabs";
import NotificationsFeed from "./NotificationsFeed";

export default function Notifications() {
    return (
        <div id="notificationsContainer" className="middle-column-container">
            <TabTitleContainer name="Notifications"/>
            <NotificationsTabs/>
            <NotificationsFeed/>
        </div>
    );
}

