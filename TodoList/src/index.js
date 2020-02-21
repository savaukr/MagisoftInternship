
import todoSetDate from './scripts/core/todoSetDate/todoSetDate.js';
import addListeners from './scripts/core/addListeners/addListeners';
import showAllTodo from './scripts/core/showAllTodo/showAllTodo.js';
import './styles/style.scss';


let todoArr = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : new Array();
//let data = JSON.parse(localStorage.getItem('todo'));
todoSetDate(new Date());
showAllTodo(todoArr);
addListeners(todoArr);