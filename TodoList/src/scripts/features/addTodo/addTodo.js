function addTodo(mas, title, dueDate) {
	//let arr = [].concat(mas);
	let arr = JSON.parse(localStorage.getItem('todo'));
	let id = arr.length ? arr[arr.length-1].id+1 : 0;
	arr.push({id: id, title:title, createdAt:new Date(), dueDate:dueDate, isDone:false});
	return arr;
	//localStorage.setItem(title, JSON.stringify({createdAt:new Date(), dueDate:dueDate, isDone:false}))
}
export default addTodo;