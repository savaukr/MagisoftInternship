import deleteTodo from '../../features/deleteTodo/deleteTodo';
import markTodo from '../../features/markTodo/markTodo'
function showTodo(key, todo, elem) {
    todo = JSON.parse(todo);
    let todoItem= document.createElement('div');
    let titleP = document.createElement('p');
    let iconDelete = document.createElement('button');
    iconDelete.onclick = deleteTodo;
    let spanDelete = document.createElement('span');
    spanDelete.classList.add('span__delete')
    iconDelete.append(spanDelete);
    let iconMark = document.createElement('button');
    iconMark.onclick = markTodo;
    let spanMark = document.createElement('span');
    spanMark.classList.add('span__mark')
    iconMark.append(spanMark);
    let div=document.createElement('div');
    div.classList.add('delMark');
    titleP.innerHTML = key;
    titleP.dataset.title = key;
    titleP.dataset.createdAt = todo.createdAt;
    titleP.dataset.dueDate = todo.dueDate;
    titleP.dataset.isDone = todo.isDone;
    iconMark.classList.add('delMark__mark');
    iconDelete.classList.add('delMark__delete');
    todoItem.classList.add('todo__item');
    todoItem.append(titleP);

    div.append(iconDelete);
    div.append(iconMark);
    todoItem.append(div);
    elem.append(todoItem);
}
export default showTodo;

/*
<button class="todo__bottons__delete todo__button">
					<span class="button__delete"></span>
				</button>
				<button class="todo__bottons__mark todo__button">
					<span class="button__mark"></span>
				</button>
*/