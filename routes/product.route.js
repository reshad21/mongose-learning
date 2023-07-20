const express = require("express");
const router = express.Router();
const productController = require('../controllers/product.controller.js');

router.route('/')
    .get(productController.getProduct)
    .post(productController.createProduct)


router.route('/bulk-update')
    .patch(productController.bulkUpdateProduct)

    
router.route('/:id')
    .patch(productController.updateProduct)


module.exports = router