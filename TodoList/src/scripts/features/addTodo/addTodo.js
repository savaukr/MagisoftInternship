function addTodo(arr, title, dueDate) {
	arr.push({title:title, createdAt:new Date(), dueDate:dueDate, isDone:false});
	return arr;
	//localStorage.setItem(title, JSON.stringify({createdAt:new Date(), dueDate:dueDate, isDone:false}))
}
export default addTodo;