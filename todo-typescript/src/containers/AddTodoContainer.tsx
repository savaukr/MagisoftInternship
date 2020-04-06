import React from 'react';
import { connect } from 'react-redux';

import AddTodo from '../components/AddTodo/AddTodo';
import { addTodoDispatchAction } from '../actions/actions';
import { typeTodo, IState } from '../types/interfaces';

interface IProps {
	createTodo: any
}


const AddTodoContainer = (props: IProps) => {
	return <AddTodo {...props} />
}

const mapStateToProps = (state: IState) => {
    return {
        //todos: state.infoTodos.todos
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        createTodo: (todo:typeTodo) => {
          dispatch(addTodoDispatchAction(todo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoContainer);