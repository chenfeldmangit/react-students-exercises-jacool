import React from 'react';
import PropTypes from "prop-types";

import jacob_img from "../../img/jacob.jpeg";
import open_picture_img from "../../img/open-picture.svg";
import open_gif_img from "../../img/open-gif.svg";
import smiley_img from "../../img/smiley.svg";

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
            <div id="twittingContainer" className="boxy">
                <img src={jacob_img} alt="Pic" className="profile-pic" width="50" height="50"/>
                <div id="twittingBox">
                    <input type="text" id="twittingInput" placeholder="What's happening?" value={this.state.tweetText} onChange={this.typingHandler}  />
                    <div id="twittingToolbarContainer">
                        <div id="twittingToolbar">
                            <img src={open_picture_img} width="24" height="24" className="colored tool-button" alt="Open pic"/>
                            <img src={open_gif_img} width="24" height="24" className="colored tool-button" alt="Open gif"/>
                            <img src={smiley_img} width="24" height="24" className="colored tool-button" alt="Open smiley"/>
                        </div>
                        <button id="smallTweet" onClick={this.onTweetClick} disabled={this.state.tweetText.trim().length < 3}>Tweet</button>
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
