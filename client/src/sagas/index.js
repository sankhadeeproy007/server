import { takeLatest } from 'redux-saga/effects';

import * as TYPES from '../actions/types';
import { fetchUserRequest } from '../actions/index';

function* rootSaga() {
  yield takeLatest(TYPES.FETCH_USER, fetchUserRequest);
}

export default rootSaga;
