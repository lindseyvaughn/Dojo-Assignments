const express = require('express');
const app = express();
const session = require('express-session');

app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname +'/views');
app.listen(8000, () => console.log("listening on port 8000"));

app.use(session({   //Need this when using session
    secret:'linny',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.get('/',function(req, res, next){ //Need this when using session as well
    if (req.session.views) {
      req.session.views++;
    }else{
      req.session.views = 1;
    }
    res.render('index', {count : req.session.views});
});

app.get('/add_two', (req, res) =>{
    req.session.views += 1;
    res.redirect('/');
})
app.get('/reset', (req, res) =>{
    req.session.destroy(function(err) {
    })
    res.redirect('/');
})