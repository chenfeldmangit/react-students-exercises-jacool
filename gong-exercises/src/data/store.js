import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from "../sagas/RootSaga";
import LocalKeys from "./LocalKeys";
import { userReducer } from "../reducers/UserReducer";
import {postsReducer} from "../reducers/PostsReducer";
import {mentionsReducer} from "../reducers/MentionsReducer";

const combinedReducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
    mentions: mentionsReducer
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

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducers, loadState(), composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
    saveState({
        posts: store.getState().posts,
        mentions: store.getState().mentions
    });
});

export default store;
