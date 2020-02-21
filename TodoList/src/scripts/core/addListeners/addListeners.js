import addTodo from '../../features/addTodo/addTodo';
import showTodo from '../showTodo/showTodo';
import clearAll from '../../features/clearAll/clearAll';
import closeAddTodo from '../closeAddTodo/closeAddTodo';
import todoFilters from '../../todoFilters/todoFilters';

function addListeners(todoArr) {
    let filtersElem = document.querySelector('.filters');
    filtersElem.addEventListener('click', (e)=> {
        e.target.classList.toggle('active');
        todoFilters(todoArr);
    });
    let addElem = document.querySelector('.todo__buttons__add');
    addElem.addEventListener('click', (e)=> {
        let addTodoElem = document.querySelector('.add-todo');
        addTodoElem.classList.remove('invisible');
    });

    let addTodoForm = document.querySelector('.add-todo__form');
    addTodoForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        let title = document.querySelector('#title').value;
        document.querySelector('#title').value ='';
        let dueDate = document.querySelector('#dueDate').value;
        todoArr = addTodo(todoArr, title, dueDate);
        localStorage.setItem('todo', JSON.stringify(todoArr));
        showTodo(todoArr[todoArr.length-1], todoArr, document.querySelector('.todo__list'));
    })

    let clearElem = document.querySelector('.todo__buttons__clear');
    clearElem.addEventListener('click', (e)=>{
        todoArr = clearAll();
        localStorage.setItem('todo', JSON.stringify(todoArr));
    let todos = document.querySelectorAll('.todo__item');
    for (let i=1; i<todos.length; i++){
        todos[i].remove();
    };
    });

    let addTodoElem = document.querySelector('.add-todo');
    addTodoElem.addEventListener('click', closeAddTodo);
}
export default addListeners;