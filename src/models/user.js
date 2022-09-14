const sqlConnection = require('../services/sqlConnection')
const bcrypt = require('bcrypt')
const auth = require('../util/auth')

function signup(data,cb){
    let sql = `insert into users(username,password,createdAt,updatedAt) values(?,?,now(),now())`;

    let value = [];
    value.push(data.username)
    value.push(data.password)
    sqlConnection.executeQuery(sql,value,function(err,result){
        cb(err,result);
    });
}
function strongSignup(data,cb){
    let sql = `insert into users(username, password,createdAt,updatedAt) values(?,?,now(),now()) `;
    let value = [];
    value.push(data.username);
    value.push(bcrypt.hashSync(data.password,8))
    sqlConnection.executeQuery(sql,value,function(err,result){
        cb(err,result);
    })
}
function login(data,cb){
    let sql = `select id as userId, username, password,userType from users where username = ?`;

    let value = [];
    value.push(data.username);

    sqlConnection.executeQuery(sql,value,function(err,result){
        if(data.password == result[0].password){
            cb(err,result);
        }else{
            cb(err,[]);
        }
    })
}


function strongLogin(data,cb){
    let sql = `select * from users where username = ? `;
    let value = [];
    value.push(data.username);
    sqlConnection.executeQuery(sql,value,function(err,result){   
        const isValid = bcrypt.compare(data.password,result[0].password);
        
        if(isValid){
            const token = auth.newToken(result[0]);
            const response = [
                {
                    id:result[0].id,
                    username:result[0].username,
                    authToken:token
                }
            ];
            cb(err,response)
        }else{
            cb(err,[]);
        }
    });
}

function getUsersSignupDetails(data,cb){
    let sql =  `select id as userId, username, password userType from users where username = ? and password = ?`;
    let value = [];
    value.push(data.username)
    value.push(data.password)
    sqlConnection.executeQuery(sql,value,function(err,result){
        cb(err,result);
    })
}

function getUserById(id,cb){
    let sql = `select id as userId,username from users where id = ?`;
    let value = [id];
    sqlConnection.executeQuery(sql,value,function(err,result){
        cb(err,result);
    })
}

module.exports = {
    signup,
    login,
    getUsersSignupDetails,
    strongSignup,
    strongLogin,
    getUserById 
}