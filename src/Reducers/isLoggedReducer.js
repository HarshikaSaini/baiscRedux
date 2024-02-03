// reducer to check the login info
export const isLoggedReducer = (state=false, action)=>{
    switch(action.type){
     case "Login" : return !state;
     default : return state;
    };
};