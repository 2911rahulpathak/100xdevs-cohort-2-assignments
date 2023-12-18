const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "harkirat" || password != "pass") {
    res.status(400).json({ msg: "Something up" });
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({ msg: "something up with inputs" });
    return;
  }

  res.json({
    msg: "Your kidney is fine",
  });
});

app.listen(3000);


/*
In the above code introduce another route & do the same Auth & input validation
-DRY is incoming


-Optimised way is -> Middlewares
*/
