var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
require("dotenv").config();

var app = express();
app.use(methodOverride("_method"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
  return res.json({status:"Success",msg:"Hello this is a test"});
});



app.listen(process.env.PORT || 3000, process.env.ID, function (req, res) {
  console.log("Server has started for HerokuScheduler at PORT 3000");
});
