import { combineReducers } from "redux";
import { countReducer } from "./counterReducer";
import { isLoggedReducer } from "./isLoggedReducer"

export  const rootReducer = combineReducers({
      countReducer,
      isLoggedReducer
});