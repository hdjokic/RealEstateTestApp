const express = require('express');
const router = express.Router();

router.post('/', (req,res) => {
    console.log(req.body);
    res.send("Data received");
})

router.post('/add', function(req,res){
    console.log(req.body);
    res.send("Data received");
})

module.exports = router