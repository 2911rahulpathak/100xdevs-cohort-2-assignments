const fs = require("fs");

// my own asynchronous function
function kiratsReadFile() {
  //there is no cb passed
  console.log("inside kiratsread file");

  return new Promise(function (resolve) {
    console.log("Inside promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      console.log("Before resolve");
      resolve(data); //after resolve gets called-> JS engine checks whoever has done promise.then() -> I'm going to call it OnDone
    });
  });
}

// callback function to call
function onDone(data) {
  console.log(data);
}

//kiratsReadFile().then(onDone); // the return promise gets stored here
var a = kiratsReadFile(); //the way you get something return->return 1,0 etc the same it's returning new promise the object
console.log(a);
a.then(onDone);

/*
var a= new Date();
var d= new Promise(function(resolve){
//because resolve hasn't been called yet
//pending & resolved
});
console.log(d); //why pending??->line3
*/


/* 
Output-> Undefined
var d= new Promise(function(resolve){
//because resolve hasn't been called yet
//pending & resolved
resolve();
});

function callback(){
console.log(d); //why pending??->line3
}
d.then(callback);

*/

/*
put data in func(avaoid undefined)
var d= new Promise(function(resolve){
//because resolve hasn't been called yet
//pending & resolved
resolve("foo");
});

function callback(){
console.log(d); //why pending??->line3
}
d.then(callback);


*/





/* 
This : 
var d= new Promise(function(resolve){
//because resolve hasn't been called yet
//pending & resolved
setTimeout(function(){
resolve("foo");    
},10000)
});

function callback(){
console.log(d); //why pending??->line3
}
console.log("hello")
console.log(d)
d.then(callback);
console.log("hello 2")



*/