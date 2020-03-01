const express = require('express');
const app = express();

app.use("/api", require("./api.js"));
app.listen(4000, ()=>{
    console.log('server is runing...')
})