import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList/TodoList.js';
import {changeIsDoneAction, removeTodoAction, readJson} from '../actions/actions.js';

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
        changeIsDone: (todos, id) => {
          dispatch(changeIsDoneAction(todos,id))
        },
        removeTodo: (todos, id) => {
          dispatch(removeTodoAction(todos, id))
        },
        readJson: () => dispatch(readJson())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);