const mongoose = require("mongoose");
const Cake = mongoose.model("Cake");
const Rating = mongoose.model('Rating');

module.exports = {
    index: function(req,res){
        Cake.find({})
        .then(data => res.json(data))
         .catch(err => res.json(err));
    },

    getCake: function(req,res){
        Cake.findOne({_id: req.params._id})
        .then(function(cake){res.json(cake)})
        .catch(err => res.json(err));
    },
    addCake: function(req, res){
        Cake.create({baker: req.body.baker, image: req.body.image})
        .then(function(err, task){
            res.json({message: "Success!", added: true});
        })
        .catch(err => res.json(err));
    },
    addRating: function(req,res){
        console.log('made it all the way')
        Rating.create({rating: req.body.rating, comment: req.body.comment})
        .then(function(rating){
            Cake.findOneAndUpdate({_id:req.params.cakeId}, {$push: {ratings:rating}}, {multi:true})
            .then(cake =>{
            })
            .catch(err => res.json(err))
        })

    },
    deleteCake: function(req, res){
        Cake.remove({_id: req.params._id})
            .then(function(err, deleted){
            if(err){
                res.json(err);
            }else{
                res.json(deleted);
            }
        })
    }
}
