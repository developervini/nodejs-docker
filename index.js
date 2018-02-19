const express = require('express')
const app = module.exports = express()

app.get('/', (req, res) =>{
    res.json('Hello World');
})

app.get('/yourname/:name', (req, res) => {
    res.json(req.params);    
})

app.listen(3000);