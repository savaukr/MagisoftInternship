
import todoSetDate from './scripts/core/todoSetDate/todoSetDate.js';
import addListeners from './scripts/core/addListeners/addListeners';
import showAllTodo from './scripts/core/showAllTodo/showAllTodo.js';
import todoApi from './scripts/core/todoApi/todoApi.js';
import './styles/style.scss';

// init application
todoSetDate(new Date());
let todoArr=[];
todoApi.getTodos().then((result)=>{
	todoArr = [].concat(result);
	console.log(todoArr);
	addListeners(todoArr);
	showAllTodo(todoArr)
	}
);


// TodoList
// constructor(){
// //read from local store
// //init event listeners

// }
// this.todos = [];

// this.renderList = () => {

//  this.todos.map => // html   
// }
