import React from 'react';
import PropTypes from 'prop-types';
import IconButton from "./IconButton";

import reply_img from "../../img/reply.svg";
import close_x_img from "../../img/close.svg";
import liked_img from "../../img/liked.svg";
import heart_img from "../../img/heart.svg";
import retweet_img from "../../img/retweet.svg";

export default function PostContainer(props) {
    return (
        <div className="post-container boxy" key={props.post.id}>
            <img src={props.post.authorImage} className="profile-pic" width="50" height="50" alt="Pic"/>
            <article className="post">
                <h3 className="author">{props.post.author}</h3>
                <p className="post-text">{props.post.text}</p>
                <div className="post-toolbar">
                    <IconButton imgPath={reply_img}
                                clickHandler={() => {}}
                                alt="Reply" />
                    <IconButton imgPath={retweet_img}
                                clickHandler={() => {}}
                                alt="Retweet" />
                    {
                        props.deleteHandler &&
                        <IconButton imgPath={close_x_img}
                                    clickHandler={() => props.deleteHandler(props.post.id)}
                                    alt="Delete" />
                    }
                    {
                        props.likeHandler &&
                        <IconButton imgPath={props.post.like ? liked_img : heart_img}
                                    clickHandler={() => props.likeHandler(props.post.id)}
                                    colorationClass={props.post.like ? "red-colored" : "grey-colored"}
                                    alt="Like" />
                    }
                </div>
            </article>
        </div>
    );
}

const postType = PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    text: PropTypes.string,
    authorImage: PropTypes.string,
    like: PropTypes.bool
});

PostContainer.propTypes = {
    post: postType.isRequired,
    likeHandler: PropTypes.func,
    deleteHandler: PropTypes.func
};
