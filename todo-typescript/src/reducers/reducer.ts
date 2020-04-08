import { 
 READ_JSON_REQUEST, READ_JSON_FAILURE, READ_JSON_SUCCESS,
 CHANGE_TODO_REQUEST, CHANGE_TODO_FAILURE, CHANGE_TODO_SUCCESS,
 REMOVE_TODO_REQUEST, REMOVE_TODO_FAILURE, REMOVE_TODO_SUCCESS,
 ADD_TODO_REQUEST, ADD_TODO_FAILURE, ADD_TODO_SUCCESS,
 FILTER_TODO_REQUEST, FILTER_TODO_FAILURE, FILTER_TODO_SUCCESS } from '../types/actionsTypes';

import { TAction } from '../types/actionsTypes'
import { IState, typeFilters, typeTodo } from '../types/interfaces';

const initialState: IState = {
    todos: [
       /* {id:"1", title:'first task', createDate: new Date(), dueDate:'2020-05-06', isDone:true },
        {id:"2", title:'second task', createDate: new Date(), dueDate:'2020-03-01', isDone:false },
        {id:"3", title:'tommorow task', createDate: new Date(), dueDate:'2020-03-15', isDone:false }*/
    ],       
    todosFilter: [],
    objFilters:{noneFinished:false, outDated:false, tomorrow:false },
    isLoading: false,
    isError: false
} 
initialState.todosFilter = [...initialState.todos];


const  infoTodos =  (state = initialState, action: TAction):IState => {
    switch (action.type) {
        case READ_JSON_REQUEST:
            return { 
                ...state,
                isLoading: true,
                isError: false
            }
        case READ_JSON_SUCCESS: 
            return {
                ...state,
                todosFilter: action.payload,
                todos: action.payload,
                isLoading: false,
                isError: false
            };
        case READ_JSON_FAILURE:
            return { 
                ...state,
                isLoading: false,
                isError: true
            };

        case ADD_TODO_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case ADD_TODO_SUCCESS: 
            let copyState = {...state };
            let copyTodos = [ ...copyState.todos, action.payload ];
            return {
                ...state,
                todosFilter: copyTodos,
                todos: copyTodos,
                objFilters: { noneFinished:false, outDated:false, tomorrow:false },
                isLoading: false,
                isError: false
            };
        case ADD_TODO_FAILURE:
            return {
                 ...state,
                isLoading: false,
                isError: true
            } 

        case  REMOVE_TODO_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case REMOVE_TODO_SUCCESS: 
            copyTodos = state.todos.filter((todo: typeTodo) => {
             if (todo.id !== undefined) return todo.id !== action.payload
            });
            let copyTodosFilter = state.todosFilter.filter((todo: typeTodo) => {
                if (todo.id !== undefined) return todo.id !== action.payload
            });
            return {
                 ...state,
                todos: copyTodos,
                todosFilter: copyTodosFilter,
                isLoading: false,
                isError: false
            }
        case REMOVE_TODO_FAILURE:
            return {
                 ...state,
                isLoading: false,
                isError: true
            } 
            
        case CHANGE_TODO_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case CHANGE_TODO_SUCCESS: 
            copyTodos = state.todos.map(todo => {
                if (todo.id === action.payload.id) return action.payload;
                return todo;
            });
            copyTodosFilter = state.todosFilter.map(todo => {
                if (todo.id === action.payload.id) return action.payload;
                return todo;
            });
            return {
                 ...state,
                todos: copyTodos,
                todosFilter: copyTodosFilter,
                isLoading: false,
                isError: false
            }
        case CHANGE_TODO_FAILURE:
            return {
                 ...state,
                isLoading: false,
                isError: true
            } 

        case FILTER_TODO_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case FILTER_TODO_SUCCESS: 
            [...copyTodos] = state.todos;
            const dayInMls = 24*3600*1000;
            let {...copyFilters }: typeFilters = state.objFilters; 
            copyFilters[ action.payload ] = !copyFilters[action.payload];
            if (copyFilters.noneFinished) copyTodos = copyTodos.filter( (todo: typeTodo) => todo.isDone === false );
            if (copyFilters.outDated) copyTodos = copyTodos.filter( ( todo: typeTodo )=>
              ( new Date(todo.dueDate).getTime()+dayInMls ) < ( new Date().getTime() )          
            );
            if (copyFilters.tomorrow) copyTodos = copyTodos.filter( (todo: typeTodo) =>
              ( ( new Date(todo.dueDate).getTime() < new Date().getTime()+dayInMls ) && ( new Date(todo.dueDate).getTime() > new Date().getTime() ))
            )
            return {
                ...state,
                objFilters: copyFilters,
                todosFilter: copyTodos,
                isLoading: false,
                isError: false
            }
        case FILTER_TODO_FAILURE:
            return {
                 ...state,
                isLoading: false,
                isError: true
            } 

        default: 
            return state;
    }
}
export default infoTodos;