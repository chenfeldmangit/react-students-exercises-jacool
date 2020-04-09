import React from 'react';
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";
import App from "./App"

class Menu extends React.Component {
    render() {
        return (
            <div id="menu-container">
                <div id="logo" className="colored">
                    <img src="img/logo.svg" alt="Logo" width="30" height="30"/>
                </div>
                <ul id="menu">
                    <MenuItem path="img/home.svg" text="Home" clickHandler = {() => this.props.menuHandler(App.HOME)}/>
                    <MenuItem path="img/explore.svg" text="Explore"/>
                    <MenuItem path="img/notifications.svg" text="Notifications"/>
                    <MenuItem path="img/messages.svg" text="Messages"/>
                    <MenuItem path="img/bookmarks.svg" text="Bookmarks"/>
                    <MenuItem path="img/lists.svg" text="Lists"/>
                    <MenuItem path="img/jacob.jpeg" text="Profile" clickHandler = {() => this.props.menuHandler(App.PROFILE)}/>
                    <MenuItem path="img/more.svg" text="More"/>
                </ul>
            </div>
        );
    }
}

Menu.propTypes = {
    menuHandler: PropTypes.func.isRequired
};

export default Menu;
