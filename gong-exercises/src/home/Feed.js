import React from 'react';
import * as PropTypes from "prop-types";
import PostContainer from "../common/PostContainer";
import Throbber from "../common/Throbber";

class Feed extends React.Component {
    render() {
        return <div id="feed">
            {
                this.props.posts.length === 0 ? <Throbber/> : (
                    this.props.posts.map(p => {
                        return <PostContainer post={p} likeHandler={this.props.likeHandler} key={p.id}/>;
                    })
                )
            }
        </div>
    }
}

Feed.propTypes = {
    posts: PropTypes.array.isRequired,
    likeHandler: PropTypes.func.isRequired
};

export default Feed;
