export function changeIsDoneAction(todos, id) {
	let [...copyTodos] = todos;
	for(let todo of copyTodos) {
		if (todo.id === id) {
			todo.isDone = !todo.isDone;
		}
	}
    return {
        type: "CHANGE_ISDONE",
        payload: copyTodos
    }
}

export function removeTodoAction(todos, id) {
	let copyTodos = todos.filter(todo=>todo.id !== id)
    return {
        type: "REMOVE_TODO",
        payload: copyTodos
    }
}
export function addTodoAction(todos, title, dueDate) {
	let [...copyTodos] = todos;
	let id = copyTodos.length ? +copyTodos[copyTodos.length-1].id+1 : 1;
    id = id.toString();
    copyTodos.push({id:id, title:title, createDate: new Date(), dueDate:dueDate, isDone:false})
    //setTodos(todos.concat([{id:id, title:title, createDate: new Date(), dueDate:dueDate, isDone:false}]));
    //Скид фільтрів після додавання нової справи
    //removeActiveClass('filters_button');
    //setObjFilters({noneFinished:false, outDated:false, tomorrow:false });
    return {
        type: "ADD_TODO",
        payload: copyTodos
    }
}