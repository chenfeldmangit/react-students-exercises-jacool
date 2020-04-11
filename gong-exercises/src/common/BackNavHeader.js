import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BackNavHeader extends Component {
    render() {
        return (
            <div className="back-nav">
                <img src="img/back-arrow.svg" width="16" height="16" className="icon-button colored" alt="Back" onClick={this.props.goBackHandler}/>
                <h2 className="tab-title">{this.props.text}</h2>
            </div>
        );
    }
}

BackNavHeader.propTypes = {
    text: PropTypes.string.isRequired,
    goBackHandler: PropTypes.func.isRequired
};

export default BackNavHeader;
