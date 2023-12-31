const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  //const today = new Date().toLocaleDateString();
  //for more format power
  const options = { year: "numeric", month: "long", day: "numeric" };
  const today = new Date().toLocaleDateString("en-US", options);
  //console.log(today);
  res.send(today);
});
app.listen(3000);
