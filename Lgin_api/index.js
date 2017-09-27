var express=require("express");
var bodyParser=require('body-parser');
var jwt    = require('jsonwebtoken');
var app = express();
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
console.log("server running")
app.listen(6000);