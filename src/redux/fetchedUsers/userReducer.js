import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from "./action";

const initalState ={
    loading :false,
    user:[],
    error:""
}

export const userReducer = (state=initalState,action)=>{
    switch(action.type){
     case USER_REQUEST: return{
        ...state,
        loading :true
      
     }
     case USER_SUCCESS: return{
         loading: false,
         user:action.payload,
         error:""
     }
     case USER_FAILURE: return {
        loading:false,
        user:[],
        error:action.payload
     }
     default: return state;
    }
}
