import { combineReducers } from "redux";
import authReducer from "./authReducer";
import initialReducer from "./initialReducer";

export default combineReducers({
  auth: authReducer,
  initial: initialReducer,
});
