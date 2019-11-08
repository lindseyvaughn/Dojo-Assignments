
const mongoose = require('mongoose'),
User = mongoose.model('User')
module.exports = function(app){

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

}