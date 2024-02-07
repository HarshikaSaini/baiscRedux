import { combineReducers } from "redux";
import  cakeReducer  from "./cake/reducer";
import { iceCreamReducer } from "./iceCream/reducer";
import { userReducer } from "./fetchedUsers/userReducer"
export const rootReducer = combineReducers({
   cakeReducer,
   iceCreamReducer,
   userReducer
})


