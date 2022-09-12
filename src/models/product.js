const sqlConnection = require('../services/sqlConnection');

function listProducts(data, cb){
    let sql = "select id as ProductId, name as Name, price as Price from products";
    let value = [];

    if(data.categoryId){
        sql += " Where categoryId = ?";
        value.push(data.categoryId);
        if(data.minPrice){
            sql += " and price >= ?";
            value.push(data.minPrice);
        }else if(data.maxPrice){
            sql += " and price <= ?";
            value.push(data.maxPrice);
        }
    }
    else if(data.minPrice){
        sql += " where price >= ?"
        value.push(data.minPrice)
    }
    else if(data.maxPrice){
        sql += " where price <= ?"
        value.push(data.maxPrice)
    }
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