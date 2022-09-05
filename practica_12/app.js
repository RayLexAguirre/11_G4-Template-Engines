var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use("/assets", express.static(__dirname + "/public"));
app.set("view engine", "ejs"); //Con esta codigo no ocuparemos colocar el .eje al final de los archivos para ejecutarlos
app.use("/", function (req, res, next) {
  console.log("Request Url:" + req.url);
  next();
});
app.get("/", function (req, res) {
  res.render(`index`); //ahora en lugar de ejecutar un send vamos a utilizar un res.render que se encarga de renderizar con ejs
});
app.get("/person/:id", function (req, res) {
  res.render("person", { ID: req.params.id }); //Ahora el key es ID y el value es el que se recibe en parms
});
/*
app.get("/api", function (req, res) {
  res.json({ firstName: "Jhon", lastName: "Doe" });
});
*/
app.listen(port);
