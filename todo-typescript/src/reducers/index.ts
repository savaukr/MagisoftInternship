import { combineReducers } from 'redux';
import infoTodos from './reducer';

const rootReducer = combineReducers({
    infoTodos
});

 
export type StateReducerType = ReturnType<typeof rootReducer>

export default rootReducer;