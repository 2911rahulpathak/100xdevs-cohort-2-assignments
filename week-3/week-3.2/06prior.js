const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:123admin@cluster0.sgj7wka.mongodb.net/userappnew"
);

//It will have users Table
//have name which is string
const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  //do a check using findOne function
  const existingUser = await User.findOne({ email: username });
  //CRUD => create,read,update,delete
  if (existingUser) {
    return res.status(400).send("Username already exists");
  }

  const user = new User({
    name: name,
    email: username,
    password: password,
  });
  user.save();
  res.json({
    msg: "User Signed up",
  });
});

app.listen(3000);
