import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';


// Connect Redux Devtools (serialize option for Symbol support)
const composeEnhancers = composeWithDevTools({ serialize: true });

const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)));
export type DispatchType = typeof store.dispatch

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();