const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost/todos-db');

app.use("/api", require("./api.js"));
app.listen(4000, ()=>{
    console.log('server is runing...')
})