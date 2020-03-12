const initialState = {
    todos: [
        {id:"1", title:'first task', createDate: new Date(), dueDate:'2020-05-06', isDone:true },
        {id:"2", title:'tommorow', createDate: new Date(), dueDate:'2020-03-10', isDone:false },
    ],       
    objFilters:{noneFinished:false, outDated:false, tomorrow:false }
} 
initialState.todosFilter = [].concat(initialState.todos);


export default  function infoTodos (state = initialState, action) {
    switch (action.type) {
        case "CHANGE_ISDONE":
            return {...state, todosFilter:action.payload, todos:action.payload };
        case "REMOVE_TODO":
            return {...state, todosFilter:action.payload, todos:action.payload};
        default: 
            return state;
    }
}