import PostsActions from "../actions/PostsActions"
import InitialData from "../data/InitialData";

export const postsReducer = function(state = InitialData.posts, action) {
    switch (action.type) {
        case PostsActions.ADD_POST:
            return [action.post, ...state];
        case PostsActions.REMOVE_POST:
            return state.filter(p => p.id !== action.postId);
        case PostsActions.LIKE_POST:
            const i = state.findIndex(p => p.id === action.postId);
            const post = state[i];
            const posts_clone = [...state];
            posts_clone[i] = {...post, like: !post.like};
            return posts_clone;
        default:
            return state;

    }
};
