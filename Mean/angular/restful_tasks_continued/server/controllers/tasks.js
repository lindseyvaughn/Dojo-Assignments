const mongoose = require("mongoose");
const Task = mongoose.model("Task");

module.exports = {
    index: function(req, res){
        console.log("INSIDE CONTROLLER")
        Task.find({})
         .then(data => res.json(data))
         .catch(err => res.json(err));
    },
    showTask: function(req, res){
        Task.findOne({_id: req.params._id})
        .then(function(task){res.json(task)})
        .catch(err => res.json(err));
    },

    createTask: function(req, res){
        Task.create(req.body) 
        .then(function(err, task){
            res.json({message: "Success!", added: true});
        })
        .catch(err => res.json(err));
    },
    
    updateTask: function(req, res){
        Task.findById({_id: req.params._id}) 
        .then(function(task){
                if(req.body.title){
                    task.title = req.body.title;
                }
                if(req.body.description){
                    task.description = req.body.description;
                }
                if(req.body.completed){
                    task.completed = req.body.completed;
                }
                return task.save(function(err){
                    if(err){
                        res.json(err);
                    }
                    else{
                        res.json(task);
                    }
                })
        })
        .catch(err => res.json(err));
    },
    deleteTask: function(req, res){
        Task.remove({_id: req.params._id})
            .then(function(err, deleted){
            if(err){
                res.json(err);
            }else{
                res.json(deleted);
            }
        })
    }
};