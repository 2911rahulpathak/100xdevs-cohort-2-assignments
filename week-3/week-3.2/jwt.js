const jwt = require("jsonwebtoken");

//generation decode verify

const value = {
  name: "harkirat",
  accountNumber: 123123123,
};

//jwt
const token = jwt.sign(value, "secret"); //using this token anyone can decode & see whats inside this
console.log(token);

const verifykey = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTcwMzI2Nzg3N30.d0AmKM9TQYOcP-Hj9buMRtVpGbtFSYagEyEMqtT_lWU",
  "secret"
);
console.log(verifykey);


/*  
Try - catch
function findLength(name) {
  return name.length;
}

const ans = findLength(); //undefined
console.log(ans);
//Throws an error & stops its execution


//after the error you still want your code to be executed-> try catch
console.log("Hi after getting Type error"); //when will this line run?
//for this we need to catch errors

jwt.verify-> gives back value or throws an error


*/