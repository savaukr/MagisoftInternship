import {  
        READ_JSON_REQUEST, READ_JSON_FAILURE, READ_JSON_SUCCESS,
        REMOVE_TODO_REQUEST, REMOVE_TODO_FAILURE, REMOVE_TODO_SUCCESS,
        CHANGE_TODO_REQUEST, CHANGE_TODO_FAILURE, CHANGE_TODO_SUCCESS,
        ADD_TODO_REQUEST, ADD_TODO_FAILURE, ADD_TODO_SUCCESS,
        FILTER_TODO_REQUEST, FILTER_TODO_FAILURE, FILTER_TODO_SUCCESS } from '../types/actionsTypes';

import axios from  'axios';


//read from <file>.json
export const readJsonActionRequest = () => ({type: READ_JSON_REQUEST});
export const readJsonActionFailure = () => ({ type: READ_JSON_FAILURE})
export const readJsonActionSuccess = (data: any) => ({
    type:READ_JSON_SUCCESS,
    payload: data
});
export const readJson = () => (dispatch: any) => {
    dispatch(readJsonActionRequest());
    axios.get('/api/todos')
        .then(response => dispatch(readJsonActionSuccess(response.data)))
        .catch(() => dispatch(readJsonActionFailure() ))
}
// remove Todo
export const removeTodoActionRequest = () => ({ type: REMOVE_TODO_REQUEST })
export const removeTodoActionFailure = () => ({ type: REMOVE_TODO_FAILURE })
export const removeTodoActionSuccess = (id: string) => ({
        type: REMOVE_TODO_SUCCESS,
        payload: id
});
export const removeTodoDispatchAction = (id: string) => (dispatch: any) => {
    dispatch(removeTodoActionRequest());
    axios.delete('/api/todos/'+id)
        .then(response => dispatch( removeTodoActionSuccess(response.data.id) ))
        .catch(() => dispatch( removeTodoActionFailure() ))
}
//change Todo
export const changeTodoActionRequest = () => ({ type: CHANGE_TODO_REQUEST })
export const changeTodoActionFailure = () => ({ type: CHANGE_TODO_FAILURE })
export const changeTodoActionSuccess = (todo:any) => ({
        type: CHANGE_TODO_SUCCESS,
        payload: todo
});
const helpChangeTodo = (todo: any, isChangeDone: any, changedDueDate: any = undefined ) => {
    let { ...copyTodo} = todo;
    if (changedDueDate) copyTodo.dueDate = changedDueDate;
    if ( isChangeDone ) copyTodo.isDone = !copyTodo.isDone;
    return copyTodo;
}
export const changeTodoDispatchAction = (todo: any, isChangeDone=false, changedDueDate = undefined) =>( dispatch: any) => {
    dispatch(changeTodoActionRequest());
    axios.put('/api/todos', helpChangeTodo(todo, isChangeDone))
        .then(response => dispatch( changeTodoActionSuccess(response.data) ))
        .catch(() => dispatch( changeTodoActionFailure() ))
}

//add Todo
export const addTodoActionRequest = () => ({ type: ADD_TODO_REQUEST })
export const addTodoActionFailure = () => ({ type: ADD_TODO_FAILURE })
export const addTodoActionSuccess = (todo: any) => ({
        type: ADD_TODO_SUCCESS,
        payload: todo
});

export const addTodoDispatchAction = (todo: any) => (dispatch: any) => {
    dispatch(addTodoActionRequest());
    axios.post('/api/todos', todo )
        .then( response => dispatch( addTodoActionSuccess(response.data) ))
        .catch( () => dispatch( addTodoActionFailure() ))
}
//filter Todos
export const filterTodoActionRequest = () => ({ type: FILTER_TODO_REQUEST })
export const filterTodoActionFailure = () => ({ type: FILTER_TODO_FAILURE })
export const filterTodoActionSuccess = (nameFilter: string) => ({
        type: FILTER_TODO_SUCCESS,
        payload: nameFilter
});

export const filterTodoDispatchAction = (nameFilter: string) => (dispatch: any) => {
    try {
        dispatch( filterTodoActionRequest());
        dispatch( filterTodoActionSuccess(nameFilter) );
    }
    catch {
        dispatch( filterTodoActionFailure() );
    }
}