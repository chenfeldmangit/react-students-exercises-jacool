import React from 'react';
import PropTypes from 'prop-types';
import PostContainer from "./PostContainer";
import Data from "./Data";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myPosts: Data.getData().filter(p => p.author === "Jacob Eckel"),
            myProfile: {
                name: "Jacob Eckel",
                handle: "@eckely",
                bio: "Software developer since the last century"
            }
        };
    }

    render() {
        return (
            <div id="profile-container" className="boxy">
                <div className="back-nav">
                    <img src="img/back-arrow.svg" width="16" height="16" className="colored" alt="Back"/>
                    <h2 className="tab-title" id="profile-top-name">{this.state.myProfile.name}</h2>
                </div>
                <img src="img/profile-back.jfif" alt="Background"/>
                <div id="profile-details">
                    <div id="profile-pic-bar">
                        <img src="img/jacob.jpeg" width="134" height="134" className="profile-face" alt="Photo"/>
                        <span onClick={() => {
                        }} className="button">Edit profile</span>
                    </div>
                    <div id="profile-data-bar">
                        <h2 className="tab-title" id="profile-name">{this.state.myProfile.name}</h2>
                        <h3 className="small-text" id="profile-handle">{this.state.myProfile.handle}</h3>
                        <p className="post-text" id="profile-bio">{this.state.myProfile.bio}</p>
                    </div>
                </div>
                <div id="my-tweets-container">
                    <div className="inner-tab-name">
                        Tweets
                    </div>
                    <div id="my-tweets">
                        {
                            this.state.myPosts.map(p =>
                                <PostContainer post={p} likeHandler={() => {}}/>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Profile.propTypes = {};

export default Profile;
