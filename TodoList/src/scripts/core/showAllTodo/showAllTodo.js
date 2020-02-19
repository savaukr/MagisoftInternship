import showTodo from '../showTodo/showTodo.js';
function showAllTodo () {
    let elem=document.querySelector('.todo__list');
    for (let i=1; i<localStorage.length; i++) {
        showTodo(localStorage.key(i), localStorage[localStorage.key(i)], elem);
    }
}
export default showAllTodo;