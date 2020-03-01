const express = require('express');
const router = express.Router();
router.get('/todos', (req,res)=>{
    res.send({method:"GET"})
});
router.post('/todos', (req,res)=>{
    res.send({method:"POST"})
});
router.put('/todos/:id', (req,res)=>{
    res.send({method:"PUT"})
});
router.delete('/todos/:id', (req,res)=>{
    res.send({method:"DELETE"})
});
module.exports = router;