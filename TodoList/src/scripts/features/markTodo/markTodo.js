function markTodo(e) {
	let todoItem = e.target.closest('.todo__item');
	let title = todoItem.querySelector('[data-title]').dataset.title;
    let obj = JSON.parse(localStorage[title]);
    obj.isDone = !obj.isDone;
    localStorage[title] = JSON.stringify(obj);
    e.target.closest('.delMark__mark').classList.toggle('mark');
}
export default markTodo;