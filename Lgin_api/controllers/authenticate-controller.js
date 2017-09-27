var connection = require('/home/system/WebstormProjects/Lgin_api/config.js');
var jwt    = require('jsonwebtoken');
module.exports.authenticate=function(req,res){
    var token="";
    var email=req.body.email;
    var password=req.body.password;
    console.log()
    connection.query("SELECT * FROM users WHERE email = '"+email+"'", function (error, results, fields) {
        if (error) {
            console.log(error)
            res.json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            if(results.length >0){
                if(password==results[0].password){

                    res.json({
                        status:true,
                        message:'successfully authenticated'
                      token=jwt.sign()
                    })
                }else{
                    res.json({
                        status:false,
                        message:"Email and password does not match"
                    });
                }

            }
            else{
                res.json({
                    status:false,
                    message:"Email does not exits"
                });
            }
        }
    });
}