import React from 'react';
import { withRouter } from "react-router-dom";

import "../../sass/profile.scss";

import PostContainer from "../common/PostContainer";
import Data from "../../data/Data";
import ProfileEditor from "./ProfileEditor";
import BackNavHeader from "../common/BackNavHeader";
import Throbber from "../common/Throbber";
import TextButton from "../common/TextButton";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myProfile: null,
            myPosts: [],
            showEdit: false
        };
    }

    async componentDidMount() {
        const [profile, posts] = await Promise.all([Data.fetchUserProfile(), Data.getPosts()]);
        const myPosts = posts.filter(p => p.author === profile.name);
        this.setState({myProfile: profile, myPosts});
    }

    deleteHandler = (id) => {
        this.setState((state, props) => {
            const posts = state.myPosts.filter(p => p.id !== id);
            return {myPosts: posts};
        });

        Data.removePost(id);
    };

    editHandler = () => {
        this.setState({showEdit: true})
    };

    closeEditHandler = (editedProfile) => {
        if (editedProfile != null) {
            this.setState({myProfile: editedProfile, showEdit: false});
            Data.storeProfile(editedProfile);
        }
        else
            this.setState({showEdit: false});
    };

    render() {
        if (this.state.myProfile == null)
            return (
                <div id="profileContainer" className="boxy">
                    <BackNavHeader text="Loading Profile..." goBackHandler={this.props.history.goBack}/>
                </div>
            );
        else
            return (
                <div id="profileContainer" className="boxy">
                    <BackNavHeader text={this.state.myProfile.name} goBackHandler={this.props.history.goBack}/>
                    <img src={this.state.myProfile.background} alt="Background"/>
                    <div id="profileDetails">
                        <div id="profilePicBar">
                            <img src={this.state.myProfile.imgPath} width="134" height="134" className="profile-face" alt="My Face"/>
                            <TextButton text="Edit profile" onClick={this.editHandler} />
                        </div>
                        <div id="profileDataBar">
                            <h2 className="tab-title" id="profileName">{this.state.myProfile.name}</h2>
                            <h3 className="small-text" id="profileHandle">{this.state.myProfile.handle}</h3>
                            <p className="post-text" id="profileBio">{this.state.myProfile.bio}</p>
                        </div>
                    </div>
                    <div id="myTweetsContainer">
                        <div className="inner-tab-name">
                            Tweets
                        </div>
                        <div id="myTweets">
                            {
                                this.state.myPosts.length === 0 ? <Throbber/> : (
                                    this.state.myPosts.map(p =>
                                        <PostContainer post={p} deleteHandler={this.deleteHandler} key={p.id}/>)
                                )
                            }
                        </div>
                    </div>

                    {
                        this.state.showEdit && <ProfileEditor profile={this.state.myProfile} closeHandler={this.closeEditHandler}/>
                    }
                </div>
            );
    }
}

export default withRouter(Profile);
