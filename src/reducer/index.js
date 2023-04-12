import todoReducers from "./Reducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducers,
});
export default rootReducer;
