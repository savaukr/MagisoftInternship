import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList/TodoList';
import { changeTodoDispatchAction, removeTodoDispatchAction} from '../actions/actions';
import { typeTodo, typeTodos, IState } from '../types/interfaces';


interface IProps {
  todos: typeTodos
  isLoading: boolean
  isError: boolean
  changeTodo: any
  removeTodo: any
}

const TodoListContainer = (props:IProps) => {
	return <TodoList {...props} />
}

const mapStateToProps = (state: {infoTodos: IState}) => {
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