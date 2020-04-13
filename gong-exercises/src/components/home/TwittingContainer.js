import React, {useState} from 'react';
import PropTypes from "prop-types";

import TextButton from "../common/TextButton";

import jacob_img from "../../img/jacob.jpeg";
import open_picture_img from "../../img/open-picture.svg";
import open_gif_img from "../../img/open-gif.svg";
import smiley_img from "../../img/smiley.svg";

export default function TwittingContainer(props) {
    const [tweetText, setTweetText] = useState("");

    const typingHandler = (event) => {
        setTweetText(event.target.value);
    };

    const onTweetClick = () => {
        setTweetText("");
        props.tweetingHandler(tweetText);
    };

    const sufficientTweetLength = () => {
        return tweetText.trim().length >= 3;
    };

    return (
        <div id="twittingContainer" className="boxy">
            <img src={jacob_img} alt="Pic" className="profile-pic" width="50" height="50"/>
            <div id="twittingBox">
                <input type="text" id="twittingInput" placeholder="What's happening?" value={tweetText}
                       onChange={typingHandler}/>
                <div id="twittingToolbarContainer">
                    <div id="twittingToolbar">
                        <img src={open_picture_img} width="24" height="24" className="colored tool-button" alt="Open pic"/>
                        <img src={open_gif_img} width="24" height="24" className="colored tool-button" alt="Open gif"/>
                        <img src={smiley_img} width="24" height="24" className="colored tool-button" alt="Open smiley"/>
                    </div>
                    <TextButton text="Tweet" framedStyle={false} onClick={onTweetClick}
                                disabled={!sufficientTweetLength()}/>
                </div>
            </div>
        </div>
    );
}

TwittingContainer.propTypes = {
    tweetingHandler: PropTypes.func.isRequired
};
