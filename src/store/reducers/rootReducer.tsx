import { combineReducers } from "redux";

import quizReducer from "./quiz";
import createReducer from "./create";
import authReducer from "./auth";

// @ts-ignore
export default combineReducers({
  quiz: quizReducer,
  create: createReducer,
  auth: authReducer,
});
