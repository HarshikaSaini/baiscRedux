import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
import { rootReducer } from './redux';
import { applyMiddleware } from 'redux';
import {thunk} from "redux-thunk"






const store = createStore(rootReducer,applyMiddleware(thunk));
store.subscribe(()=>console.log(store.getState()));
// store.dispatch(fetchUsers())



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

);



