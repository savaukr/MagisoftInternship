import deleteTodo from '../../features/deleteTodo/deleteTodo';
import markTodo from '../../features/markTodo/markTodo';

function showTodo(todo,  arr, elem) {
    let todoItem= document.createElement('div');
    let titleP = document.createElement('p');
    let iconDelete = document.createElement('button');
    iconDelete.onclick = (e)=>{
        console.log(arr);
        arr = deleteTodo(arr, todo.title);
        console.log(arr);
        let todoItem = e.target.closest('.todo__item');
        todoItem.remove();
        localStorage.setItem('todo', JSON.stringify(arr));
    };
    let spanDelete = document.createElement('span');
    spanDelete.classList.add('span__delete')
    iconDelete.append(spanDelete);
    let iconMark = document.createElement('button');
    iconMark.onclick = (e)=>{ 
        arr = markTodo(arr, todo);
        localStorage.setItem('todo', JSON.stringify(arr));
        e.target.closest('.delMark__mark').classList.toggle('mark');
    };
    let spanMark = document.createElement('span');
    spanMark.classList.add('span__mark')
    iconMark.append(spanMark);
    let div=document.createElement('div');
    div.classList.add('delMark');
    titleP.innerHTML = todo.title;
    titleP.dataset.title = todo.title;
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
    return arr;
}
export default showTodo;