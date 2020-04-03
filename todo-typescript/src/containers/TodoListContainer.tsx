import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList/TodoList.js';
import { changeTodoDispatchAction, removeTodoDispatchAction} from '../actions/actions.js';
import { typeTodo } from '../types/interfaces.js';

const TodoListContainer = (props:any) => {
	return <TodoList {...props} />
}

const mapStateToProps = (state:any) => {
    return {
        todos: state.infoTodos.todosFilter,
        isLoading: state.infoTodos.isLoading,
        isError: state.infoTodos.isError,
        objFilters: state.infoTodos.objFilters
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        changeTodo: (todo:typeTodo) => {
          dispatch(changeTodoDispatchAction(todo, true ))
        },
        removeTodo: (id:string) => {
          dispatch(removeTodoDispatchAction(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);