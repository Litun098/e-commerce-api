const User = require('../models/user');

function signup(req, res){
    let data = req.body;

    if(data.username && data.password){
        User.getUsersSignupDetails(data,function(err,result){
            if(err){
                console.log(err);
                return res.status(500).send({
                    msg:"Error during sign up.",
                    success:false
                })
            }
            if(result.length>0){
                return res.status(409).send({
                    msg:"User already exists",
                    success:false
                })
            }else{
                User.signup(data,function(err,result){
                    if(err){
                        console.log(err);
                        return res.status(500).send({
                            success:false,
                            msg:"Something went wrong."
                        })
                    }
                    return res.status(200).send({
                        msg:"Signup Successfully",
                        success:true
                    })
                });
            }
        })
    }else{
        return res.status(400).send({
            msg:"Username or password is missing.",
            success:false
        })
    }
}


function login(req,res){
    let data = req.body;
    if(data.username && data.password){
        User.login(data,function(err,result){
            if(err){
                console.log(err);
                return res.status(500).send({
                    success:false,
                    msg:"Something went wrong."
                });
            }
            if(result.length == 0){
                return res.status(404).send({
                    success:false,
                    msg:"Username or password is incorrect."
                });
            }
            return res.status(200).send({
                msg:"Successfully logged in",
                success:true
            })
        })
    }else{
        return res.status(400).send({
            success:false,
            msg:"Username or password error"
        })
    }
}

module.exports = {
    signup,
    login
}