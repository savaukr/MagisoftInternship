function deleteTodo(arr, title) {
	for (let i=0; i< arr.length; i++) {
		if (arr[i].title == title) arr.splice(i,1);
;	}
	return arr;
	/*
	let todoItem = e.target.closest('.todo__item');
	let title = todoItem.querySelector('[data-title]').dataset.title;
	localStorage.removeItem(title);
	todoItem.remove();
	*/
}
export default deleteTodo;