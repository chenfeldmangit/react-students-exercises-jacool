import {all} from 'redux-saga/effects';
import { watchLike } from './TweetSagas';

export default function* rootSaga() {
    yield all([
        watchLike()
    ]);
}
