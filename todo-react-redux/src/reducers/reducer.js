const initialState = {
    todos: [
        {id:"1", title:'first task', createDate: new Date(), dueDate:'2020-05-06', isDone:true },
        {id:"2", title:'tommorow', createDate: new Date(), dueDate:'2020-03-10', isDone:false },
    ],
    todosFilter: [
        {id:"1", title:'first task', createDate: new Date(), dueDate:'2020-05-06', isDone:true },
        {id:"2", title:'tommorow', createDate: new Date(), dueDate:'2020-03-10', isDone:false },
    ],
objFilters:{noneFinished:false, outDated:false, tomorrow:false }
} 

export default  function todosInfo (state = initialState) {
    return state;
}