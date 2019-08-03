import { combineReducers } from "redux";

//Reducers
import showsReducer from "./shows";
import errorReducer from "./errors";

export default combineReducers({
  shows: showsReducer,
  errors: errorReducer
});
