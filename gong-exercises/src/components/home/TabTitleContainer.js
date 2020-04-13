import React from 'react';
import PropTypes from 'prop-types';
import star_img from "../../img/star.svg";

export default function TabTitleContainer(props) {
        return (
            <div id="tabTitleContainer" className="boxy">
                <span className="tab-title">{props.name}</span>
                <img src={star_img} alt="Help" width="24" height="24" className="colored"/>
            </div>
        );
}

TabTitleContainer.propTypes = {
    name: PropTypes.string.isRequired,
};
