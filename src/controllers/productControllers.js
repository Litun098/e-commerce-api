const Product = require('../models/product');

function listProducts(req, res) {
    Product.listProducts(function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).send({
                msg: "Not able to fetch the products.",
                success: false
            });
        }
        return res.status(200).send({
            msg: 'Successfully fetched all the products.',
            success: true,
            Product: result
        })
    })
}

function addProduct(req, res) {
    let data = req.body;
    console.log(data)
    if (data.name && data.price && data.description && data.categoryId && data.vendorId) {
        Product.addProduct(data, function (err, result) {
            if(err) {
                return res.status(500).send({ 
                    msg: "Something went wrong could not added products.",
                    success:false
                })
            }
            return res.status(200).send({
                msg: "Successfully added the product",
                success: true
            })
        });
    } else {
        return res.status(401).send({ msg: "Incorrect parameters sent for the request." })
    }
}

module.exports = {
    listProducts,
    addProduct
}