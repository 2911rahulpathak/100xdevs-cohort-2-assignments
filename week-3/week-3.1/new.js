//Input validation

const express = require("express");

const app = express();

app.use(express.json());
app.post("/health-checkup", function (req, res) {
  //kidney =[1,2]
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneyLength;

  res.send("Your kidney length is" + kidneyLength);
});
app.listen(3000);
