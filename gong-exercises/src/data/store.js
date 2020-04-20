import { createStore, combineReducers } from 'redux';
import { userReducer } from "../reducers/UserReducer";

const combinedReducers = combineReducers({
    user: userReducer
});

export const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
