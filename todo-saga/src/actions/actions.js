import {  
        READ_JSON_REQUEST, READ_JSON_FAILURE, READ_JSON_SUCCESS,
        REMOVE_TODO_REQUEST, REMOVE_TODO_FAILURE, REMOVE_TODO_SUCCESS,
        CHANGE_TODO_REQUEST, CHANGE_TODO_FAILURE, CHANGE_TODO_SUCCESS,
        ADD_TODO_REQUEST, ADD_TODO_FAILURE, ADD_TODO_SUCCESS,
        FILTER_TODOS } from '../types/actionsTypes.js';

import axios from  'axios';
import todoApi from '../todoApi/todoApi.js';

//read from <file>.json
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
// remove Todo
export const removeTodoActionRequest = () => ({ type: REMOVE_TODO_REQUEST })
export const removeTodoActionFailure = () => ({ type: REMOVE_TODO_FAILURE })
export const removeTodoActionSuccess = (id) => ({
        type: REMOVE_TODO_SUCCESS,
        payload: id
});
export const removeTodoDispatchAction = (id) => dispatch => {
    dispatch(removeTodoActionRequest());
    axios.delete('/api/todos/'+id)
        .then(response => dispatch( removeTodoActionSuccess(response.data.id) ))
        .catch(error => dispatch( removeTodoActionFailure(error) ))
}
//change Todo
export const changeTodoActionRequest = () => ({ type: CHANGE_TODO_REQUEST })
export const changeTodoActionFailure = () => ({ type: CHANGE_TODO_FAILURE })
export const changeTodoActionSuccess = (todo) => ({
        type: CHANGE_TODO_SUCCESS,
        payload: todo
});
const helpChangeTodo = (todo, isChangeDone, changedDueDate ) => {
    let { ...copyTodo} = todo;
    if (changedDueDate) copyTodo.dueDate = changedDueDate;
    if ( isChangeDone ) copyTodo.isDone = !copyTodo.isDone;
    return copyTodo;
}
export const changeTodoDispatchAction = (todo, isChangeDone=false, changedDueDate = undefined) =>dispatch => {
    dispatch(changeTodoActionRequest());
    axios.put('/api/todos', helpChangeTodo(todo, isChangeDone))
        .then(response => dispatch( changeTodoActionSuccess(response.data) ))
        .catch(error => dispatch( changeTodoActionFailure(error) ))
}

//add Todo
export const addTodoActionRequest = () => ({ type: ADD_TODO_REQUEST })
export const addTodoActionFailure = () => ({ type: ADD_TODO_FAILURE })
export const addTodoActionSuccess = (todo) => ({
        type: ADD_TODO_SUCCESS,
        payload: todo
});

export const addTodoDispatchAction = (todo) =>dispatch => {
    dispatch(addTodoActionRequest());
    axios.post('/api/todos', todo )
        .then( response => dispatch( addTodoActionSuccess(response.data) ))
        .catch( error => dispatch( addTodoActionFailure(error) ))
}

/*
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
*/
/*
export function removeTodoAction(todos, id) {
	let copyTodos = todos.filter(todo=>todo.id !== id);
    todoApi.deleteTodo(id);
    return {
        type: REMOVE_TODO,
        payload: copyTodos
    }
}
*/
/*
export function addTodoAction(todos, title, dueDate) {
	let [...copyTodos] = todos;
	let id = copyTodos.length ? +copyTodos[copyTodos.length-1].id+1 : 1;
    id = id.toString();
    copyTodos.push({id:id, title:title, createDate: new Date(), dueDate:dueDate, isDone:false});
    todoApi.saveTodoToFile({id:id, title:title, createDate: new Date(), dueDate:dueDate, isDone:false});
    let objFilters = { noneFinished:false, outDated:false, tomorrow:false };

    return {
        type: ADD_TODO,
        payload: {copyTodos, objFilters}
    }
}
*/
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