//Dependencies
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");
//Call routes
const RoutesSite = require("./Routes/RoutesSite");
const RoutesAdmin = require("./Routes/RoutesAdmin");
//Configs
    //Template Engine
    app.engine('handlebars', handlebars({ defaultLayout: 'layout'}));
    app.set('view engine', 'handlebars');


    //Public
    app.use(express.static(path.join(__dirname,  "wwwroot")))
    //app.use(cors());
    //app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
//Routes Site
app.use(RoutesSite);
app.use(RoutesAdmin);

//Server
app.listen(5555, function(){
    console.log("Server Running na url http://127.0.0.1:5555/");
});