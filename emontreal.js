var express = require("express"); // require module
var app = express(); // init express app
var router = express.Router(); // init express router
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use(express.static(__dirname + '/public'));

app.use(router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(process.env.PORT || 3000, function(){ // run on localhost:3000 or Heroku dynamic port
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
