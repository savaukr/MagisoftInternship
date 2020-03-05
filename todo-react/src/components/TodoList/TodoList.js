import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo/Todo';
//props: {todos, onTodoClick}
const TodoList = (props) => {
    if (!props.todos.length) return <p>Список завдань пустий</p>
    else 
        return <ul>
            {props.todos.map((todo, index)=>(
                <Todo 
                    key={todo.id}
                    /*onClick={() => props.toggleTodo(todo.id)}*/
                    title={todo.title}
                    dueDate={todo.dueDate}
                    isDone={todo.isDone}
                />
            ))}
        </ul>
}
/*
TodoList.PropTypes =  {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            createDate:PropTypes.string,
            dueDate: PropTypes.string.isRequired,
            isDone: PropTypes.bool.isRequired 
        }).isRequired      
    ).isRequired,
   // toggleTodo: PropTypes.func.isRequired
}
*/
export default TodoList;