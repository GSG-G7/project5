const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
const controllers = require('./controllers/index')

app.disable('x-powered-by');
app.set('port',process.env.PORT || 5000)
app.use(express.static(path.join(__dirname, '..','public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(controllers);



module.exports = app;








