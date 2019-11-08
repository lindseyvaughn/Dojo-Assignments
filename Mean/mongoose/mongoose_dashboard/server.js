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
    secret: 'linny',
    resave: false,
    saveUnintialized: true,
    cookie: { maxage: 60000 }
}))


app.get('/', (req, res) => {
    Owl.find().sort('-createdAt')
        .then(owls => {
            res.render('index', { owls: owls })
        })
        .catch(err => res.json(err));
});
app.get('/owls/new', (req, res) => {
    res.render('new_owl')
});

app.post('/owls', (req, res) => {
    const owlData = req.body;
    Owl.create(owlData)
        .then(newOwl => {
            res.redirect('/')
        })
        .catch(err => res.json(err))
})
app.get('/owls/:id', (req, res) => {
    const {id} = req.params;
    Owl.findOne({_id:id})
        .then(owl => res.render('info_id', { owl: owl }))
        .catch(err => res.json(err))
});
// app.post('/owl/:id', (req, res)=>{ //You can use either .findone() or updateOne()
//     const {id} = req.params;
//     const owlData = req.body
//     Owl.findOne({_id:id})
//     .then(owl => {
//         owl.name = owlData.name
//         owl.age = owlData.age
//         owl.favorite_food = owlData.favorite_food
//         owl.gender = owlData.gender
//         return owl.save()
//     })
//     .then(result => res.redirect('/'))
//     .catch(err => res.json(err))
// })

app.post('/owl/:id', (req, res)=>{
    const {id} = req.params;
    const owlData = req.body
    Owl.updateOne({_id:id},{
        name:owlData.name,
        age:owlData.age,
        favorite_food:owlData.favorite_food,
        gender:owlData.gender,
    })
    .then(result => res.redirect('/'))
    .catch(err => res.json(err))
})

app.get('/owl/edit/:id', (req, res) => {
    const {id} = req.params;
    Owl.findOne({_id:id})
        .then(owl =>       res.render('edit_id', { owl: owl }))
        .catch(err => res.json(err))
});
app.get('/owl/destroy/:id', (req, res) => {
    const {id} = req.params;
    Owl.remove({_id:id})
    .then(deleteOwl => {
        res.redirect('/')
    })
    .catch(err => res.json(err))
})
