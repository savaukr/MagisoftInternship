import React from 'react';
import PropTypes from 'prop-types';
import Todo  from './Todo/Todo';
import './todoList.css';

const TodoList = ({todos, objFilters, isLoding, isError, removeTodo, changeIsDone, readJson}) => {
    let isFilter = false;
    for (let f in objFilters) {
        if (objFilters[f]) {
            isFilter = true;
            break;
        }
    }
    if (!todos.length) return (
        <>
            <p>Список завдань пустий</p>
            {(!isFilter && !todos.length) ?  <button onClick={readJson}>Load data</button>  : '' }
        </>
    )
    else 
        return ( 
            <>
                <div className="todo__header">
    				<p className="todo__item__title">Description</p>
                    <p className="todo__item__dueDate">Due Date</p>
    				<p className="todo__item__icon">Done</p>
    			</div>
               { isLoding ? ( <p>Loading...</p> ) : isError ? 
                    ( <p>Помилка завантаження даних, спробуйте ще.</p> ) : 
                        (   <ul className="todos-ul">
                                {todos.map((todo, index)=>(
                                    <Todo 
                                        key={todo.id}
                                        removeTodo = {removeTodo}
                                        changeIsDone={changeIsDone}
                                        todos = {todos}
                                        todo={todo}
                                    />
                                ))}
                            </ul>
                        )
                } 
            </>
        )
}

TodoList.propTypes =  {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeIsDone: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
}

export default TodoList;