const express = require('express')
const app = express();
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
app.listen(8000, () => console.log('listening on port 8000 <3'));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/name_of_your_DB', { useNewUrlParser: true });

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
// create an object to that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

app.get('/', (req, res) => {
    User.find()
        .then(data => res.render("index", { users: data }))
        .catch(err => res.json(err));
});


// app.post('/users', (req,res)=>{
//     console.log('Got the post form!')
//     var name = req.body.name;
//     var age = req.body.age;
//     res.render ('users',{name: name, age: age})
// });

app.post('/users', (req, res) => {
    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
        .then(newUserData => console.log('user created: ', newUserData))
        .catch(err => console.log(err));

    res.render('users', { name: req.body.name, age : req.body.age })
});