import { CHANGE_ISDONE, REMOVE_TODO, ADD_TODO, FILTER_TODOS, READ_JSON_SUCCESS, READ_JSON_REQUEST, READ_JSON_FAILURE } from '../types/actionsTypes.js';
import axios from  'axios';
import todoApi from '../todoApi/todoApi.js';

export const readJsonActionRequest = () => ({type: READ_JSON_REQUEST});
export const readJsonActionFailure = () => ({ type: READ_JSON_FAILURE})
export const readJsonActionSuccess = (data) => ({
    type:READ_JSON_SUCCESS,
    payload: data
});


export const readJson = () => dispatch => {
    dispatch(readJsonActionRequest());
    axios.get('/api/todos')
        .then(response => dispatch(readJsonActionSuccess(response.data)))
        .catch(error => dispatch(readJsonActionFailure(error) ))
}

export function changeIsDoneAction(todos, id) {
	let [...copyTodos] = todos;
	for(let todo of copyTodos) {
		if (todo.id === id) {
			todo.isDone = !todo.isDone;
            todoApi.changeTodo(todo);
		}

	}
    return {
        type: CHANGE_ISDONE,
        payload: copyTodos
    }
}

export function removeTodoAction(todos, id) {
	let copyTodos = todos.filter(todo=>todo.id !== id);
    todoApi.deleteTodo(id);
    return {
        type: REMOVE_TODO,
        payload: copyTodos
    }
}
export function addTodoAction(todos, title, dueDate) {
	let [...copyTodos] = todos;
	let id = copyTodos.length ? +copyTodos[copyTodos.length-1].id+1 : 1;
    id = id.toString();
    copyTodos.push({id:id, title:title, createDate: new Date(), dueDate:dueDate, isDone:false});

    function removeActiveClass(classElements) {
        let elements = document.querySelectorAll(`.${classElements}`);
        for (let i=0; i<elements.length; i++) {
          elements[i].classList.remove('active');
        }
    }
    //Скид фільтрів після додавання нової справи
    removeActiveClass('filters_button');
    todoApi.saveTodoToFile({id:id, title:title, createDate: new Date(), dueDate:dueDate, isDone:false});
    let objFilters = { noneFinished:false, outDated:false, tomorrow:false };

    return {
        type: ADD_TODO,
        payload: {copyTodos, objFilters}
    }
}

export function filterTodosAction(todos, objFilters, nameFilter) {
    let [...copyTodos] = todos;
    const dayInMls = 24*3600*1000;
    let {...copyFilters} = objFilters; 
    copyFilters[nameFilter] = !copyFilters[nameFilter];
    if (copyFilters.noneFinished) copyTodos = copyTodos.filter( todo => todo.isDone === false );
    if (copyFilters.outDated) copyTodos = copyTodos.filter( todo=>
      ( new Date(todo.dueDate).getTime()+dayInMls ) < ( new Date().getTime() )          
    );
    if (copyFilters.tomorrow) copyTodos = copyTodos.filter( todo =>
      ( ( new Date(todo.dueDate).getTime() < new Date().getTime()+dayInMls ) && ( new Date(todo.dueDate).getTime() > new Date() ))
    )
    return {
        type: FILTER_TODOS,
        payload: {copyTodos, copyFilters}
    }
}