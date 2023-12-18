const mongoose = require("mongoose");

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

const user = new User({
  name: "Rahul",
  email: "rahul@gmail.com",
  password: "125345",
});
user.save().then(() => console.log("user")); //this is imp to hit database
/* 
Just put it inside a function:

const mongoose = require("mongoose");

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

app.post("/signup",function(req,res){
const username = req.body.username;
const password=req.body.password;
const name =req.body.name;

//do a check using findOne function
const existingUser = await User.findOne({email:username});
if(existingUser){
    return res.status(400).send("Username already exists")
}


const user = new User({
  name: name,
  email: username,
  password: password,
});
user.save()
res.json({
    "msg":"User Signed up"
})
})


*/
