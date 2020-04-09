import React from 'react';
import TabTitleContainer from "./TabTitleContainer";
import TwittingContainer from "./TwittingContainer";
import PostContainer from "./PostContainer";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    id: "56756733",
                    author: "Chen Feldman",
                    text: "Use setState to update it. Remember, state change = re-render!",
                    authorImage: "img/chen.jfif",
                    like: false
                },
                {
                    id: "15675751",
                    author: "Eilon Reshef",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    authorImage: "img/eilon.jfif",
                    like: false
                },
                {
                    id: "256757572",
                    author: "Bill Gates",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                    authorImage: "img/bill.jpg",
                    like: false
                },
                {
                    id: "45675675674",
                    author: "Jacob Eckel",
                    text: "bla",
                    authorImage: "img/jacob.jpeg",
                    like: false
                }
            ]
        }
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
                            return <PostContainer post={p} likeHandler={this.likeHandler}/>;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;

