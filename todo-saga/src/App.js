import React  from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoListContainer from './containers/TodoListContainer.js';
import AddTodoContainer from './containers/AddTodoContainer.js';
import FiltersContainer from './containers/FiltersContainer.js';

const  App = (props) => {
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
