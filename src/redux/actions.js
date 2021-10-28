import * as types from "./actionTypes";

export const loadUsersStart = () => ({
  type: types.LOAD_USERS_START,
});
export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});
export const loadUsersFailed = (error) => ({
  type: types.LOAD_USERS_FAILED,
  payload: error,
});

export const createUserStart = (user) => ({
  type: types.CREATE_USER_START,
  payload: user,
});
export const createUserSuccess = () => ({
  type: types.CREATE_USER_SUCCESS,
});
export const createUserFailed = (error) => ({
  type: types.CREATE_USER_FAILED,
  payload: error,
});

export const deleteUserStart = (userId) => ({
  type: types.DELETE_USER_START,
  payload: userId,
});
export const deleteUserSuccess = (userId) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: userId,
});
export const deleteUserFailed = (error) => ({
  type: types.DELETE_USER_FAILED,
  payload: error,
});

export const editUserStart = (userInfo) => ({
  type: types.EDIT_USER_START,
  payload: userInfo,
});
export const editUserSuccess = () => ({
  type: types.EDIT_USER_SUCCESS,
});
export const editUserFailed = (error) => ({
  type: types.EDIT_USER_FAILED,
  payload: error,
});
