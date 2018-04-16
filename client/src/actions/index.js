import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './types';

export const fetchUser = () => ({
  type: FETCH_USER
});

export function* fetchUserRequest(action) {
  try {
    const response = yield call(fetchUserData);
    yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: FETCH_USER_FAILURE });
    console.log(e, 'e');
  }
}

// const fetchUserData = () => {
//   return axios.get('/api/current_user').then(response => {
//     return response;
//   });
// };

const fetchUserData = async () => {
  const response = await axios.get('/api/current_user');
  return response;
};
