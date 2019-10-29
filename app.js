const express = require('express');
const app = express();
const fs = require("fs");
const mongoose = require('mongoose');

// librairie qui permet de masquer la configuration 
// et passeword de la base 
require('dotenv/config')




//app.use(bodyparser.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

// import router
const PostRouter = require("./ROUTES/posts");

app.use('/Posts', PostRouter);

//Middleware
// il est possible d'utiliser ce middleware afin de checker un url
// app.use('/index',()=>{console.log("Vous etes passé par la !");});



//ROUTES

app.get('/index', (req, res) => {
    res.send("get a partir de l'index ")
});

app.get('/', (req, res) => {
    res.send("nous sommes a la racine !")
});







// connect to DB
mongoose.connect(process.env.DB_CONNECTION + "/" + process.env.DB_DATABASE, {
    useNewUrlParser: true
}, () => console.log("Connection to DB"));







app.listen(3000);