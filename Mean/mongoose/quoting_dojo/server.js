const express = require('express')
const app = express();
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
app.listen(8000, () => console.log('listening on port 8000 <3'));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/name_of_your_DB', { useNewUrlParser: true });
const session = require('express-session')
const flash = require('express-flash');
app.use(flash());


app.use(session({
    secret: 'candycane',
    resave: false,
    saveUnintialized: true,
    cookie: { maxage: 60000 }
}))
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Why no name?"]
    },
    quote: {
        type: String,
        required: [true, "Why no quote?"]
    }
}, { timestamps: true })

const User = mongoose.model('User', UserSchema);

app.get('/', (req, res) => {
    res.render('index')
});

app.post('/quotes', (req, res) => {
    const userData = req.body;
    User.create(userData)
        .then(newUser => {
            console.log("User created: ", userData);
            res.redirect('/quotes')
        })
        .catch(err => {
            console.log("We have an error", err);
            for (var key in err.errors) {
                req.flash(key, err.errors[key].message); //using the key makes it more flexible for validations. 
            }
            res.redirect('/')
        })
})

app.get('/quotes', (req, res) => { //renders the quote page
    User.find().sort('-createdAt')
        .then(users => res.render('quotes', { users: users }))
        .catch(err => res.json(err))
});

app.get('/clear', (req, res) => {
    User.remove()
        .then(deletedUsers => {
            res.redirect('/')
        })
        .catch(err => res.json(err));
})

app.get('/back', (req, res) => {
    res.redirect('/')
})

app.get('/skip', (req, res) => {
    res.redirect('/quotes')
})

