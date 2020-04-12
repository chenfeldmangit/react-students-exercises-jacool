import React from 'react';
import '../../sass/menu.scss';
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";
import CurrentTab from "../common/CurrentTab";

import logo_img from "../../img/logo.svg";
import home_img from "../../img/home.svg";
import explore_img from "../../img/explore.svg";
import notifications_img from "../../img/notifications.svg";
import messages_img from "../../img/messages.svg";
import bookmarks_img from "../../img/bookmarks.svg";
import lists_img from "../../img/lists.svg";
import jacob_img from "../../img/jacob.jpeg";
import more_img from "../../img/more.svg";

class Menu extends React.Component {
    render() {
        return (
            <div id="menuContainer">
                <div id="logo" className="colored">
                    <img src={logo_img} alt="Logo" width="30" height="30"/>
                </div>
                <ul id="menu">
                    <MenuItem path={home_img} text="Home" clickHandler = {() => this.props.menuHandler(CurrentTab.HOME)}/>
                    <MenuItem path={explore_img} text="Explore"/>
                    <MenuItem path={notifications_img} text="Notifications"/>
                    <MenuItem path={messages_img} text="Messages"/>
                    <MenuItem path={bookmarks_img} text="Bookmarks"/>
                    <MenuItem path={lists_img} text="Lists"/>
                    <MenuItem path={jacob_img} text="Profile" clickHandler = {() => this.props.menuHandler(CurrentTab.PROFILE)}/>
                    <MenuItem path={more_img} text="More"/>
                </ul>
            </div>
        );
    }
}

Menu.propTypes = {
    menuHandler: PropTypes.func.isRequired
};

export default Menu;
