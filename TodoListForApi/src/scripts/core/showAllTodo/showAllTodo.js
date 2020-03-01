import showTodo from '../showTodo/showTodo.js';
function showAllTodo (mas) {
    let arr=[].concat(mas);
    let elem=document.querySelector('.todo__list');
    elem.innerHTML = '';
    for (let i=0; i< arr.length; i++) {
        showTodo(arr[i], arr, elem);
    };
    //return arr;
}
export default showAllTodo;