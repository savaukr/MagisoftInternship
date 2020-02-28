var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var jsonParser = bodyParser.json();
 
app.use(express.static(__dirname + "/public"));
// получение списка данных
app.get("/api/todos", function(req, res){
    var content = fs.readFileSync("todos.json", "utf8");
    var todos = JSON.parse(content);
    res.send(todos);
});
// получение одного пользователя по id
app.get("/api/todos/:id", function(req, res){
      
    var id = req.params.id; // получаем id
    var content = fs.readFileSync("todos.json", "utf8");
    var todos = JSON.parse(content);
    var todo = null;
    // находим в массиве пользователя по id
    for(var i=0; i<todos.length; i++){
        if(todos[i].id==id){
            todo = todos[i];
            break;
        }
    }
    // отправляем пользователя
    if(todo){
        res.send(todo);
    }
    else{
        res.status(404).send();
    }
});


// получение отправленных данных
app.post("/api/todos", jsonParser, function (req, res) {
     
    if(!req.body) return res.sendStatus(400);
     
    var title = req.body.title;
    var dueDate = req.body.dueDate;
    var isDone = req.isDone;
    var createDate = new Date();
    var todo = {title: title, createdAt:createDate, dueDate: dueDate, isDone:isDone};
     
    var data = fs.readFileSync("todos.json", "utf8");
    var todos = JSON.parse(data);
     
    // находим максимальный id
    var id = Math.max.apply(Math,todos.map(function(o){return o.id;}))
    // увеличиваем его на единицу
    todo.id = id+1;
    // добавляем пользователя в массив
    todos.push(todo);
    var data = JSON.stringify(todos);
    // перезаписываем файл с новыми данными
    fs.writeFileSync("todos.json", data);
    res.send(todo);
});
/*
 // удаление пользователя по id
app.delete("/api/users/:id", function(req, res){
      
    var id = req.params.id;
    var data = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(data);
    var index = -1;
    // находим индекс пользователя в массиве
    for(var i=0; i<users.length; i++){
        if(users[i].id==id){
            index=i;
            break;
        }
    }
    if(index > -1){
        // удаляем пользователя из массива по индексу
        var user = users.splice(index, 1)[0];
        var data = JSON.stringify(users);
        fs.writeFileSync("users.json", data);
        // отправляем удаленного пользователя
        res.send(user);
    }
    else{
        res.status(404).send();
    }
});
// изменение пользователя
app.put("/api/users", jsonParser, function(req, res){
      
    if(!req.body) return res.sendStatus(400);
     
    var userId = req.body.id;
    var userName = req.body.name;
    var userAge = req.body.age;
     
    var data = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(data);
    var user;
    for(var i=0; i<users.length; i++){
        if(users[i].id==userId){
            user = users[i];
            break;
        }
    }
    // изменяем данные у пользователя
    if(user){
        user.age = userAge;
        user.name = userName;
        var data = JSON.stringify(users);
        fs.writeFileSync("users.json", data);
        res.send(user);
    }
    else{
        res.status(404).send(user);
    }
});
  */
app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});