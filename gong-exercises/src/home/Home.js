import React from 'react';
import "../sass/home.scss";
import TabTitleContainer from "./TabTitleContainer";
import TwittingContainer from "./TwittingContainer";
import Data from "../data/Data";
import Feed from "./Feed";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    async componentDidMount() {
        const posts = await Data.getPosts();
        this.setState({posts: posts});
    }

    handleLikeClick = (id) => {
        this.setState((state, props) => {
            const i = state.posts.findIndex(p => p.id === id);
            const posts = [...state.posts];
            const post = {...posts[i]};
            post.like = !post.like;
            posts[i] = post;
            return {posts: posts};
        })
    };

    handleTweeting = async (tweetText) => {
        const newPost = await Data.createMyPost(tweetText);
        this.setState((state, props) => {
            const posts = [...state.posts];
            posts.unshift(newPost);
            return {posts};
        });
        Data.addNewPost(newPost);
    };

    render() {
        return (
            <div id="feedContainer">
                <TabTitleContainer name="Home"/>
                <TwittingContainer tweetingHandler={this.handleTweeting}/>
                <Feed posts={this.state.posts} likeHandler={this.handleLikeClick}/>
            </div>
        );
    }
}

export default Home;

