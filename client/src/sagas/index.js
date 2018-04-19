import { takeLatest } from 'redux-saga/effects';

import * as TYPES from '../actions/types';

import { fetchUserRequest } from './authSaga';

function* rootSaga() {
  yield takeLatest(TYPES.FETCH_USER, fetchUserRequest);
}

export default rootSaga;
