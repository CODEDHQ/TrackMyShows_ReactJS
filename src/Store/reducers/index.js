import { combineReducers } from "redux";

//Reducers
import errorReducer from "./errors";
import authReducer from "./authentication";

export default combineReducers({
  errors: errorReducer,
  auth: authReducer
});
