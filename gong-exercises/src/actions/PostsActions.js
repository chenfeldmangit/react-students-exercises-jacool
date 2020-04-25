class PostsActions {
    static addPost = (post) => {
        return {
            type: PostsActions.ADD_POST,
            post: post
        }
    };

    static removePost = (postId) => {
        return {
            type: PostsActions.REMOVE_POST,
            postId: postId
        }
    };

    static likePost = (postId) => {
        return {
            type: PostsActions.LIKE_POST,
            postId: postId
        }
    };
}

PostsActions.ADD_POST = "ADD_POST";
PostsActions.REMOVE_POST = "REMOVE_POST";
PostsActions.LIKE_POST = "LIKE_POST";

export default PostsActions;




