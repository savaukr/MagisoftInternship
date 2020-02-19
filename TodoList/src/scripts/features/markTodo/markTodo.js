function markTodo(arr, todo) {
    for (let i=0; i< arr.length; i++) {
        if (arr[i].title == todo.title && arr[i].dueDate == todo.dueDate)  arr[i].isDone = !arr[i].isDone;
    }
	return arr;
	/*let todoItem = e.target.closest('.todo__item');
	let title = todoItem.querySelector('[data-title]').dataset.title;
    let obj = JSON.parse(localStorage[title]);
    obj.isDone = !obj.isDone;
    localStorage[title] = JSON.stringify(obj);
    e.target.closest('.delMark__mark').classList.toggle('mark');
    */
}
export default markTodo;