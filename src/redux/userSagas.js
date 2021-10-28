import {
  call,
  put,
  take,
  takeEvery,
  fork,
  takeLatest,
  all,
} from "redux-saga/effects";
import {
  loadUsersSuccess,
  loadUsersFailed,
  createUserSuccess,
  createUserFailed,
  deleteUserSuccess,
  deleteUserFailed,
  editUserSuccess,
  editUserFailed,
} from "./actions";
import { loadUsersApi, createUserApi, deleteUserApi, editUserApi } from "./api";
import * as types from "./actionTypes";

//workers

export function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);

    yield put(loadUsersSuccess(response.data));
  } catch (error) {
    yield put(loadUsersFailed(error.response.data));
  }
}
export function* onCreateUserStartAsync({ payload }) {
  try {
    const response = yield call(createUserApi, payload);
    yield put(createUserSuccess(response.data));
  } catch (error) {
    yield put(createUserFailed(error.response.data));
  }
}
export function* onDeleteUserStartAsync(userId) {
  try {
    const response = yield call(deleteUserApi, userId);
    if (response.status === 200) {
      yield put(deleteUserSuccess(userId));
    }
  } catch (error) {
    yield put(deleteUserFailed(error.response.data));
  }
}

export function* onUpdateUserStartAsync({ payload }) {
  try {
    const { id, formValue } = payload;

    const response = yield call(editUserApi, id, formValue);
    if (response.status === 200) {
      yield put(editUserSuccess());
    }
  } catch (error) {
    yield put(editUserFailed(error.response.data));
  }
}

//watchers
export function* onLoadUsers() {
  yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}
export function* onCreateUser() {
  yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}
export function* onDeleteUser() {
  while (true) {
    const { payload: userId } = yield take(types.DELETE_USER_START);
    yield call(onDeleteUserStartAsync, userId);
  }
}
export function* onUpdateUser() {
  yield takeLatest(types.EDIT_USER_START, onUpdateUserStartAsync);
}

const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUser),
  fork(onDeleteUser),
  fork(onUpdateUser),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
