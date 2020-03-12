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