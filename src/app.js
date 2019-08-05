const path = require('path');
const express = require('express');
const controllers = require('./controllers/index');

const app = express();

app.disable('x-powered-by');
app.set('port',process.env.PORT || 5000)
app.use(express.static(path.join(__dirname, '..','public')))
app.use(express.json()); /* express.urlencoded() */ /* these are the same of body-parse , 
they build in express */
app.use(controllers);

module.exports = app;
