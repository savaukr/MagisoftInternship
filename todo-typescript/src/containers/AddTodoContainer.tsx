import React from 'react';
import { connect } from 'react-redux';

import AddTodo from '../components/AddTodo/AddTodo.js';
import { addTodoDispatchAction } from '../actions/actions.js';
import { typeTodo } from '../types/interfaces.js';


const AddTodoContainer = (props:any) => {
	return <AddTodo {...props} />
}

const mapStateToProps = (state:any) => {
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