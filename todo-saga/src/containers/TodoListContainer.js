import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList/TodoList.js';
import {readJson, changeTodoDispatchAction, removeTodoDispatchAction} from '../actions/actions.js';

const TodoListContainer = props => {
	return <TodoList {...props} />
}

const mapStateToProps = (state) => {
    return {
        todos: state.infoTodos.todosFilter,
        isLoading: state.infoTodos.isLoading,
        isError: state.infoTodos.isError,
        objFilters: state.infoTodos.objFilters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTodo: (todo) => {
          dispatch(changeTodoDispatchAction(todo, true ))
        },
        removeTodo: (id) => {
          dispatch(removeTodoDispatchAction(id))
        },
        readJson: () => dispatch(readJson())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);