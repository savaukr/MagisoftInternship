function deleteTodo(e) {
	let todoItem = e.target.closest('.todo__item');
	let title = todoItem.querySelector('[data-title]').dataset.title;
	localStorage.removeItem(title);
	todoItem.remove();
}
export default deleteTodo;