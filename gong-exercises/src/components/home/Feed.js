import React from 'react';
import * as PropTypes from "prop-types";
import PostContainer from "../common/PostContainer";
import Throbber from "../common/Throbber";

export default function Feed(props) {
    return <div id="feed">
        {
            props.posts.length === 0 ? <Throbber/> : (
                props.posts.map(p => {
                    return <PostContainer post={p} likeHandler={props.likeHandler} key={p.id}/>;
                })
            )
        }
    </div>
}

Feed.propTypes = {
    posts: PropTypes.array.isRequired,
    likeHandler: PropTypes.func.isRequired
};
