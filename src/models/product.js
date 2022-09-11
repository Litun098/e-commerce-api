const sqlConnection = require('../services/sqlConnection');

function listProducts(cb){
    let sql = "select id as ProductId, name as Name, price as Price from products";
    let value = [];
    sqlConnection.executeQuery(sql,value,function(err,result){
        cb(err,result);
    })
}

function addProduct(data,cb){
    let sql = "insert into products (name,price,description,categoryId,vendorId,createdAt,updatedAt) values(?,?,?,?,?,now(),now())"
    let value = [];
    value.push(data.name)
    value.push(data.price)
    value.push(data.description)
    value.push(data.categoryId)
    value.push(data.vendorId)

    sqlConnection.executeQuery(sql,value,function(err,result){
        cb(err,result);
    })
}

module.exports = {
    listProducts,
    addProduct
}