var express = require("express");
var exphbs = require("express3-handlebars");
var http = require("http");
var path = require("path");
require('server/models/db');

var app = express();

app.set("port",process.env.PORT || 3001);
app.set("views",path.join(__dirname,"server","views"));
app.engine(".tmpl",exphbs({
	defaultLayout: "main", 
	extname: ".tmpl",
  handlebars: require("handlebars"),
  helpers: require("./helpers"),
	layoutsDir: path.join(__dirname,"server","views","layouts"),
	partialsDir: path.join(__dirname,"server","views","partials")
}));
app.set("view engine",".tmpl");
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser("Secret Code"));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname,"public")));

if(app.get("env") == "development") {
  app.use(express.errorHandler());
}

require("./routes")(app);

http.createServer(app).listen(app.get("port"),function () {
  console.log("Express Handlebars Server Listening on port " + app.get("port"));
});
