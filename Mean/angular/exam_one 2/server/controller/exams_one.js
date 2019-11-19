const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
    index: function(req,res){ //All products
        Product.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    addProduct: function(req, res){ //Add a new product 
        console.log("New Product "+req.body.name)
        Product.create({name: req.body.name, quantity: req.body.quantity, price: req.body.price })
        .then(function(){
            res.json({message: "Success!", added: true});
        })
        .catch(err => res.json(err));
    },
    getProduct: function(req,res){ //product details
        Product.findOne({_id: req.params.id})
        .then(function(product){res.json(product)})
        .catch(err => res.json(err));
    },
    updatedProduct: function(req,res){
        Product.findByIdAndUpdate(req.params.id, {name: req.body.name, quantity: req.body.quantity, price: req.body.price}, { new: true, runValidators: true, context: 'query' })
        .then(function(product){res.json(product)})
        .catch(err => res.json(err));
    },
    deleteProduct: function(req,res){
        Product.remove({_id: req.params.id})
        .then(function(product){res.json(product)})
        .catch(err => res.json(err));
    }

}
