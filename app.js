var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
require("dotenv").config();
var CronJob = require("cron").CronJob;
var app = express();
app.use(methodOverride("_method"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  return res.json({ status: "Success", msg: "Hello this is a test" });
});

//Use node-cron to check how the scheduler functionality is working, comment it out before deploying 
app.get("/check", async (req, res) => {
  var job = new CronJob(
    "* * * * * *",
    function () {
      console.log("You will see this message every second");
      // ENTER YOUR TASK HERE
    },
    null,
    true,
    "America/Los_Angeles"
  );
  job.start();
  return res.json({status:"Success", msg:"Route launched"});
});

app.listen(process.env.PORT || 3000, process.env.ID, function (req, res) {
  console.log("Server has started for HerokuScheduler at PORT 3000");
});
