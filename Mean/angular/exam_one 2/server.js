const express = require("express");
const app = express();
// const session = require('express-session');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const flash = require('express-flash');
const path = require('path')

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(flash());
// app.set("views", __dirname + "/views");
// app.set("view engine", "ejs");
app.use(express.static( __dirname + '/public/dist/public' ));

mongoose.connect("mongodb://localhost/exam_one", { useNewUrlParser: true});

require("./server/config/mongoose.js");
require("./server/models/exam_one.js")
require("./server/config/routes.js")(app)

// this route will be triggered if any of the routes above did not match
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, ()=> console.log("listening on port 8000"))
// app.listen(8000, () => console.log("listening on port 8000"));