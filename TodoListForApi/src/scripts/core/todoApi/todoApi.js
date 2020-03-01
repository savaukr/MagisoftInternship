async function getTodos() {
    let url='/api/todos';
    let response = await fetch(url);
    let result = await response.json();
   //console.log(result);
    return result;
}
async function createTodo(todo) {
    let url='/api/todos';
    let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },body: JSON.stringify(todo)});
    let result = await response.json();
    //console.log(result);
    return result;
}
async function changeTodo(todo) {
    let url='/api/todos';
    let response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },body: JSON.stringify(todo)});
    let result = await response.json();
    console.log(result.isDone);
    return result;
}

async function deleteTodo(id) {
    let url='/api/todos/'+id;
    let response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
    });
    let result = await response.json();
    //console.log(result);
    return result;
}
let todoApi = {getTodos,createTodo,changeTodo,deleteTodo};
export default todoApi;

//getTodos();
//createTodo({title:'Ще одна справа', dueDate:'2020-03-01', createDate:new Date(), isDone:false});
//changeTodo({id:'1',title:'change todo with id=1', dueDate:'2020-03-01', createDate:new Date(), isDone:false});
//deleteTodo('2');
//getTodos();

