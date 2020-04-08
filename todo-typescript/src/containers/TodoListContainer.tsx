import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList/TodoList';
import { changeTodoDispatchAction, removeTodoDispatchAction} from '../actions/actions';
import { typeTodo, typeTodos, typeFilters } from '../types/interfaces';
import { StateReducerType } from '../reducers/index'

interface IStateProps {
  todos: typeTodos
  isLoading: boolean
  isError: boolean
  objFilters:  typeFilters
}
interface IDispatchProps {
  changeTodo: Function
  removeTodo: Function
}

export type TodoListPropsType  = IStateProps & IDispatchProps

const TodoListContainer: React.SFC<TodoListPropsType> = (props: TodoListPropsType) => {
	return <TodoList {...props} />
}

const mapStateToProps = (state: StateReducerType) => {
    return {
        todos: state.infoTodos.todosFilter,
        isLoading: state.infoTodos.isLoading,
        isError: state.infoTodos.isError,
        objFilters: state.infoTodos.objFilters
    }
}

const mapDispatchToProps = (dispatch: any) => {
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

/*
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof mapDispatchToProps
type Props = StateProps & DispatchProps
const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

const TodoListContainer: React.SFC<PropsFromRedux> = (props: PropsFromRedux) => {
	return <TodoList {...props} />
}
export default connector(TodoListContainer);
*/