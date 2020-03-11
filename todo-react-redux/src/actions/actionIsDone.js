export default function changeIsDoneAction(todos, id) {
	let {...copyTodos} = todos;
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