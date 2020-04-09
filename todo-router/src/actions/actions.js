import {  
        READ_JSON_REQUEST, READ_JSON_FAILURE, READ_JSON_SUCCESS,
        REMOVE_TODO_REQUEST, REMOVE_TODO_FAILURE, REMOVE_TODO_SUCCESS,
        CHANGE_TODO_REQUEST, CHANGE_TODO_FAILURE, CHANGE_TODO_SUCCESS,
        ADD_TODO_REQUEST, ADD_TODO_FAILURE, ADD_TODO_SUCCESS,
        FILTER_TODO_REQUEST, FILTER_TODO_FAILURE, FILTER_TODO_SUCCESS } from '../types/actionsTypes.js';

import axios from  'axios';
//import todoApi from '../todoApi/todoApi.js';

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
//filter Todos
export const filterTodoActionRequest = () => ({ type: FILTER_TODO_REQUEST })
export const filterTodoActionFailure = () => ({ type: FILTER_TODO_FAILURE })
export const filterTodoActionSuccess = (nameFilter) => ({
        type: FILTER_TODO_SUCCESS,
        payload: nameFilter
});

export const filterTodoDispatchAction = (nameFilter) =>dispatch => {
    try {
        dispatch( filterTodoActionRequest());
        dispatch( filterTodoActionSuccess(nameFilter) );
    }
    catch {
        dispatch( filterTodoActionFailure() );
    }
}