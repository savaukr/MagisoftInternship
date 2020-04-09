import React, { useEffect }  from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Header from './components/Header/Header';
import TodoListContainer from './containers/TodoListContainer.js';
import AddTodoContainer from './containers/AddTodoContainer.js';
import FiltersContainer from './containers/FiltersContainer.js';
import { readJson } from './actions/actions.js';

const  App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch( readJson() ));
  return (
        <div className="todos-wrapper">
          <Header/>
          <AddTodoContainer />
          <FiltersContainer/> 
          <TodoListContainer />
        </div>
  );
}


export default App;
