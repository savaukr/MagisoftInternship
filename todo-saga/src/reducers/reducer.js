import { 
 READ_JSON_REQUEST, READ_JSON_FAILURE, READ_JSON_SUCCESS,
 CHANGE_TODO_REQUEST, CHANGE_TODO_FAILURE, CHANGE_TODO_SUCCESS,
 REMOVE_TODO_REQUEST, REMOVE_TODO_FAILURE, REMOVE_TODO_SUCCESS,
 ADD_TODO_REQUEST, ADD_TODO_FAILURE, ADD_TODO_SUCCESS,
 FILTER_TODOS } from '../types/actionsTypes.js';

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

        case ADD_TODO_REQUEST:
            return {
                ...state,
                isLoding: true,
                isError: false
            };
        case ADD_TODO_SUCCESS: 
            let copyState = {...state };
            let copyTodos = [...state, copyState.todos.push(action.payload)];
            let copyTodosFilter = [...state, copyState.todosFilter.push(action.payload)]
            return {
                ...state,
                todosFilter: copyTodosFilter,
                todos: copyTodos,
                objFilters: { noneFinished:false, outDated:false, tomorrow:false },
                isLoding: false,
                isError: false
            };
        case ADD_TODO_FAILURE:
            return {
                 ...state,
                isLoding: false,
                isError: true
            } 

        case  REMOVE_TODO_REQUEST:
            return {
                ...state,
                isLoding: true,
                isError: false
            };
        case REMOVE_TODO_SUCCESS: 
            copyTodos = state.todos.filter(todo=> +todo.id !== action.payload);
            copyTodosFilter = state.todosFilter.filter(todo=> +todo.id !== action.payload);
            return {
                 ...state,
                todos: copyTodos,
                todosFilter: copyTodosFilter,
                isLoding: false,
                isError: false
            }
        case REMOVE_TODO_FAILURE:
            return {
                 ...state,
                isLoding: false,
                isError: true
            } 
        case CHANGE_TODO_REQUEST:
            return {
                ...state,
                isLoding: true,
                isError: false
            };
        case CHANGE_TODO_SUCCESS: 
            copyTodos = state.todos.map(todo => {
                if (todo.id == action.payload.id) return action.payload;
                return todo;
            });
            copyTodosFilter = state.todosFilter.map(todo => {
                if (todo.id == action.payload.id) return action.payload;
                return todo;
            });
            return {
                 ...state,
                todos: copyTodos,
                todosFilter: copyTodosFilter,
                isLoding: false,
                isError: false
            }
        case CHANGE_TODO_FAILURE:
            return {
                 ...state,
                isLoding: false,
                isError: true
            } 

        /*
        case CHANGE_ISDONE:
            return {
                ...state,
                todosFilter:action.payload,
                todos:action.payload
            };
         */
            /*
        case REMOVE_TODO:
            return {
                ...state,
                todosFilter:action.payload,
                todos:action.payload
            };
            */
        
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