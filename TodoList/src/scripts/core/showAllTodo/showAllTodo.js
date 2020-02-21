import showTodo from '../showTodo/showTodo.js';
function showAllTodo (mas) {
    let arr=[];
    let elem=document.querySelector('.todo__list');
    for (let i=0; i< mas.length; i++) {
        arr = showTodo(mas[i], mas, elem);
    };
    return arr;
}
export default showAllTodo;