const products = require("../controller/exams_one.js");
const path = require('path')

module.exports = function (app) {
    console.log("INSIDE ROUTES")
    app.get("/products_json", products.index) //all products
  
    app.post("/products_json", products.addProduct) //add products (to send the info to add a product)
  
    app.get("/productdetails_json/:id", products.getProduct) //to view product details 
  
    // app.post("/authors_json/:id", authors.newAuthor)
  
    app.put("/products_json/:id", products.updatedProduct) //to update a product 
  
    app.delete("/products_json/:id", products.deleteProduct) // to delete a product 
    
  }
  