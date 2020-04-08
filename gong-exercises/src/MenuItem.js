import React from 'react';

// import mySvg from './img/home.svg';

class MenuItem extends React.Component {
    render() {
        return (
            <>
                <li>
                    <img src={this.props.path} alt={this.props.text} width="25" height="25"/>
                    <span className="menu-item-text">{this.props.text}</span>
                </li>
            </>
        );
    }
}

export default MenuItem;
