import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';


// Connect Redux Devtools (serialize option for Symbol support)
const composeEnhancers = composeWithDevTools({ serialize: true });

const store = createStore( rootReducer, composeEnhancers(applyMiddleware( thunk)));



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
  
