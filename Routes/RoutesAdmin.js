//Dependencies
const express = require("express");

//const multer = require('multer');

//Controllers
//const Home = require('../Controllers/HomeController');
//const Restaurante = require('../Controllers/RestauranteController');

//Configurações
const Admin = express.Router();

//Home -> Index
Admin.get("/Admin", function (req, res) {
    return res.render("Admin/Home/index", {layout: 'layoutAdmin'})
})

//O Restaurante
Admin.get("/Admin/Restaurant/", function (req, res) {
    return res.render("Admin/Restaurant/index", {layout: 'layoutAdmin'})
})

//Menu
Admin.get("/Admin/Menu/", function (req, res) {
    return res.render("Admin/Menu/index", {layout: 'layoutAdmin'})
})

//Reserves
Admin.get("/Admin/Reserves/", function (req, res) {
    return res.render("Admin/Reserves/index", {layout: 'layoutAdmin'})
})

//Gallery
    //Videos
    Admin.get("/Admin/Gallery/Videos", function (req, res) {        
        return res.render("Admin/Gallery/videos", {layout: 'layoutAdmin'})
    })

    //Pics
    Admin.get("/Admin/Gallery/Pics", function (req, res) {
        return res.render("Admin/Gallery/pics", {layout: 'layoutAdmin'})
    })

//Reserves
Admin.get("/Admin/News/", function (req, res) {
    return res.render("Admin/News/index", {layout: 'layoutAdmin'})
})

//Reserves
Admin.get("/Admin/Contact/", function (req, res) {
    return res.render("Admin/Contact/index", {layout: 'layoutAdmin'})
})

//RoutesSite.get('/posts', RestauranteController.Index);

//Erros Padrao 404
Admin.get("/404", (req, res) => {
    res.send("Erro encontrado");
})

module.exports = Admin