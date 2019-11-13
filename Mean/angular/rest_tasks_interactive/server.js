const express = require("express");
const app = express();
const session = require('express-session');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const flash = require('express-flash');

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
// app.set("views", __dirname + "/views");
// app.set("view engine", "ejs");
app.use(express.static( __dirname + '/public/dist/public' ));

mongoose.connect("mongodb://localhost/RestfulTask_API")
require("./server/config/mongoose.js");

require('./server/config/routes.js')(app)

app.listen(8000, () => console.log("listening on port 8000"));