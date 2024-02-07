import axios from 'axios';
export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILURE = "USER_FAILURE";



export const requestUser=()=>{
    return{
        type:USER_REQUEST
    }
}

export const succesUser=(user)=>{
    return{
        type:USER_SUCCESS,
        payload:user
    }
}

export const failureUser =(error)=>{
    return {
        type:USER_FAILURE,
        payload:error
    }
}

export const fetchUsers= ()=>{
    return async function(dispatch){
      dispatch(requestUser());
      try{
       await axios.get("https://jsonplaceholder.typicode.com/users")
         .then(response=> {
          const user = response.data.map(user=> user);
          dispatch(succesUser(user))
         })
      }
      catch(err){
       dispatch(failureUser(err.message))
      } 
    }
  }