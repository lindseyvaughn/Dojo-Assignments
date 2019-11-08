module.exports = {


    index:function(req,res){
        res.render('index')
    },
    
    
    quotes: function(req, res){
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
    },

    quotes: function(req,res){
        User.find().sort('-createdAt')
        .then(users => res.render('quotes', { users: users }))
        .catch(err => res.json(err))
    }, 

    clear: function(req,res){
        User.remove()
        .then(deletedUsers => {
            res.redirect('/')
        })
        .catch(err => res.json(err));
    }, 
    back: function(req,res){
        res.redirect('/')
    },
    skip: function(req,res){
        res.redirect('/quotes')
    }












} 