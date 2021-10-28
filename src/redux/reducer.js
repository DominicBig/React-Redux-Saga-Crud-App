import * as types from "./actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USERS_START:
    case types.CREATE_USER_START:
    case types.DELETE_USER_START:
    case types.EDIT_USER_START:
      return { ...state, loading: true, error: null };
    case types.LOAD_USERS_SUCCESS:
      return { ...state, users: action.payload, loading: false };
    case types.CREATE_USER_SUCCESS:
    case types.EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    case types.LOAD_USERS_FAILED:
    case types.CREATE_USER_FAILED:
    case types.DELETE_USER_FAILED:
    case types.EDIT_USER_FAILED:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default userReducer;
