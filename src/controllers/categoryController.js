const Category = require('../models/category');

function listCategories(req, res) {
    Category.listCategories(function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).send({ 
                msg: "Error in fetching categorie.", success: false 
            });
        }
        return res.status(200).send({
            msg: "Successfully fetched categories",
            success: true,
            Category: result
        });
    })
}
module.exports = {
    listCategories
}