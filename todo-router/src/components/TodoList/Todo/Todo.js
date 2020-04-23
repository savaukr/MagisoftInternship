import React from 'react';
import './todo.css';
import PropTypes from 'prop-types';

const Todo = ({ todos, todo, changeTodo, removeTodo }) => {
    return (
        <li className="todo"
            style={{
                textDecoration: todo.isDone ? 'line-through' : 'none'
            }}>
            <span className="todo__title">{todo.title}</span>
            <span className="todo__dueDate">{todo.dueDate}</span> 
            <span className = "todo__func">
                <span className="todo__func_del" onClick={()=>removeTodo(todo.id)}></span>
                <span
                     className={todo.isDone === false ? "todo__func_isDone":"todo__func_isDone mark"}
                     onClick={()=>{changeTodo(todo)}}>
                </span>
            </span>

        </li>
    )
}

Todo.propTypes = {
   todo: PropTypes.object.isRequired,
   changeIsDone: PropTypes.func.isRequired
}

export default Todo;