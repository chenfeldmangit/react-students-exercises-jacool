import React from 'react';
import PostContainer from "./PostContainer";
import Data from "./Data";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        const myProfile = Data.myProfile();
        this.state = {
            myProfile: myProfile,
            myPosts: Data.getPosts().filter(p => p.author === myProfile.name)
        };
    }

    render() {
        return (
            <div id="profile-container" className="boxy">
                <div className="back-nav">
                    <img src="img/back-arrow.svg" width="16" height="16" className="colored" alt="Back"/>
                    <h2 className="tab-title" id="profile-top-name">{this.state.myProfile.name}</h2>
                </div>
                <img src={this.state.myProfile.background} alt="Background"/>
                <div id="profile-details">
                    <div id="profile-pic-bar">
                        <img src={this.state.myProfile.imgPath} width="134" height="134" className="profile-face" alt="My Face"/>
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
                                <PostContainer post={p} likeHandler={() => {}} key={p.id}/>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Profile.propTypes = {};

export default Profile;
