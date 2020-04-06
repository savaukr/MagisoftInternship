import React from 'react';
//import PropTypes from 'prop-types';
import Todo  from './Todo/Todo';
import './todoList.css';
import { typeTodos} from '../../types/interfaces'

interface IProps {
    isLoading: boolean
    isError: boolean
    removeTodo: Function
    changeTodo: Function
    todos: typeTodos
}

const TodoList: React.SFC<IProps> =  ({todos, isLoading, isError, removeTodo, changeTodo }:IProps) => {
    if ( !todos.length && !isLoading && !isError) return (
            <p>Список завдань пустий</p>
    )
    else 
        return ( 
            <>
                <div className="todo__header">
    				<p className="todo__item__title">Description</p>
                    <p className="todo__item__dueDate">Due Date</p>
    				<p className="todo__item__icon">Done</p>
    			</div>
               { isLoading ? ( <p>Loading...</p> ) : isError ? 
                    ( <p>Виникла помилка, спробуйте ще.</p> ) : 
                        (   <ul className="todos-ul">
                                {todos.map((todo, index)=>(
                                    <Todo 
                                        key={todo.id}
                                        removeTodo = {removeTodo}
                                        changeTodo={changeTodo}
                                        todo={todo}
                                    />
                                ))}
                            </ul>
                        )
                } 
            </>
        )
}

// TodoList.propTypes =  {
//     todos: PropTypes.arrayOf(PropTypes.object).isRequired,
//     changeIsDone: PropTypes.func.isRequired,
//     removeTodo: PropTypes.func.isRequired
// }

export default TodoList;