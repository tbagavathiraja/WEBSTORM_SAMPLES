// var express=require("express");
// var bodyParser=require('body-parser');
// var jwt    = require('jsonwebtoken');
// var app = express();
// var authenticateController=require('./controllers/authenticate-controller');
// var registerController=require('./controllers/register-controller');
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
// /* route to handle login and registration */
// app.post('/api/register',registerController.register);
// app.post('/api/authenticate',authenticateController.authenticate);
// console.log("server running")
// app.listen(6000);
//


var express = require('express');
var bodyParser = require('body-parser');
var jwt    = require('jsonwebtoken');


const app = express();
app.use(bodyParser.json());

app.get('/api', function api(req, res) {
    res.json({
        description: 'My API. Please authenticate!'
    });
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});





app.post('/api/login', function(req, res) {

    // insert code here to actually authenticate, or fake it
    const user = { id: 3 };

    // then return a token, secret key should be an env variable
    const token = jwt.sign({ user: user.id }, 'secret_key_goes_here');
    res.json({
        message: 'Authenticated! Use this token in the "Authorization" header',
        token: token
    });
});

app.get('/api/protected', ensureToken, function(req, res) {
    console.log("FFF")
    jwt.verify(req.token, 'secret_key_goes_here', function(err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                description: 'Protected information. Congrats!'
            });
        }
    });
});

function ensureToken(req, res, next) {
    console.log("SSSS")
    const bearerHeader = req.headers["authorization"];
    console.log("AAAAAAAA"+bearerHeader)
    if (typeof bearerHeader !== 'undefined') {

        req.token = bearerHeader
        next();
    } else {
        res.sendStatus(403);
    }
}