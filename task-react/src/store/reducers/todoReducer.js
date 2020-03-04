import { SET_TODOS } from '../actions/actionTodos';
import {CHANGE_IS_DONE} from '../actions/actionTodos';

const initialtState = {
    todos:[{id:"1", title:"initial task", createDate:new Date(), dueDate:'2020-03-25', isDone:false}]
}

export default const todoReducer = (state = initialtState, action)=>{
    switch (action.type) {
        case SET_TODOS:
            return {...state,   todos: action.payload };
        case CHANGE_IS_DONE:
            return { ...state, isDone:action.payload };

        default: return state;
    }
}