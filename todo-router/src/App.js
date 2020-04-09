import React, { useEffect }  from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Header from './components/Header/Header';
import TodoListContainer from './containers/TodoListContainer.js';
import AddTodoContainer from './containers/AddTodoContainer.js';
import FiltersContainer from './containers/FiltersContainer.js';
import Auth from './components/Auth/Auth';
import LogIn from './components/LogIn/LogIn'
import { readJson } from './actions/actions.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const  App = (props) => {
  let IsLogIn = false;
  const dispatch = useDispatch();
  useEffect(() => dispatch( readJson() ));
  return (
    <Router>
        <div className="todos-wrapper">
          <Header/>
          <Route path='/' exact
                render = { ()=> {
                  if (!IsLogIn) return <LogIn/>;
                  return (
                      <>
                        <AddTodoContainer />
                        <FiltersContainer /> 
                        <TodoListContainer />
                      </>
                  )
                }}
          />
          <Route path='/auth' component={ Auth } />
          <Route path='/login' render= {()=><p>Login component</p>}
          />
        </div>
    </Router>
  );
}


export default App;
