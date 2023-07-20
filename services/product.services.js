const Product = require("../models/Product");

exports.getProductService = async () => {
    // database ar logic ta niya asbo
    const products = await Product.find({});
    return products;
}

exports.createProductService = async (data) => {
    const product = await Product.create(data);
    return product;
}

exports.updateProductService = async (productId, data) => {
    // new system
    // const result = await Product.updateOne({ _id: productId }, { $set: data }, { runValidators: true });

    // old way
    // const product = await Product.findById(productId);
    // const result = await product.set(data).save();

    const result = await Product.updateOne({ _id: productId }, { $inc: data }, { runValidators: true })

    return result;
}