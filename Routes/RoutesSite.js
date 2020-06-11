//Dependencies
const express = require("express");

//const multer = require('multer');


//Controllers
//const Home = require('../Controllers/HomeController');
//const Restaurante = require('../Controllers/RestauranteController');

//Configurações
const RoutesSite = express.Router();

//Home -> Index
RoutesSite.get("/", function (req, res) {
    res.render("Home/index");
})

//O Restaurante
RoutesSite.get("/Restaurant/", function (req, res) {
    res.render("Restaurant/index");
})

//Menu
RoutesSite.get("/Menu/", function (req, res) {
    res.render("Menu/index");
})

//Contact
RoutesSite.get("/Contact/", function (req, res) {
    res.render("Contact/index");
})

//Gallery
    //Videos
    RoutesSite.get("/Gallery/Videos", function (req, res) {
        res.render("Gallery/videos");
    })

    //Pics
    RoutesSite.get("/Gallery/Pics", function (req, res) {
        res.render("Gallery/Pics");
    })

//News
RoutesSite.get("/News/", function (req, res) {
    res.render("News/index");
})

//Reservations
RoutesSite.get("/Reservations/", function (req, res) {
    res.render("Reservations/index");
})


//Learning
/*RoutesSite.get("/params/:nome/:numero", (req, res)=>{
    res.send(req.params);
    res.sendFile(__dirname + path);
    //RoutesSite.get('/posts', RestauranteController.Index);
})*/

//Erros Padrao 404
RoutesSite.get("/404", (req, res) => {
    res.send("Erro encontrado");
})

module.exports = RoutesSite