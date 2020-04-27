import {takeEvery, put, select } from "redux-saga/effects";
import PostsActions from "../actions/PostsActions";
import MentionActions from "../actions/MentionActions";

function* addMentionById(likeAction) {
    const id = likeAction.postId;
    const postBeingLiked = yield select(state => state.posts.filter(p => p.id === id)[0]);
    yield put(MentionActions.addLikeMention(postBeingLiked));
}

export function* watchLike() {
    yield takeEvery(PostsActions.LIKE_POST, addMentionById);
}
