const Product = require("../models/Product.js");
const { getProductService, createProductService, updateProductService } = require("../services/product.services.js");


exports.createProduct = async (req, res) => {
    // res.send("it is working");
    // console.log(req.body);
    try {

        // create system
        // const result = await Product.create(req.body);

        // save system
        // const product = new Product(req.body);
        // const result = await product.save();


        // when we use create or save system?
        // const product = new Product(req.body);

        // if (product.quantity == 0) {
        //     product.status = "out-of-stock";
        // }

        // const result = await product.save();

        const result = await createProductService(req.body);

        res.status(200).json({
            status: 'Success',
            message: "Data inserted successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data is not inserted',
            error: error.message
        })
    }

}

exports.getProduct = async (req, res) => {
    try {
        // const result = await Product.find({});
        // const result = await Product.find({ name: { $in: ["Chal", "Dal", "Ata"] } });

        // const result = await Product
        //   .where("name").equals(/\w/)
        //   .where("quantity").gt(100).lt(600)
        //   .limit(2).sort({ quantity: -1 });

        // const result = await Product.findById('64b6415764ad171a54e69a78');
        const products = await getProductService();

        res.status(200).json({
            status: 'success',
            data: products
        })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Can not get products',
            error: error.message
        })
    }
}


exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await updateProductService(id, req.body);

        res.status(200).json({
            status: 'Success',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Not updating the product',
            error: error.message
        })
    }
}