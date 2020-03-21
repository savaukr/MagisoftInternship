async function saveTodoToFile(todo) {
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
    //console.log(result.isDone);
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

export default { saveTodoToFile, changeTodo, deleteTodo };
