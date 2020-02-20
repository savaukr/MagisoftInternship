import deleteTodo from '../../features/deleteTodo/deleteTodo';
import markTodo from '../../features/markTodo/markTodo';

function createTitle(todo) {
    let titleP = document.createElement('p');
    titleP.innerHTML = todo.title;
    titleP.dataset.title = todo.title;
    titleP.dataset.createdAt = todo.createdAt;
    titleP.dataset.dueDate = todo.dueDate;
    titleP.dataset.isDone = todo.isDone;
    return titleP;
}
function createDeleteBt(todo, mas){
    let arr = mas.concat();
    let iconDelete = document.createElement('button');
    iconDelete.onclick = (e)=>{
        arr = deleteTodo(arr, todo.title);
        let todoItem = e.target.closest('.todo__item');
        todoItem.remove();
        localStorage.setItem('todo', JSON.stringify(arr));
    };
    let spanDelete = document.createElement('span');
    spanDelete.classList.add('span__delete');
    iconDelete.append(spanDelete);
    iconDelete.classList.add('delMark__delete');
    return iconDelete;
}
function createMarkBt(todo, mas) {
    let arr = mas.concat();
    let iconMark = document.createElement('button');
    if (todo.isDone) iconMark.classList.add('mark');
    iconMark.onclick = (e)=>{ 
        arr = markTodo(arr, todo);
        localStorage.setItem('todo', JSON.stringify(arr));
        e.target.closest('.delMark__mark').classList.toggle('mark');
    };
    let spanMark = document.createElement('span');
    spanMark.classList.add('span__mark')
    iconMark.append(spanMark);
    iconMark.classList.add('delMark__mark');
    return iconMark;
}

function showTodo(todo,  mas, elem) {
    let arr = mas.concat();
    let todoItem= document.createElement('div');
    let titleP = createTitle(todo);
    let iconDelete = createDeleteBt(todo,arr);
    let iconMark = createMarkBt(todo, arr);   
    todoItem.classList.add('todo__item');
    todoItem.append(titleP);
    let div=document.createElement('div');
    div.classList.add('delMark');
    div.append(iconDelete);
    div.append(iconMark);
    todoItem.append(div);
    elem.append(todoItem);
    return arr;
}
export default showTodo;