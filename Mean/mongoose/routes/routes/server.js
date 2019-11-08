const express = require('express')
const app = express();
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');
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

require('./server/config/routes.js')(app)

