import React from 'react';
import PropTypes from "prop-types";

class TwittingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tweetText: ""};
    }

    typingHandler = (event) => {
        this.setState({tweetText: event.target.value});
    };

    onTweetClick = () => {
        const text = this.state.tweetText;
        this.setState({tweetText: ""});
        this.props.tweetingHandler(text);
    };

    render() {
        return (
            <div id="twitting-container" className="boxy">
                <img src="img/jacob.jpeg" alt="Pic" className="profile-pic" width="50" height="50"/>
                <div id="twitting-box">
                    <input type="text" id="twitting-input" placeholder="What's happening?" value={this.state.tweetText} onChange={this.typingHandler}  />
                    <div id="twitting-toolbar-container">
                        <div id="twitting-toolbar">
                            <img src="img/open-picture.svg" width="24" height="24" className="colored tool-button" alt="Open pic"/>
                            <img src="img/open-gif.svg" width="24" height="24" className="colored tool-button" alt="Open gif"/>
                            <img src="img/smiley.svg" width="24" height="24" className="colored tool-button" alt="Open smiley"/>
                        </div>
                        <button id="small-tweet" onClick={this.onTweetClick} disabled={this.state.tweetText.trim().length < 3}>Tweet</button>
                    </div>
                </div>
            </div>
        );
    }
}

TwittingContainer.propTypes = {
    tweetingHandler: PropTypes.func.isRequired
};

export default TwittingContainer;
