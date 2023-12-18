//Middleware sitting between  the route & final Handler to make checks
const express = require("express");
const app = express();

function userMiddleware(req, res, next) {
  //extract userName & password from req
  if (username != "harkirat" || password != "pass") {
    res.status(400).json({ msg: "Incorrect input" });
  } else {
    next(); //if everything is fine it will make to reach the next cb
  }
}

function kidneyMiddleware(req, res, next) {
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({ msg: "something up with inputs Validation" });
  } else {
    next();
  }
}

app.get(
  "/health-checkup",
  userMiddleware,
  kidneyMiddleware,
  function (req, res) {
    //you can give a range of callback functions: cb1,cb2
    res.send("Your heart is healthy");
    //we'll never use send() -> we'll use json() transmissions happen via json
  }
);

app.listen(3000);
//read about ratelimitting

/* 
const express = require("express");
const app = express();

function userMiddleware(req, res, next) {}

app.get("/health-checkup", function (req, res,next) {
    //you can give a range of callback functions: cb1,cb2
    console.log("Hi from req1")
    //to send the control to next callback function use next
    next()
    //these act as pre-checks before the final function is called 
},function(req,res){
    console.log("Hi from req1")
});

app.listen(3000);



*/
