import { takeEvery } from 'redux-saga/effects';

import {
  CREATE_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from '../actionTypes';
import {
  loginUserSaga,
  logoutUserSaga,
  registerUserSaga,
} from './usersSaga.js';

export function* rootSaga() {
    yield takeEvery(CREATE_USER, registerUserSaga);
    yield takeEvery(LOGIN_USER, loginUserSaga);
    yield takeEvery(LOGOUT_USER, logoutUserSaga);
}
