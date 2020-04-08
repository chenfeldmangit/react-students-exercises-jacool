import React from 'react';
import PropTypes from 'prop-types';

class TabTitleContainer extends React.Component {
    render() {
        return (
            <div id="tab-title-container" className="boxy">
                <span className="tab-title">{this.props.name}</span>
                <img src="img/star.svg" alt="Help" width="24" height="24" className="colored"/>
            </div>
        );
    }
}

TabTitleContainer.propTypes = {
    name: PropTypes.string.isRequired,
};

export default TabTitleContainer;
