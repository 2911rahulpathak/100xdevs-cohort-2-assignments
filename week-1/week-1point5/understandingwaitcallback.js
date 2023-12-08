//create a.txt file

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

console.log("hi there");

let a=0;
for(let i=0;i<100000000;i++){
  a++;
}//longer than file read
console.log("hi there 2");

//now what will log first?
/*
after executing hi there

the for loop takes a really long time

fs.read() will resolve before for loop ->i.e when thread is busy running for loop

1)Will the thread go -> fs.read()? while its busy at for loop??
2) or will it complete for loop then console.log("hi there 2")
& then go to the async callback?


If you remember Maggie example:
The lady came back after 8 mins->but the guy was still chopping vegetables

The lady waited for 2 mins -> after guy was done chopping vegetable, did the lady hand over catchup to person.

Means in JS if your thread is busy, even if callback is resolved 
your thread will remain busy at loop, until it gets idle

*/