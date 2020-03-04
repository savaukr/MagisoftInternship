const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    id: Number,
    title:String,
    createDate: String,
    dueDate: String,
    IsDone:Boolean
});

const Todos = mongoose.model('todo', TodoSchema);
module.exports = Todos;