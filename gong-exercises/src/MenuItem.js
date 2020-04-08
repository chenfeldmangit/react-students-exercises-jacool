import React from 'react';
import PropTypes from 'prop-types';
// import mySvg from './img/home.svg';

class MenuItem extends React.Component {
    render() {
        return (
            <>
                <li>
                    <img src={this.props.path} alt={this.props.text} width="25" height="25" className={this.props.path.endsWith("jpeg") ? "profile-pic" : ""}/>
                    <span className="menu-item-text">{this.props.text}</span>
                </li>
            </>
        );
    }
}

MenuItem.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default MenuItem;
