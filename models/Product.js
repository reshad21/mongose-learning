const mongoose = require("mongoose");
// Schema design
const productSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please provide a name for this product"],
      trim: true,
      unique: [true, "Name must be unique"],
      minLength: [3, "Name must be at least 3 characters"],
      maxLength: [100, "Name is too large"],
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"]
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs"],
        message: "unit value cant be {value}, must be kg/litre/pcs"
      }
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "quantity can't be negative"],
      validate: {
        validator: (value) => {
          const isInterger = Number.isInteger(value);
          if (isInterger) {
            return true;
          } else {
            return false;
          }
  
        }
      },
      message: "Quantity must be an integer"
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "status can't be {value}",
      },
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // updatedAt: {
    //   type: Date,
    //   default: Date.now,
    // },
  
    // supplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Supplier"
    // },
    // categories: [{
    //   name: {
    //     type: String,
    //     required: true,
    //   },
    //   _id: mongoose.Schema.Types.ObjectId
    // }]
  
  }, {
    timestamps: true,
  
  })
  
  
  // mongoose pattern
  //SCHEMA -> MODEL[collection tao create hoye jay] -> QUERY
  
  const Product = mongoose.model("Product", productSchema);

  module.exports = Product;