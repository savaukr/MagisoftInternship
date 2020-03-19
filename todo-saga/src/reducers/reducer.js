import {CHANGE_ISDONE} from '../actions/actions';
import {REMOVE_TODO} from '../actions/actions';
import { ADD_TODO } from '../actions/actions';
import { FILTER_TODOS } from '../actions/actions';



const initialState = {
    todos: [
        {id:"1", title:'first task', createDate: new Date(), dueDate:'2020-05-06', isDone:true },
        {id:"2", title:'second task', createDate: new Date(), dueDate:'2020-03-01', isDone:false },
        {id:"3", title:'tommorow task', createDate: new Date(), dueDate:'2020-03-15', isDone:false }
    ],       
    objFilters:{noneFinished:false, outDated:false, tomorrow:false }
} 
initialState.todosFilter = [...initialState.todos];


export default  function infoTodos (state = initialState, action) {
    switch (action.type) {
        case CHANGE_ISDONE:
            return {...state, todosFilter:action.payload, todos:action.payload };
        case REMOVE_TODO:
            return {...state, todosFilter:action.payload, todos:action.payload};
        case ADD_TODO:
            return {...state, todosFilter:action.payload.copyTodos, todos:action.payload.copyTodos, objFilters: action.payload.objFilters};
        case FILTER_TODOS:
            return {...state, objFilters: action.payload.copyFilters, todosFilter: action.payload.copyTodos}
        default: 
            return state;
    }
}