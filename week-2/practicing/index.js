const express = require("express");
const app = express();

function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}
app.get("/", function (req, res) {
  //res.send("Hello there I'm get function");
  //for getting the query paramter
  const n = req.query.n;
  const ans = sum(n);
  res.send("hi your ans is :" +ans);
  
});

app.listen(3000);
