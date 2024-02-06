import { BUY_CAKE } from "./action";

const initalCakes = {
    numOfCakes:10
}

export const  cakeReducer =(state = initalCakes , action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        };
        default:  return state
    }
}