/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function delay(milliseconds) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
      
    }, milliseconds);
  });
}

// Example: Halting the thread for 3 seconds
console.log("Start");
delay(5000).then(() => {
  console.log("End");
});
console.log("enneeene")
