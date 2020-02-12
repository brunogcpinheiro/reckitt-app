import { combineReducers } from "redux";
import authReducer from "./authReducer";
import storesReducer from "./storesReducer";

export default combineReducers({
  auth: authReducer,
  stores: storesReducer
});
