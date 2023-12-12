const express = require("express");

const app = express(); // returns express object
//using this object -> we can perform many Methods
//console.log(app);
const PORT = 3000; //logical construct used to idenify the process

//get -> path
app.get("/", function (req, res) {
  //const userInfo = req.query.user;
  // ?user = nandd ->o/p

  res.send("Server says hii");
  //console.log(userInfo);
  //  console.log(req, res);
  //console.log("Client says hii");
  //when you implement res -> so goes to client side
});

app.listen(PORT, function () {
  console.log("hello world");
}); //should not stop keep on listening to these requests from clients

/* 
GET ->used to request Data from server(Read)


POST ->  used to submit data 


req & res -> obj

req->req obj contains info about incoming HTTP request
cleint,headers,parameters


res-> construct & send HTTP response back to client
setting Headers,status code,sending data
*/
/*
app.use(function (req, res, next) {
  console.log("Middleware 1");
  next(); //which next middleware function should I go
}); //you can pass 3rd argument also here

app.use(function (req, res) {
  console.log("Middleware 2");
});

/*  

*/
