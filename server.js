const express = require('express');
const app = express();
var routes = require('./routes/routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded()); 

routes(app);
app.listen('4000');