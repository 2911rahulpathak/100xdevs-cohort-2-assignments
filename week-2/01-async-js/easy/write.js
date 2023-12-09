const fs = require("fs");

let data = "This is a file containing a collection of books.";

fs.writeFile("books.txt", data, function () {
  console.log("File written succesfully");
});
console.log("hello ");
