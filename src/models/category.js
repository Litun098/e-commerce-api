const sqlConnection = require('../services/sqlConnection');

function listCategories(callback){
    let sql = 'select id as categoty_id, name as Name from categories';
    let data = [];
    sqlConnection.executeQuery(sql,data,function(err,result){
        callback(err,result);
    });
}
module.exports = {
    listCategories
}