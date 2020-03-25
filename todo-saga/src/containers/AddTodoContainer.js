import React from 'react';
import { connect } from 'react-redux';

import AddTodo from '../components/AddTodo/AddTodo.js';
import { addTodoDispatchAction } from '../actions/actions.js';

const AddTodoContainer = props => {
	return <AddTodo {...props} />
}

const mapStateToProps = (state) => {
    return {
        //todos: state.infoTodos.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTodo: (todo) => {
          dispatch(addTodoDispatchAction(todo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoContainer);