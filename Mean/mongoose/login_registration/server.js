const express = require("express");
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');

var bcrypt = require('bcryptjs');

app.use(flash());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

mongoose.connect('mongodb://localhost/users_login', { useNewUrlParser: true });

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    birthday: { type: String, required: true },
    password_hash: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/login', (req, res) => {
    var user_logged = {};
    User.findOne({ "email": req.body.email })
        .then((user) => {
            user_logged = user;
            return bcrypt.compare(req.body.password, user.password_hash);
        })
        .then((result) => {
            //`result` here is whether the password was correct or not
            if (result){
                req.flash('success', user_logged.first_name + 'successfully logged in.')
                req.session.first_name = user_logged.first_name;
                res.redirect("/success")
            } else {
                req.flash("reg", "Wrong password");
                res.redirect("/");
            }
        })
        .catch((err) => {
            for (var key in err.errors) {
                req.flash("reg", err.errors[key].message);
            }
            req.flash("reg", "Error finding user account");
            res.redirect("/");
        })



})

app.post('/register', (req, res) => {
    var error = false;
    if (!(req.body.email.includes('@') || req.body.email.includes('.'))) {
        req.flash('reg', "Not an email!")
        error = true;
    }
    //Added an inner set of parenthesis here to make this work
    if (!(req.body.first_name.length > 1)) {
        req.flash('reg', "Please add more than one character to your first name");
        error = true;
    }
    //Added an inner set of parenthesis here to make this work
    if (!(req.body.last_name.length > 1)) {
        req.flash('reg', "Please add more than one character to your last name");
        error = true;
    }
    if (req.body.password != req.body.cpassword) {
        req.flash('reg', "Passwords don't match");
        error = true;
    }
    //Added an inner set of parenthesis here to make this work
    if (!(req.body.password.length > 5)) {
        req.flash('reg', "Password should have more than 5 characters");
        error = true;
    }
    var re = /[0-9]/;
    if (!re.test(req.body.password)) {
        req.flash('reg', "Password should contain a digit");
        error = true;
    }
    if (error) {
        res.redirect("/")
    } else {
       //check if user exist 
         User.findOne({ "email": req.body.email })
        .then((user) => {
            if(user !=null){
            req.flash('reg', "Account already exists");
            throw new Error ();
            }
        //Hash password (asynchronously)
       return bcrypt.hash(req.body.password, 8)   
        })   
            .then((hash) => {
                delete req.body.password;
                delete req.body.cpassword;
                req.body.password_hash = hash;
                //Create the user
                return User.create(req.body);
            })
            .then((user) => {
                req.flash("success", user.first_name + "successfully created");
                req.session.first_name = user.first_name;
                res.redirect("/success");
            })
            .catch((err) => {
                for (var key in err.errors) {
                    req.flash("reg", err.errors[key].message);
                }
                res.redirect("/");
            });
    }

})

app.get('/success', (req, res) => {
    res.render("success", {first_name : req.session.first_name});
})

app.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/');
})



app.listen(8000, () => console.log("listening on port 8000"));