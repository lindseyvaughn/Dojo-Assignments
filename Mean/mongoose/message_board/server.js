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

const CommentSchema = new mongoose.Schema({
    comment_name: {
        type: String,
        required: [true, "Why no name?"]
    },
    comment_content: {
        type: String,
        required: [true, "Why no content?"]
    }
}, { timestamps: true })

const MessageSchema = new mongoose.Schema({
    msg_name: { 
        type: String,
        required: [true, "Why no name?"]
        },
    msg_content: { 
        type: String,
        required: [true, "Why no content?"]
    },
    comments: [CommentSchema]
}, { timestamps: true })

const Message = mongoose.model('Message', MessageSchema);
const Comment = mongoose.model('Comment', CommentSchema);

app.get('/', (req, res) => {
    Message.find().sort('-createdAt')
        .then(messages => {
            res.render('index', { msgs: messages })
        })
        .catch(err => res.json(err));
});

app.post('/post_message', (req, res) => {
    const messageData = req.body;
    Message.create(messageData)
        .then(newmessage => {
            console.log('NEW MESSAGE', newmessage)
            res.redirect('/')
        })
        .catch(err => {
            console.log("WE GOT ERROR FROM PUSHING message to msg: ", err)
            for (var key in err.errors) {
                req.flash(key, err.errors[key].message);
            }
            res.redirect('/')
            })
    })

app.post('/post_comment/:message_id', (req, res) => {
    // const commentData = req.body;
    const { message_id } = req.params;
    Comment.create(req.body)
        .then(newComment => {
            Message.findOneAndUpdate({ _id: message_id }, { $push: { comments: newComment } }, function (err, data) {
                if (err) {
                    console.log("WE GOT ERROR FROM PUSHING COMMENT TO MSG: ", err)
                    res.redirect('/')
                }
                else {
                    res.redirect('/')
                }
            });

        })
        .catch(err => {
            for (var key in err.errors) {
                req.flash(key, err.errors[key].message);
            }
            res.redirect('/')
        })
});

app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    Message.remove({ _id: id })
        .then(deleteMessage => {
            res.redirect('/')
        })
        .catch(err => res.json(err))
})
