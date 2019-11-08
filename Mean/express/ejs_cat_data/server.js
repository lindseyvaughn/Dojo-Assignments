const express = require("express");
const app = express();
app.get('/', (request, response) => {
    response.send("Hello Express");
});
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get("/cats", (req, res) => {
    // hard-coded user data
    var cats_array = [
        {
            'name': "Henry",
            'type': 'Tabby',
            'age': 4,
            'img': 'cat1.jpg'
        },
        {
            'name': "Henry",
            'type': 'Tabby',
            'age': 4,
            'img': 'cat1.jpg'
        },
        {
            'name': "Henry",
            'type': 'Tabby',
            'age': 4,
            'img': 'cat1.jpg'
        },
    ];
    res.render('cats', { cats: cats_array });
});

app.get("/cars", (req, res) => {
    // hard-coded user data
    var cars_array = [
        {
            'name': "Honda",
            'type': 'Accord',
            'age': 1,
            'img': 'car1.jpg'
        },
        {
            'name': "Honda",
            'type': 'Accord',
            'age': 1,
            'img': 'car1.jpg'
        },
        {
            'name': "Honda",
            'type': 'Accord',
            'age': 1,
            'img': 'car1.jpg'
        },
    ];
    res.render('cars', { cars: cars_array });

})
app.get("/cats/Henry", (req, res) => {
    var cat1 =
    {
        'name': "Henry",
        'type': 'Tabby',
        'age': 4,
        'img': 'cat1.jpg'
    }

    res.render('details', { details: cat1 });
})

app.get("/cars/Honda", (req, res) => {
    var car1 =
    {
        'name': "Honda",
        'type': 'Accord',
        'age': 1,
        'img': 'car1.jpg'
    }

    res.render('details', { details: car1 });
})

