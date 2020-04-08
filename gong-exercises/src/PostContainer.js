import React from 'react';
import PropTypes from 'prop-types';

class PostContainer extends React.Component {
    render() {
        return (
            <div className="post-container boxy" key={this.props.post.id}>
                <img src={this.props.post.authorImage} className="profile-pic" width="50" height="50" alt="Pic"/>
                <article>
                    <h3 className="author">{this.props.post.author}</h3>
                    <p className="post-text">{this.props.post.text}</p>
                    <div className="post-toolbar">
                        <img src="img/reply.svg" width="16" height="16" alt="Reply" className="icon-button"/>
                        <img src="img/retweet.svg" width="16" height="16" alt="Retweet" className="icon-button"/>
                        <img src={this.props.post.like ? "img/liked.svg" : "img/heart.svg"} width="16" height="16" alt="Like" className={"icon-button " + (this.props.post.like ? "red-colored" : "blue-colored")} onClick={() => this.props.likeHandler(this.props.post.id)}/>
                        <img src="img/close.svg" width="16" height="16" alt="Delete" className="icon-button"/>
                    </div>
                </article>
            </div>
        );
    }
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
    likeHandler: PropTypes.func.isRequired
};

export default PostContainer;