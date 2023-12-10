/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 3000);
  });
}

function calculateTime() {
  //Doubt
  const startTime = Date.now();

  // Using Promise.all to wait for all promises to resolve
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
    () => {
      const endTime = Date.now();
      const totalTime = endTime - startTime;
      console.log(`All promises resolved in ${totalTime} milliseconds`);
    }
  );
}
calculateTime();
