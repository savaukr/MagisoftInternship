import { CHANGE_ISDONE, REMOVE_TODO, ADD_TODO, FILTER_TODOS, READ_JSON_SUCCESS, READ_JSON_REQUEST, READ_JSON_FAILURE } from '../types/actionsTypes.js';

const initialState = {
    todos: [
        /*{id:"1", title:'first task', createDate: new Date(), dueDate:'2020-05-06', isDone:true },
        {id:"2", title:'second task', createDate: new Date(), dueDate:'2020-03-01', isDone:false },
        {id:"3", title:'tommorow task', createDate: new Date(), dueDate:'2020-03-15', isDone:false }*/
    ],       
    objFilters:{noneFinished:false, outDated:false, tomorrow:false },
    isLoding: false,
    isError: false
} 
initialState.todosFilter = [...initialState.todos];


const  infoTodos =  (state = initialState, action) => {
    switch (action.type) {
        case READ_JSON_REQUEST:
            return { 
                ...state,
                isLoding: true,
                isError: false
            }
        case READ_JSON_SUCCESS: 
            return {
                ...state,
                todosFilter: action.payload,
                todos: action.payload,
                isLoding: false,
                isError: false
            };
        case READ_JSON_FAILURE:
            return { 
                ...state,
                isLoding: false,
                isError: true
            };
        case CHANGE_ISDONE:
            return {
                ...state,
                todosFilter:action.payload,
                todos:action.payload
            };
        case REMOVE_TODO:
            return {
                ...state,
                todosFilter:action.payload,
                todos:action.payload
            };
        case ADD_TODO:
            return {
                ...state,
                todosFilter:action.payload.copyTodos,
                todos:action.payload.copyTodos,
                objFilters: action.payload.objFilters
            };
        case FILTER_TODOS:
            return {
                ...state,
                objFilters: action.payload.copyFilters,
                todosFilter: action.payload.copyTodos
            }
        default: 
            return state;
    }
}
export default infoTodos;