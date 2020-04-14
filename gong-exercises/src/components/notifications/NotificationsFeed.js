import React, {useEffect, useState} from 'react';
import Notification from "./Notification";
import Data from "../../data/Data";

export default function NotificationsFeed() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        async function fetch() {
            setNotifications(await Data.fetchMentions());
        }

        fetch();
    }, []);

    return (
        <div>
            {
                notifications.map(n =>
                    <Notification content={n} key={n.id}/>
                )
            }
        </div>
    )
}
