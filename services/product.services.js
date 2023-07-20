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

exports.updateProductService = async (id, body) => {
    const product = await Product.updateOne({ _id: id }, { $set: body });
    return product;
}