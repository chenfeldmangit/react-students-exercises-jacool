import React from 'react';
import TabTitleContainer from "./TabTitleContainer";
import TwittingContainer from "./TwittingContainer";
import PostContainer from "./PostContainer";
import Data from "./Data"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts: Data.getPosts()};
    }

    likeHandler = (id) => {
        this.setState((state, props) => {
            const i = state.posts.findIndex(p => p.id === id);
            // puke, puke, puke, the framework that requires this should be erased from the face of Earth
            const posts = [...state.posts];
            const post = {...posts[i]};
            post.like = !post.like;
            posts[i] = post;
            return {posts};
        })
    };

    render() {
        return (
            <div id="feed-container">
                <TabTitleContainer name="Home"/>
                <TwittingContainer/>
                <div id="feed">
                    {
                        this.state.posts.map(p => {
                            return <PostContainer post={p} likeHandler={this.likeHandler} key={p.id}/>;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;

