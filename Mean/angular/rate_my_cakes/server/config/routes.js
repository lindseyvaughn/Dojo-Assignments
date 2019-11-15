const cakes = require("../controllers/rate_my_cakes.js");

module.exports = function(app){
    console.log("INSIDE ROUTES")
    app.get("/cakes", cakes.index)

    app.get("/cakes/:_id", cakes.getCake)

    app.post("/cakes", cakes.addCake)

    app.post("/ratings/:cakeId", cakes.addRating)
    
    app.delete("/remove/:_id", cakes.deleteCake)
}