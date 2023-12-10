/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function afternseconds(n) {
  return new Promise(function (resolve) {
    //doing some async tasks
    setTimeout(function () {
      resolve("It is running after " + n + " seconds");
    }, n * 1000);
  });
}

afternseconds(5).then(function (result) {
  console.log(result); //result is something which is being passed by resolve to .then()
});
