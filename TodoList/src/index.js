
import todoSetDate from './scripts/core/todoSetDate/todoSetDate.js';
import addTodo from './scripts/features/addTodo/addTodo.js';
import showAllTodo from './scripts/core/showAllTodo/showAllTodo.js';
import showTodo from './scripts/core/showTodo/showTodo.js';
import './styles/style.scss';

todoSetDate(new Date());
let todoArr = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : new Array();
let data = JSON.parse(localStorage.getItem('todo'));
let addElem = document.querySelector('.todo__buttons__add');
addElem.addEventListener('click', (e)=> {
    todoArr = addTodo(todoArr, 'go 30km', '2020-03-17');
    localStorage.setItem('todo', JSON.stringify(todoArr));
    showTodo(todoArr[todoArr.length-1], todoArr, document.querySelector('.todo__list'));
});
todoArr = showAllTodo(todoArr);
localStorage.setItem('todo', JSON.stringify(todoArr));





	
