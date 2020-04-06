import React , { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Header from './components/Header/Header'
import FiltersContainer from './containers/FiltersContainer';
import AddTodoContainer from './containers/AddTodoContainer';
import TodoListContainer from './containers/TodoListContainer';
import { readJson } from './actions/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(():any => dispatch( readJson() ));
  return (
    <div className="todos-wrapper">
      <Header />
      <AddTodoContainer />
      <FiltersContainer/>
      <TodoListContainer />
    </div>
  );
}

export default App;
