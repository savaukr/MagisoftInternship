import React from 'react';
import './todo.css';
import PropTypes from 'prop-types';
//props : {handleClick, title, isDone} 
const Todo = (props) => ( 
    <li className="todo"
        style={{
            textDecoration: props.isDone ? 'line-through' : 'none'
        }}>
        <span className="todo__title">{props.title}</span>
        <span className="todo__dueDate">{props.dueDate}</span> 
        <span className = "todo__func">
            <span className="todo__func_del" onClick = {props.handleClick}></span>
            <span className="todo__func_isDone" onClick = {props.handleClick}></span>
        </span>

    </li>
)
/*
Todo.PropTypes = {
    handleClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired
}
*/
export default Todo;