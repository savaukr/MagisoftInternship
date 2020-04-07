import React from 'react';
import { connect } from 'react-redux';

import AddTodo from '../components/AddTodo/AddTodo';
import { addTodoDispatchAction } from '../actions/actions';
import { typeTodo } from '../types/interfaces';
import { StateReducerType } from '../reducers/index'
//import { DispatchType } from '..';


interface IPropsDispatch {
	createTodo: Function
}
export type PropsType = IPropsDispatch

const AddTodoContainer: React.SFC<PropsType> = (props: PropsType) => {
	return <AddTodo {...props} />
}

const mapStateToProps = (state: StateReducerType) => {
    return {
        //todos: state.infoTodos.todos
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        createTodo: (todo: typeTodo) => {
          dispatch(addTodoDispatchAction(todo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoContainer);