import React  from 'react';
import './App.css';
import Header from '../components/Header/Header';
import TodoList from '../components/TodoList/TodoList';
import AddTodo from '../components/AddTodo/AddTodo';
import Filters from '../components/Filters/Filters';

import { connect } from 'react-redux';
import {changeIsDoneAction} from '../actions/actions.js';
import {removeTodoAction} from '../actions/actions.js';
import {addTodoAction} from '../actions/actions.js';
import {filterTodosAction} from '../actions/actions.js';


function App(props) {
  

  return (
        <div className="todos-wrapper">
          <Header/>
          <AddTodo
            todos = {props.todosRedux}
            createTodo={props.addTodoFunction}
          />
          <Filters
            todos = {props.todosRedux}
            objFilters={props.objFiltersRedux}
            filterTodos = {props.filterTodosFunction} 
          />
          <TodoList 
            todos = {props.todosFilterRedux}
            changeIsDone={props.setIsDoneFunction}
            removeTodo = {props.removeTodoFunction}
           />
        </div>
  );
}
function mapStateToProps(state) {
  return {
    todosRedux: state.infoTodos.todos,
    todosFilterRedux: state.infoTodos.todosFilter,
    objFiltersRedux :state.infoTodos.objFilters
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setIsDoneFunction: (todos, id) => {
      dispatch(changeIsDoneAction(todos,id))
    },
    removeTodoFunction: (todos, id) => {
      dispatch(removeTodoAction(todos, id))
    },
    addTodoFunction: (todos, title, dueDate) => {
      dispatch(addTodoAction(todos, title,dueDate))
    },
    filterTodosFunction: (todos, objFilters, nameFilter) => {
      dispatch(filterTodosAction(todos, objFilters, nameFilter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
