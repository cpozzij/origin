const express = require("express");
const morgan = require("morgan");
const app = express();
const nunjucks = require("nunjucks");
app.use(express.static("./public"));

app.use(function(req, res, next) {
    const data = [{ name: "Full" }, { name: "Stacker" }, { name: "Son" }];
    res.render("index", { title: "Hall of Fame", personas: data });
});

/*app.get("/panel/:request", function(req, res, next) {
    res.send("hola mundo");
});*/

/*
app.use(function(req, res, next) {
    console.log(req.method);
    next();
});

app.use("/special/", function(req, res, next) {
    console.log("estamos en el middleware special");
    next();
});*/

app.use(morgan("tiny"));
app.set("view engine", "html"); // hace que res.render funcione con archivos html
app.engine("html", nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure("views"); // apunta a nunjucks al directorio correcto para los templates

app.listen(3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});