var express = require("express");
var exphbs  = require("express3-handlebars");

var app = express();

app.set("port",process.env.PORT || 3001);
app.engine(".tmpl",exphbs({defaultLayout: "main", extname: ".tmpl"}));
app.set("view engine",".tmpl");
app.enable("view cache");

app.get("/",function (req,res) {
  res.render("home");
});

app.listen(app.get("port"));
console.log("Express Handlebars Server Listening on port " + app.get("port"));
