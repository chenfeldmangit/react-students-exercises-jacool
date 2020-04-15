import React from 'react';

import "../../sass/home.scss";

import TabTitleContainer from "../common/TabTitleContainer";
import TwittingContainer from "./TwittingContainer";
import InitialData from "../../data/InitialData";
import Feed from "./Feed";
import LocalKeys from "../../data/LocalKeys";
import useLocalStorage from "../../data/useLocalStorage";

export default function Home() {
    const [posts, setPosts] = useLocalStorage(LocalKeys.POSTS_KEY, [], InitialData.posts);
    const [myProfile] = useLocalStorage(LocalKeys.PROFILE_KEY, null, InitialData.profile);

    const handleLikeClick = (id) => {
        const i = posts.findIndex(p => p.id === id);
        const post = posts[i];
        const posts_clone = [...posts];
        posts_clone[i] = {...post, like: !post.like};
        setPosts(posts_clone);
    };

    const handleTweeting = (tweetText) => {
        const newPost = createNewPost(tweetText);
        const posts_clone = [...posts];
        posts_clone.unshift(newPost);
        setPosts(posts_clone);
    };

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
            <TwittingContainer tweetingHandler={handleTweeting}/>
            <Feed posts={posts} likeHandler={handleLikeClick}/>
        </div>
    );
}
