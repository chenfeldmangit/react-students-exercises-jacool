import React from 'react';
import PropTypes from 'prop-types';
import star_img from "../../img/star.svg";

class TabTitleContainer extends React.Component {
    render() {
        return (
            <div id="tabTitleContainer" className="boxy">
                <span className="tab-title">{this.props.name}</span>
                <img src={star_img} alt="Help" width="24" height="24" className="colored"/>
            </div>
        );
    }
}

TabTitleContainer.propTypes = {
    name: PropTypes.string.isRequired,
};

export default TabTitleContainer;
