import React, {useEffect, useState} from 'react';
import "../../sass/home.scss";
import TabTitleContainer from "../common/TabTitleContainer";
import TwittingContainer from "./TwittingContainer";
import Data from "../../data/Data";
import Feed from "./Feed";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setPosts(await Data.getPosts());
        }
        fetchData();
    }, []);

    const handleLikeClick = (id) => {
        const i = posts.findIndex(p => p.id === id);
        const post = posts[i];
        const posts_clone = [...posts];
        posts_clone[i] = {...post, like: !post.like};
        setPosts(posts_clone);
    };

    const handleTweeting = async (tweetText) => {
        const newPost = await Data.createMyPost(tweetText);
        const posts_clone = [...posts];
        posts_clone.unshift(newPost);
        setPosts(posts_clone);
        Data.addNewPost(newPost);
    };

    return (
        <div id="feedContainer" className="middle-column-container">
            <TabTitleContainer name="Home"/>
            <TwittingContainer tweetingHandler={handleTweeting}/>
            <Feed posts={posts} likeHandler={handleLikeClick}/>
        </div>
    );
}
