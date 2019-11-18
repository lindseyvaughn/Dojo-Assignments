const mongoose = require("mongoose");
const Author = mongoose.model("Author");


module.exports = {
    index: function(req,res){
        Author.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    addAuthor: function(req, res){
        Author.create({name: req.body.name})
        .then(function(err, author){
            res.json({message: "Success!", added: true});
        })
        .catch(err => res.json(err));
    },
    getAuthor: function(req,res){
        Author.findOne({_id: req.params.id})
        .then(function(author){res.json(author)})
        .catch(err => res.json(err));
    },
    updatedAuthor: function(req,res){
        Author.findByIdAndUpdate(req.params.id, req.body)
        .then(function(author){res.json(author)})
        .catch(err => res.json(err));
    },
    deleteAuthor: function(req,res){
        Author.remove({_id: req.params.id})
        .then(function(author){res.json(author)})
        .catch(err => res.json(err));
    }

}

