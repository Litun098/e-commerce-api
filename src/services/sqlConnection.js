const mysql = require('mysql2');
const config = require('../constraints/backendConfig');
var pool = mysql.createPool(config.mysql.local);


function executeQuery(sql,data,callback){
    pool.getConnection(function(err,connection){
        if(err){
            callback(err);
        }else{
            connection.query(sql,data,function(err1,result){
                if(err1){
                    callback(err1);
                }else{
                    connection.release();
                    callback(err1,result);
                }
            })
        }
    })
}

module.exports={
    executeQuery
}