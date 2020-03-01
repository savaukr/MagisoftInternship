
import todoSetDate from './scripts/core/todoSetDate/todoSetDate.js';
import addListeners from './scripts/core/addListeners/addListeners';
import showAllTodo from './scripts/core/showAllTodo/showAllTodo.js';
import './styles/style.scss';

// init application
let todoArr = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : new Array();
addListeners(todoArr);
// ----

localStorage.setItem('todo', JSON.stringify(todoArr));
//let data = JSON.parse(localStorage.getItem('todo'));
todoSetDate(new Date());
showAllTodo(todoArr);

// TodoList
// constructor(){
// //read from local store
// //init event listeners

// }
// this.todos = [];

// this.renderList = () => {

//  this.todos.map => // html   
// }
