import { createStore, combineReducers } from 'redux';
import { userReducer } from "../reducers/UserReducer";
import {postsReducer} from "../reducers/PostsReducer";
import LocalKeys from "./LocalKeys";

const combinedReducers = combineReducers({
    user: userReducer,
    posts: postsReducer
});

const loadState = () => {
    try {
        const serializedState = localStorage.getItem(LocalKeys.REDUX_STATE);
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
        console.log("Error reading local storage", err);
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(LocalKeys.REDUX_STATE, serializedState);
    } catch(err) {
        console.log("Error writing to local storage", err)
    }
};

const store = createStore(combinedReducers, loadState(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    saveState({
        posts: store.getState().posts
    });
});

export default store;
