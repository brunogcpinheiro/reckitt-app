import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
  LOADING_USER,
} from "../types";

const INITIAL_STATE = {
  authenticated: false,
  loading: false,
  credentials: {},
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return { ...state, authenticated: true };
    case SET_UNAUTHENTICATED:
      return INITIAL_STATE;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        credentials: action.payload,
      };
    case LOADING_USER:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default authReducer;
