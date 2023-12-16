const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "harkirat" || password != "pass") {
    res.status(400).json({ msg: "Somethings up with your ionputs" });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({ msg: "Somethings up with your ionputs" });
    return;
  }
  // do something with kidney here
  res.json({
    msg: "Your kidney is fine!",
  });
});

app.listen(3000);

/* 
01:

const express = require("express");

const app = express();
What about pre-checks?? -> Middlewares
1. Auth checks? (Does this user have funds to visit the doctor)
2. Ensure input validation by the user is valid(BP/blood tests)

//exposing a single route for now
app.get("/health-checkup", function (req, res) {
res.send("Your heart is healthy")
}






*/




// More on Query: https://www.google.com/?q=java  (? query parameter & to add)
// console.log(req.query)    -> also learn about Destructuring