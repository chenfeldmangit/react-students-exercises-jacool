import React from 'react';
import Notification from "./Notification";
import InitialData from "../../data/InitialData";
import LocalKeys from "../../data/LocalKeys"
import useLocalStorage from "../../data/useLocalStorage";
import Throbber from "../common/Throbber";


export default function NotificationsFeed() {
    const [notifications] = useLocalStorage(LocalKeys.MENTIONS_KEY, [], InitialData.mentions);

    return (
        <div>
            {
                notifications.length === 0
                    ? <Throbber text="Loading notifications..."/>
                    : notifications.map(n => <Notification content={n} key={n.id}/>)
            }
        </div>
    )
}
