import showTodo from '../showTodo/showTodo.js';
function showAllTodo (arr) {
    let mas=[];
    let elem=document.querySelector('.todo__list');
    for (let i=0; i< arr.length; i++) {
        mas = showTodo(arr[i], arr, elem);
    };
    /*
    for (let i=1; i<localStorage.length; i++) {
        showTodo(localStorage.key(i), localStorage[localStorage.key(i)], elem);
    }
    */
   return mas;
}
export default showAllTodo;