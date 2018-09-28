const express = require('express');
const app = express();
const ctrl = require('./controller')
const massive = require('massive')
const port = 8888



app.use(express.json());

app.listen(port, ()=> console.log(`Ported on ${port}`))