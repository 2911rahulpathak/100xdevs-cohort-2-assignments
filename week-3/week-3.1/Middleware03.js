const express = require("express");
const app = express();

function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

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
});

app.get("/ride2", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "You have successfully riden the ride 2",
    });
  } else {
    res.status(400).json({
      msg: "You are of not age yet",
    });
  }
});

app.listen(3000);
