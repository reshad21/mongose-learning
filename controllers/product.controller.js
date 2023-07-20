const Product = require("../models/Product.js");


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
        const product = new Product(req.body);

        if (product.quantity == 0) {
            product.status = "out-of-stock";
        }

        const result = await product.save();

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

        const result = await Product.findById('64b6415764ad171a54e69a78');

        res.status(200).json({
            status: 'success',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Can not get products',
            error: error.message
        })
    }
}