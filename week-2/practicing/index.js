const express = require("express");
const app = express();

app.use();
//get
var users = [
  {
    name: "rahul",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  res.send("Going to get a checkup");
});

//post
app.post("/name", function (req, res) {
  const v = req.query.name;
  res.send("This is a posting method" + v);
});
//put
app.put("/put", function (req, res) {
  res.send("This is a put method");
});
//delete
app.delete("/delete", function (req, res) {
  res.send("this is a delete method");
});
app.listen(3000);
