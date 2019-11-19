const mongoose = require("mongoose");

const Product = new mongoose.Schema({
    name: {
        type: String,
        default: "",
        minlength: [3, "Must be 3 characters long"]
    },
    quantity: {
        type: Number,
        default: "",
        min: [1, "Must be greater than 0"]
    },
    price: {
        type: Number,
        default: "",
        min: [1, "Must be greater than 0"]

    }
},
 { timestamps: true });

//  product.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('Product', Product);