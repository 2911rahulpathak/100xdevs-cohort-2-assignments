const express = require("express");
const app = express();

function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.status(400).json({
      msg: "You are not age yet",
    });
  }
}

/*
When you know there is a Middleware that needs to be used in every route 
you remove from indivaul route & write it like:
app.use(Middleware)
*/
app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You have successfully riden the ride 1",
  });
});

app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You have successfully riden the ride 2",
  });
});

app.listen(3000);
