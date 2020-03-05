import { SET_TODOS } from '../actions/actionTodos';
import {CHANGE_IS_DONE} from '../actions/actionChangeIsDone';

const initialtState = 
    [{id:"1", title:"initial task1", createDate:new Date(), dueDate:'2020-03-25', isDone:false},
     {id:"2", title:"initial task2", createDate:new Date(), dueDate:'2020-03-10', isDone:false}];


const todoReducer = (state = initialtState, action)=>{
    switch (action.type) {
        case SET_TODOS:
            return {...state,  todo: action.payload };
        case CHANGE_IS_DONE:
            return { ...state, isDone: action.payload };

        default: return state;
    }
}
export default todoReducer;