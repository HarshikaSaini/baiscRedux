import { BUY_Icecream } from "./action";

const initState={
    numOfIcecreams:20
};

export  const iceCreamReducer=(state=initState,action)=>{
    switch(action.type){
        case BUY_Icecream: return{
            ...state,
            numOfIcecreams : state.numOfIcecreams-1
        }
        default : return state
    }
}