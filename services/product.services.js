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


exports.bulkUpdateProductService = async (data) => {
    // console.log(data);
    // {
    //     "ids": [
    //       "64b6415764ad171a54e69a78",
    //       "64b6508f4f11a12684c957de"
    //     ],
    //     "data": {
    //       "price": 150
    //     }
    // }
    // const result = await Product.updateMany({ _id: data.ids }, data.data, { runValidators: true });




    // {
    //     "ids": [
    //       {
    //         "id": "64b6508f4f11a12684c957de",
    //         "data": {
    //           "price": 50
    //         }
    //       },
    //       {
    //         "id": "64b6415764ad171a54e69a78",
    //         "data": {
    //           "price": 250
    //         }
    //       }
    //     ]
    // }
    const products = [];

    data.ids.forEach(product => {
        products.push(Product.updateOne({ _id: product.id }, product.data))
    })

    const result = await Promise.all(products);
    return result;
}


exports.deleteProductByIdService = async (productId) => {
    const result = await Product.deleteOne({ _id: productId });
    return result;
}

exports.bulkDeleteProductService = async (ids) => {
    // {
    //     "ids": [
    //       "64b8bcd167bf3a2700662a91",
    //       "64ba106a29cbbd0ee43fe9b7"
    //     ]
    // }
    const result = await Product.deleteMany({ _id: ids});
    return result;
}