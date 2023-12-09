const fs = require("fs");

//task1 -> printing on console
fs.readFile("1-counter.md", "utf-8", function (err, data) {
  console.log(data);
});

//Try to do an expensive operation below the file read and see how it affects the output

let count = 1;

for (let i = 0; i < 100000; i++) {
  count++;
}
console.log("hii");

for (let i = 0; i < 1000000000; i++) {
  count++;
}
console.log("most expensive task");
