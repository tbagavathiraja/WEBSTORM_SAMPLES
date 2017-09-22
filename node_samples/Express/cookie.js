var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())
app.get('/',function (req,res){

    res.cookie('name','Uname').send('cookie write')
    console.log('Cookies: ',req.cookies);
    });

app.listen(2000)