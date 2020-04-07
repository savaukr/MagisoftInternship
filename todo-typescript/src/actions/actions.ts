import {  
        READ_JSON_REQUEST, READ_JSON_FAILURE, READ_JSON_SUCCESS,
        REMOVE_TODO_REQUEST, REMOVE_TODO_FAILURE, REMOVE_TODO_SUCCESS,
        CHANGE_TODO_REQUEST, CHANGE_TODO_FAILURE, CHANGE_TODO_SUCCESS,
        ADD_TODO_REQUEST, ADD_TODO_FAILURE, ADD_TODO_SUCCESS,
        FILTER_TODO_REQUEST, FILTER_TODO_FAILURE, FILTER_TODO_SUCCESS } from '../types/actionsTypes';

import axios from  'axios';
import { IState, typeTodo, IAction } from '../types/interfaces';
//import { DispatchType } from '../index';


//read from <file>.json
interface IReadJsonActionSuccess {
    type: typeof READ_JSON_SUCCESS
    payload: IState
}
export const readJsonActionRequest = ():IAction => ({type: READ_JSON_REQUEST});
export const readJsonActionFailure = ():IAction => ({ type: READ_JSON_FAILURE})
export const readJsonActionSuccess = (data: IState):IReadJsonActionSuccess => ({
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
interface IRemoveTodoActionSuccess {
    type: typeof REMOVE_TODO_SUCCESS
    payload: string
}
export const removeTodoActionRequest = ():IAction => ({ type: REMOVE_TODO_REQUEST })
export const removeTodoActionFailure = ():IAction=> ({ type: REMOVE_TODO_FAILURE })
export const removeTodoActionSuccess = (id: string):IRemoveTodoActionSuccess => ({
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
interface IChangeTodoActionSuccess {
    type: typeof CHANGE_TODO_SUCCESS
    payload: typeTodo
}
export const changeTodoActionRequest = ():IAction => ({ type: CHANGE_TODO_REQUEST })
export const changeTodoActionFailure = ():IAction => ({ type: CHANGE_TODO_FAILURE })
export const changeTodoActionSuccess = (todo:typeTodo):IChangeTodoActionSuccess => ({
        type: CHANGE_TODO_SUCCESS,
        payload: todo
});
const helpChangeTodo = (todo: typeTodo, isChangeDone: boolean, changedDueDate: any = undefined ) => {
    let { ...copyTodo} = todo;
    if (changedDueDate) copyTodo.dueDate = changedDueDate;
    if ( isChangeDone ) copyTodo.isDone = !copyTodo.isDone;
    return copyTodo;
}
export const changeTodoDispatchAction = (todo: typeTodo, isChangeDone=false, changedDueDate = undefined) =>( dispatch: any) => {
    dispatch(changeTodoActionRequest());
    axios.put('/api/todos', helpChangeTodo(todo, isChangeDone))
        .then(response => dispatch( changeTodoActionSuccess(response.data) ))
        .catch(() => dispatch( changeTodoActionFailure() ))
}

//add Todo
interface IAddTodoActionSuccess {
    type: typeof ADD_TODO_SUCCESS
    payload: typeTodo
}
export const addTodoActionRequest = ():IAction => ({ type: ADD_TODO_REQUEST })
export const addTodoActionFailure = ():IAction => ({ type: ADD_TODO_FAILURE })
export const addTodoActionSuccess = (todo: typeTodo):IAddTodoActionSuccess => ({
        type: ADD_TODO_SUCCESS,
        payload: todo
});

export const addTodoDispatchAction = (todo: typeTodo) => (dispatch: any) => {
    dispatch(addTodoActionRequest());
    axios.post('/api/todos', todo )
        .then( response => dispatch( addTodoActionSuccess(response.data) ))
        .catch( () => dispatch( addTodoActionFailure() ))
}
//filter Todos
interface IFilterTodoActionSuccess {
    type: typeof FILTER_TODO_SUCCESS
    payload: string
}
export const filterTodoActionRequest = ():IAction => ({ type: FILTER_TODO_REQUEST })
export const filterTodoActionFailure = ():IAction => ({ type: FILTER_TODO_FAILURE })
export const filterTodoActionSuccess = (nameFilter: string):IFilterTodoActionSuccess => ({
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