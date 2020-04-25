import React from 'react';
import {connect} from "react-redux";

import "../../sass/home.scss";

import TabTitleContainer from "../common/TabTitleContainer";
import TwittingContainer from "./TwittingContainer";
import InitialData from "../../data/InitialData";
import Feed from "./Feed";
import LocalKeys from "../../data/LocalKeys";
import useLocalStorage from "../../data/useLocalStorage";
import PostsActions from "../../actions/PostsActions";

const Home = (props) => {
    const [myProfile] = useLocalStorage(LocalKeys.PROFILE_KEY, null, InitialData.profile);

    const createNewPost = (tweetText) => {
        return {
            id: (Math.round(Math.random() * 1000000000000000)).toString(),
            author: myProfile.name,
            text: tweetText,
            authorImage: myProfile.imgPath,
            like: false
        };
    };

    return (
        <div id="feedContainer" className="middle-column-container">
            <TabTitleContainer name="Home"/>
            <TwittingContainer tweetingHandler={(tweetText) => props.tweet(createNewPost(tweetText))}/>
            <Feed posts={props.posts} likeHandler={(id) => props.like(id)}/>
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
        like: (postId) => {
            dispatch(PostsActions.likePost(postId))
        },

        tweet: (post) => {
            dispatch(PostsActions.addPost(post))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
