const express = require('express');
const {listCategories} = require('../../../src/controllers/categoryController')
const productController = require('../../../src/controllers/productControllers')

let router = express.Router();

router.get("/category/all",listCategories);
router.get('/product/all',productController.listProducts)
router.post('/product/add',productController.addProduct)
module.exports = router