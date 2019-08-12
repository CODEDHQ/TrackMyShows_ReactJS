import { combineReducers } from "redux";

//Reducers
import showsReducer from "./shows";
import errorReducer from "./errors";
import authReducer from "./authentication";

export default combineReducers({
  shows: showsReducer,
  errors: errorReducer,
  auth: authReducer
});
