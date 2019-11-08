
const mongoose = require('mongoose'),
Quote = mongoose.model('Quote')
const quotes = require('../controllers/quotes')
module.exports = function(app){

app.get('/', (req, res) => {
    quotes.index(req,res);
});

app.post('/quotes',(req, res) => { 
    quotes.quotes(req,res);
});

app.get('/quotes', (req, res) => { //renders the quote page
    quotes.quotes(req,res);
});

app.get('/clear', (req, res) => {
   quotes.clear(req,res);
});

app.get('/back', (req, res) => {
    quotes.back(req,res);
});

app.get('/skip', (req, res) => {
    quotes.skip(req,res);
})

}