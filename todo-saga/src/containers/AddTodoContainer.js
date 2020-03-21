import React from 'react';
import { connect } from 'react-redux';

import AddTodo from '../components/AddTodo/AddTodo.js';
import { addTodoAction } from '../actions/actions.js';

const AddTodoContainer = props => {
	return <AddTodo {...props} />
}

const mapStateToProps = (state) => {
    return {
        todos: state.infoTodos.todosFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTodo: (todos, title, dueDate) => {
          dispatch(addTodoAction(todos, title, dueDate))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoContainer);