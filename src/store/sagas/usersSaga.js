import { push } from 'connected-react-router';
import { NotificationManager } from 'react-notifications';
import { put } from 'redux-saga/effects';

import axios from '../../axios-shop';
import {
  createUserFailure,
  createUserSuccess,
  loginUserFailure,
  loginUserSuccess,
  logoutUserSuccess,
} from '../actions/usersActions';

export function* registerUserSaga({userData}) {
    try {
        yield axios.post("/users", userData);
        yield put(createUserSuccess());
        yield put(push("/"));
        yield NotificationManager.success("Register successful", "Success message", 5000);
    } catch(err) {
        if (err.response && err.response.data) {
            yield put(createUserFailure(err.response.data));
        } else {
            yield put(createUserFailure(err));
        }
    }
}

export function* loginUserSaga({userData}) {
    try {
        const response = yield axios.post("/users/sessions", userData);
        yield put(loginUserSuccess(response.data));
        yield put(push("/"))
        yield NotificationManager.success("Login success");
    } catch(err) {
        yield put(loginUserFailure(err.response.data));
    }
}

export function* logoutUserSaga() {
    try {
        yield axios.delete("/users/sessions");
        yield put(logoutUserSuccess());
        yield put(push("/"));
        yield NotificationManager.success("Logout success");
    } catch(err) {
        yield NotificationManager.error("Logout failure");
    }
}
