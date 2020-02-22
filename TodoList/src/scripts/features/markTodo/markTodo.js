function markTodo(mas, todo) {
    let arr = mas.concat();
    for (let i=0; i< arr.length; i++) {
        if (arr[i].id == todo.id)  arr[i].isDone = !arr[i].isDone;
     }
    return arr;
}
export default markTodo;