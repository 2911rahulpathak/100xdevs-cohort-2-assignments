const express = require("express");
const app = express();
let numberofRequests = 0;
function ratelimitter(req, res, next) {
  numberofRequests++;
  console.log(numberofRequests);
  next();
}

app.get("/health-checkup", ratelimitter, function (req, res) {});
app.listen(3000);
