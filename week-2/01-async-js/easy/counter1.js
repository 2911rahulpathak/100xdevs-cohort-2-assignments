let count = 0;

function counter() {
  count++;
  console.log("Counter" + count);
}

setInterval(counter, 1000);

/* 
Sol 2: 
let counter = 0;

setInterval(function () {
  for (let i = 1; i < n; i++) {
    counter++;
    console.log(counter);
  }
},1000);


clarity -> setInterval -> It will take function-> think of making a function
*/
