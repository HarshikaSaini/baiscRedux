import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {legacy_createStore as createStore} from 'redux'
import { rootReducer } from './Reducers';
import { Provider } from 'react-redux';
// creating store
const store = createStore(rootReducer);
// method to see the current data of the store 
store.subscribe(()=>console.log(store.getState()))


//action
// const Increment=()=>{
//   return{
//     type :"Increment"
//   };
// };

// const Decrement=()=>{
//   return {
//     type:"Decrement"
//   };
// };

//reducer
// const counterReducer =(state = 0 , action)=>{
//    switch(action.type) {
//     case "Increment": return state +1
//     case "Decrement": return state -1
//     default: return state;
//    }
// }


// let store = createStore(CounterReducer)



// store.subscribe(()=>console.log(store.getState()));
// store.dispatch(Increment());
// store.dispatch(Increment());
// store.dispatch(Increment());
// store.dispatch(Decrement());







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App  />
  </Provider>
);



