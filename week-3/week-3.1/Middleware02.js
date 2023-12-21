const express = require("express");
const app = express();

//function that returns a boolean if the age of the person is more than 14
function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

//Initially this route can be accessed directly by someone
//There is no Middleware trying to block or protect this route
//There must be checks
app.get("/ride1", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "You have successfully riden the ride 1",
    });
  } else {
    res.status(400).json({
      msg: "You are of not age yet",
    });
  }
  /*
    res.json({
    msg: "You have successfully riden the ride 1",
  });
  */
});
app.listen(3000);
