import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter  as Router } from 'react-router-dom'

import ErrorBoundry from './components/error-boundry'
import BookstoreService from './services/bookstore-service'
import { BookstoreServiceProvider } from './components/bookstore-service-context'
import store from './store'

import App from './components/app';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiceProvider value = {bookstoreService}>
          <Router>
            <App />
          </Router>
        </BookstoreServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


