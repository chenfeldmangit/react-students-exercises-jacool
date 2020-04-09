import React from 'react';
import PropTypes from 'prop-types';
import PostContainer from "./PostContainer";

class Profile extends React.Component {
    render() {
        return (
            <div id="profile-container" className="boxy">
                <div className="back-nav">
                    <img src="img/back-arrow.svg" width="16" height="16" className="colored" alt="Back"/>
                    <h2 className="tab-title" id="profile-top-name">Jacob Eckel</h2>
                </div>
                <img src="img/profile-back.jfif" alt="Background"/>
                <div id="profile-details">
                    <div id="profile-pic-bar">
                        <img src="img/jacob.jpeg" width="134" height="134" className="profile-face" alt="Photo"/>
                        <span onClick={() => {}} className="button">Edit profile</span>
                    </div>
                    <div id="profile-data-bar">
                        <h2 className="tab-title" id="profile-name"></h2>
                        <h3 className="small-text" id="profile-handle"></h3>
                        <p className="post-text" id="profile-bio"></p>
                    </div>
                </div>
                <div id="my-tweets-container">
                    <div className="inner-tab-name">
                        Tweets
                    </div>
                    <div id="my-tweets">
                        <PostContainer post={{
                            id: "44",
                            author: "Jacob Eckel",
                            text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                            authorImage: "img/jacob.jpeg",
                            like: false
                        }} likeHandler={() => {}}/>
                    </div>
                </div>
            </div>
        );
    }
}

Profile.propTypes = {};

export default Profile;
