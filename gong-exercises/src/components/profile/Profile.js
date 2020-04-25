import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router-dom";

import "../../sass/profile.scss";

import PostContainer from "../common/PostContainer";
import InitialData from "../../data/InitialData";
import ProfileEditor from "./ProfileEditor";
import BackNavHeader from "../common/BackNavHeader";
import Throbber from "../common/Throbber";
import TextButton from "../common/TextButton";
import useLocalStorage from "../../data/useLocalStorage";
import LocalKeys from "../../data/LocalKeys";
import PostsActions from "../../actions/PostsActions";
import {connect} from "react-redux";

const Profile = (props) => {
    const calcMyPosts = () => myProfile == null ? null : props.posts.filter(p => p.author === myProfile.name);

    const [myProfile, setMyProfile] = useLocalStorage(LocalKeys.PROFILE_KEY, null, InitialData.profile);
    const [myPosts, setMyPosts] = useState(calcMyPosts());
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        setMyPosts(calcMyPosts());
    }, [props.posts, myProfile]);

    const editHandler = () => {
        setShowEdit(true);
    };

    const closeEditHandler = (editedProfile) => {
        setShowEdit(false);
        if (editedProfile != null)
            setMyProfile(editedProfile);
    };

    if (myProfile == null)
        return (
            <div id="profileContainer" className="boxy">
                <BackNavHeader text="Loading Profile..." goBackHandler={props.history.goBack}/>
            </div>
        );
    else
        return (
            <div id="profileContainer" className="boxy">
                <BackNavHeader text={myProfile.name} goBackHandler={props.history.goBack}/>
                <img src={myProfile.background} alt="Background"/>
                <div id="profileDetails">
                    <div id="profilePicBar">
                        <img src={myProfile.imgPath} width="134" height="134" className="profile-face" alt="My Face"/>
                        <TextButton text="Edit profile" onClick={editHandler} />
                    </div>
                    <div id="profileDataBar">
                        <h2 className="tab-title" id="profileName">{myProfile.name}</h2>
                        <h3 className="small-text" id="profileHandle">{myProfile.handle}</h3>
                        <p className="post-text" id="profileBio">{myProfile.bio}</p>
                    </div>
                </div>
                <div id="myTweetsContainer">
                    <div className="inner-tab-name">Tweets</div>
                    <div id="myTweets">
                        {
                            myPosts == null ? <Throbber text="Loading my posts..."/> : (
                                myPosts.map(p =>
                                    <PostContainer post={p} deleteHandler={(id) => props.removePost(id)} key={p.id}/>)
                            )
                        }
                    </div>
                </div>

                {
                    showEdit && <ProfileEditor profile={myProfile} closeHandler={closeEditHandler}/>
                }
            </div>
        );
};

const mapStateToProps = (store) => {
    return {
        posts: store.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removePost: (postId) => {
            dispatch(PostsActions.removePost(postId))
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
