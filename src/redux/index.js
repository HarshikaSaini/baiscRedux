import { combineReducers } from "redux";
import { cakeReducer } from "./cake/reducer";
import { iceCreamReducer } from "./iceCream/reducer";
export const rootReducer = combineReducers({
   cake:cakeReducer,
   ice:iceCreamReducer
})


