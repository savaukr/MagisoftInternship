import {  
        READ_JSON_REQUEST, READ_JSON_FAILURE, READ_JSON_SUCCESS,
        REMOVE_TODO_REQUEST, REMOVE_TODO_FAILURE, REMOVE_TODO_SUCCESS,
        CHANGE_TODO_REQUEST, CHANGE_TODO_FAILURE, CHANGE_TODO_SUCCESS,
        ADD_TODO_REQUEST, ADD_TODO_FAILURE, ADD_TODO_SUCCESS,
        FILTER_TODO_REQUEST, FILTER_TODO_FAILURE, FILTER_TODO_SUCCESS } from '../types/actionsTypes';

import axios from  'axios';
import { typeTodos, typeTodo } from '../types/interfaces'
import {
    TReadJsonActionRequest, TReadJsonActionFailure, TReadJsonActionSuccess, 
    TRemoveTodoActionRequest, TRemoveTodoActionFailure, TRemoveTodoActionSuccess,
    TAddTodoActionRequest, TAddTodoActionFailure, TAddTodoActionSuccess,
    TChangeTodoActionRequest, TChangeTodoActionFailure, TChangeTodoActionSuccess,
    TFilterTodoActionRequest, TFilterTodoActionFailure, TFilterTodoActionSuccess,
    TAction
} from '../types/actionsTypes'
import { Dispatch } from 'redux';
//import { DispatchType } from '../index';


//read from <file>.json
export const readJsonActionRequest = ():TReadJsonActionRequest => ({type: READ_JSON_REQUEST});
export const readJsonActionFailure = ():TReadJsonActionFailure => ({ type: READ_JSON_FAILURE})
export const readJsonActionSuccess = (data: typeTodos):TReadJsonActionSuccess => ({
    type:READ_JSON_SUCCESS,
    payload: data
});
export const readJson = () => (dispatch: Dispatch<TAction>) => {
    dispatch(readJsonActionRequest());
    axios.get<typeTodos>('/api/todos')
        .then(response => dispatch(readJsonActionSuccess(response.data)))
        .catch(() => dispatch(readJsonActionFailure() ))
}

// remove Todo
export const removeTodoActionRequest = ():TRemoveTodoActionRequest => ({ type: REMOVE_TODO_REQUEST })
export const removeTodoActionFailure = ():TRemoveTodoActionFailure=> ({ type: REMOVE_TODO_FAILURE })
export const removeTodoActionSuccess = (id: string):TRemoveTodoActionSuccess => ({
        type: REMOVE_TODO_SUCCESS,
        payload: id
});
export const removeTodoDispatchAction = (id: string) => (dispatch: Dispatch<TAction>) => {
    dispatch(removeTodoActionRequest());
    axios.delete('/api/todos/'+id)
        .then(response => dispatch( removeTodoActionSuccess(response.data.id) ))
        .catch(() => dispatch( removeTodoActionFailure() ))
}

//change Todo
export const changeTodoActionRequest = ():TChangeTodoActionRequest => ({ type: CHANGE_TODO_REQUEST })
export const changeTodoActionFailure = ():TChangeTodoActionFailure => ({ type: CHANGE_TODO_FAILURE })
export const changeTodoActionSuccess = (todo:typeTodo):TChangeTodoActionSuccess => ({
        type: CHANGE_TODO_SUCCESS,
        payload: todo
});
const helpChangeTodo = (todo: typeTodo, isChangeDone: boolean, changedDueDate: any = undefined ) => {
    let { ...copyTodo} = todo;
    if (changedDueDate) copyTodo.dueDate = changedDueDate;
    if ( isChangeDone ) copyTodo.isDone = !copyTodo.isDone;
    return copyTodo;
}
export const changeTodoDispatchAction = (todo: typeTodo, isChangeDone=false, changedDueDate = undefined) =>( dispatch: Dispatch<TAction>) => {
    dispatch(changeTodoActionRequest());
    axios.put<typeTodo>('/api/todos', helpChangeTodo(todo, isChangeDone))
        .then(response => dispatch( changeTodoActionSuccess(response.data) ))
        .catch(() => dispatch( changeTodoActionFailure() ))
}

//add Todo
export const addTodoActionRequest = ():TAddTodoActionRequest => ({ type: ADD_TODO_REQUEST })
export const addTodoActionFailure = ():TAddTodoActionFailure => ({ type: ADD_TODO_FAILURE })
export const addTodoActionSuccess = (todo: typeTodo):TAddTodoActionSuccess => ({
        type: ADD_TODO_SUCCESS,
        payload: todo
});

export const addTodoDispatchAction = (todo: typeTodo) => (dispatch: Dispatch<TAction>) => {
    dispatch(addTodoActionRequest());
    axios.post<typeTodo>('/api/todos', todo )
        .then( response => dispatch( addTodoActionSuccess(response.data) ))
        .catch( () => dispatch( addTodoActionFailure() ))
}

//filter Todos
export const filterTodoActionRequest = ():TFilterTodoActionRequest => ({ type: FILTER_TODO_REQUEST })
export const filterTodoActionFailure = ():TFilterTodoActionFailure => ({ type: FILTER_TODO_FAILURE })
export const filterTodoActionSuccess = (nameFilter: string):TFilterTodoActionSuccess => ({
        type: FILTER_TODO_SUCCESS,
        payload: nameFilter
});

export const filterTodoDispatchAction = (nameFilter: string) => (dispatch: Dispatch<TAction>) => {
    try {
        dispatch( filterTodoActionRequest());
        dispatch( filterTodoActionSuccess(nameFilter) );
    }
    catch {
        dispatch( filterTodoActionFailure() );
    }
}