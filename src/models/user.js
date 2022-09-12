const sqlConnection = require('../services/sqlConnection')

function signup(data,cb){
    let sql = `insert into users(username,password,createdAt,updatedAt) values(?,?,now(),now())`;

    let value = [];
    value.push(data.username)
    value.push(data.password)
    sqlConnection.executeQuery(sql,value,function(err,result){
        cb(err,result);
    });
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


function getUsersSignupDetails(data,cb){
    let sql =  `select id as userId, username, password userType from users where username = ? and password = ?`;

    let value = [];
    value.push(data.username)
    value.push(data.password)
    sqlConnection.executeQuery(sql,value,function(err,result){
        cb(err,result);
    })
}

module.exports = {
    signup,
    login,
    getUsersSignupDetails
}