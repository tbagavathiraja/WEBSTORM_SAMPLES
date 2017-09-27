var connection = require('/home/system/WebstormProjects/Lgin_api/config.js');
module.exports.register=function(req,res){
    var today = new Date();
    var users={
        "id":req.body.id,
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password
    }

    console.log(users.id)

    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
        if (error) {
           res.send(error)
        }else{
           res.send(results)
        }
    });
}