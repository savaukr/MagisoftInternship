function closeAddTodo(e) {
    if (e.target.className == 'add-todo' || e.target.className =='add-todo__close' || e.target.className =='add-todo__submit') e.target.closest('.add-todo').classList.add('invisible');
}
export default closeAddTodo;