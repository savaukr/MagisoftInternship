
import {todoSetDate} from './scripts/core/todoSetDate/todoSetDate.js';
import addTodo from './scripts/features/addTodo/addTodo.js';
import deleteTodo from './scripts/features/deleteTodo/deleteTodo.js';
import showAllTodo from './scripts/core/showAllTodo/showAllTodo.js';
import './styles/style.scss';

todoSetDate(new Date());


let addElem = document.querySelector('.todo__buttons__add');
addElem.addEventListener('click', addTodo('swim 30km', '2020-03-17'));
 showAllTodo();
todoSetDate(new Date());




	
