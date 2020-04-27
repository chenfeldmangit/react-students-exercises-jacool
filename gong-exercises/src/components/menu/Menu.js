import React from 'react';
import '../../sass/menu.scss';
import MenuItem from "./MenuItem";
import Routs from "../common/Routs";

import logo_img from "../../img/logo.svg";
import home_img from "../../img/home.svg";
import explore_img from "../../img/explore.svg";
import notifications_img from "../../img/notifications.svg";
import messages_img from "../../img/messages.svg";
import bookmarks_img from "../../img/bookmarks.svg";
import lists_img from "../../img/lists.svg";
import jacob_img from "../../img/jacob.jpeg";
import more_img from "../../img/more.svg";
import TextButton from "../common/TextButton";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const Menu = (props) => {
    return (
        <div id="menuContainer">
            <div id="logo" className="colored">
                <img src={logo_img} alt="Logo" width="30" height="30"/>
            </div>

            <ul id="menu">
                <MenuItem path={home_img} text="Home" route={Routs.HOME} />
                <MenuItem path={explore_img} text="Explore"/>
                <MenuItem path={notifications_img} text="Notifications" badge={props.notificationsLength} route={Routs.NOTIFICATIONS} />
                <MenuItem path={messages_img} text="Messages"/>
                <MenuItem path={bookmarks_img} text="Bookmarks"/>
                <MenuItem path={lists_img} text="Lists"/>
                <MenuItem path={jacob_img} text="Profile" route={Routs.PROFILE} />
                <MenuItem path={more_img} text="More"/>
            </ul>

            <TextButton onClick={ () => {  props.onLogout(); } } text="Logout" />
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        notificationsLength: store.mentions.length
    }
};

Menu.propTypes = {
    onLogout: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Menu);

