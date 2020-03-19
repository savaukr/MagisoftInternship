var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var jsonParser = bodyParser.json();
 
app.use(express.static(__dirname + "/dist"));

// отримання списку справ
app.get("/api/todos", function(req, res){
    var content = fs.readFileSync("todos.json", "utf8");
    var todos = JSON.parse(content);
    res.send(todos);
});


// запис нової справи
app.post("/api/todos", jsonParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    var title = req.body.title;
    var createDate = req.body.createDate;
    var dueDate = req.body.dueDate;
    var isDone = req.body.isDone;
    
    var todo = {title: title, createdAt:createDate, dueDate: dueDate, isDone:isDone};
    var data = fs.readFileSync("todos.json", "utf8");
    var todos = JSON.parse(data);
    // знаходимо максимальний id
    var id;
    if (todos.length !== 0) 
        id = Math.max.apply(Math,todos.map(function(o){return o.id;}));
    else id =-1;
    todo.id =  id+1;
    // добавляємо справу у список
    todos.push(todo);
    var data = JSON.stringify(todos);
    //переписуємо файл з новими даними
    fs.writeFileSync("todos.json", data);
    res.send(todo);
});

// змінюємо справу
app.put("/api/todos", jsonParser, function(req, res){
    if(!req.body) return res.sendStatus(400);
    var todoId = req.body.id;
    var title = req.body.title;
    var dueDate = req.body.dueDate;
    var isDone = req.body.isDone;
    var createDate = req.body.createDate;
     
    var data = fs.readFileSync("todos.json", "utf8");
    var todos = JSON.parse(data);
    var todo;
    for(var i=0; i<todos.length; i++){
        if(todos[i].id==todoId){
            todo = todos[i];
            break;
        }
    }
    if(todo){
        todo.title=title;
        todo.dueDate=dueDate;
        todo.createDate = createDate;
        todo.isDone = isDone;
        var data = JSON.stringify(todos);
        fs.writeFileSync("todos.json", data);
        res.send(todo);
    }
    else{
        res.status(404).send(todo);
    }
});

//видалення справи
app.delete("/api/todos/:id", function(req, res){
    var id = req.params.id;
    var data = fs.readFileSync("todos.json", "utf8");
    var todos = JSON.parse(data);
    var index = -1;
    //знаходимо індекс справи
    for(var i=0; i<todos.length; i++){
        if(todos[i].id==id){
            index=i;
            break;
        }
    }
    if(index > -1){
        // видаляємо справу по індексу
        var todo = todos.splice(index, 1)[0];
        var data = JSON.stringify(todos);
        fs.writeFileSync("todos.json", data);
        res.send(todo);
    }
    else{
        res.status(404).send();
    }
});

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});