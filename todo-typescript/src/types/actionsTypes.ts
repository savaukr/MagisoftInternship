import { typeTodos,  typeTodo } from './interfaces'

export const READ_JSON_REQUEST = "READ_JSON_REQUEST";
export const READ_JSON_FAILURE = "READ_JSON_FAILURE";
export const READ_JSON_SUCCESS = "READ_JSON_SUCCESS";

export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";

export const REMOVE_TODO_REQUEST = "REMOVE_TODO_REQUEST";
export const REMOVE_TODO_SUCCESS = "REMOVE_TODO_SUCCESS";
export const REMOVE_TODO_FAILURE = "REMOVE_TODO_FAILURE";

export const CHANGE_TODO_REQUEST = "CHANGE_TODO_REQUEST";
export const CHANGE_TODO_FAILURE = "CHANGE_TODO_FAILURE";
export const CHANGE_TODO_SUCCESS = "CHANGE_TODO_SUCCESS";

export const FILTER_TODO_REQUEST = "FILTER_TODO_REQUEST";
export const FILTER_TODO_FAILURE = "FILTER_TODO_FAILURE";
export const FILTER_TODO_SUCCESS = "FILTER_TODO_SUCCESS";


export type TReadJsonActionRequest = {
    type: typeof READ_JSON_REQUEST
}
export type TReadJsonActionFailure = {
    type: typeof READ_JSON_FAILURE
}
export type TReadJsonActionSuccess = {
    type: typeof READ_JSON_SUCCESS
    payload: typeTodos
}

export type TAddTodoActionRequest = {
    type: typeof ADD_TODO_REQUEST
}
export type TAddTodoActionFailure = {
    type: typeof ADD_TODO_FAILURE
}
export type TAddTodoActionSuccess = {
    type: typeof ADD_TODO_SUCCESS
    payload: typeTodo
}

export type TChangeTodoActionRequest = {
    type: typeof CHANGE_TODO_REQUEST
}
export type TChangeTodoActionFailure = {
    type: typeof CHANGE_TODO_FAILURE
}
export type TChangeTodoActionSuccess = {
    type: typeof CHANGE_TODO_SUCCESS
    payload: typeTodo
}

export type TRemoveTodoActionRequest = {
    type: typeof REMOVE_TODO_REQUEST
}
export type TRemoveTodoActionFailure = {
    type: typeof REMOVE_TODO_FAILURE
}
export type TRemoveTodoActionSuccess = {
    type: typeof REMOVE_TODO_SUCCESS
    payload: string
}

export type TFilterTodoActionRequest = {
    type: typeof FILTER_TODO_REQUEST
}
export type TFilterTodoActionFailure = {
    type: typeof FILTER_TODO_FAILURE
}
export type TFilterTodoActionSuccess = {
    type: typeof FILTER_TODO_SUCCESS
    payload: string
}

export type TAction = TReadJsonActionRequest | TReadJsonActionFailure | TReadJsonActionSuccess |
                    TAddTodoActionRequest | TAddTodoActionFailure | TAddTodoActionSuccess |
                    TRemoveTodoActionRequest | TRemoveTodoActionFailure |  TRemoveTodoActionSuccess |
                    TChangeTodoActionRequest | TChangeTodoActionFailure | TChangeTodoActionSuccess |
                    TFilterTodoActionRequest | TFilterTodoActionFailure | TFilterTodoActionSuccess
