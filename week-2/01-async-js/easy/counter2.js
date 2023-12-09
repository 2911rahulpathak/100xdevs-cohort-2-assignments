// Without using setInterval, try to code a counter in Javascript

let counter = 0;

function countupdate() {
  counter++;
  console.log("Counter:" + counter);

  setTimeout(countupdate, 1000);
}
countupdate();

/*
let counter = 0;

function dontknow() {
  for (let i = 0; i < 1; i++) {
    counter++;
    console.log("counter : " + counter);
    setTimeout(dontknow, 1000);
  }
}
dontknow();
*/

// #####################################################################
/*
Learning: Inorder for setTimeout function to call again & again like setinterval
It will need to call same function again & again
so instead of making function inside make setTimeout call inside that func 


*/
