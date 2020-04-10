import React from 'react';
import TabTitleContainer from "./TabTitleContainer";
import TwittingContainer from "./TwittingContainer";
import PostContainer from "./PostContainer";
import Data from "./Data"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    async componentDidMount() {
        const posts = await Data.getPosts();
        this.setState({posts: posts});
    }

    likeHandler = (id) => {
        this.setState((state, props) => {
            const i = state.posts.findIndex(p => p.id === id);
            const posts = [...state.posts];
            const post = {...posts[i]};
            post.like = !post.like;
            posts[i] = post;
            return {posts: posts};
        })
    };

    tweetingHandler = async (tweetText) => {
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
            <div id="feed-container">
                <TabTitleContainer name="Home"/>
                <TwittingContainer tweetingHandler={this.tweetingHandler}/>
                <div id="feed">
                    {
                        this.state.posts.length === 0 ?
                            (
                                <div id="throbber" className="post-container boxy">
                                    <article>
                                        <h3>Loading Tweets...</h3>
                                    </article>
                                </div>
                            ) : (
                                this.state.posts.map(p => {
                                    return <PostContainer post={p} likeHandler={this.likeHandler} key={p.id}/>;
                                })
                            )
                    }
                </div>
            </div>
        );
    }
}

export default Home;

