// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// pop()
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift() //If you want to pop something from front of the array
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

//Put something in front of the array
// unshift()
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// concat()
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// forEach()
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function (item, index) {
    console.log(item, index);
  });

  //FOr each -> function name or pass function itslef
  /* 
  function funway(item,index){
    console.log(item,index);
  }
  */
}
forEachExample([1, 2, 3]);

// map()
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function (item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function (item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function (item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function (a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);

/* 
push-> unshift
push -> put on end
pop -> pop from very end
shift->pop at beginning
unshift -> push from beginning
*/

/*
FOrEach another example

const initialArray=[1,2,3];
function logthings(str){
  console.log(str);
}
initialArray.forEach(logthings);
30 min ->1.3

Iterate through array & apply a specified func to each element
array.forEach(callback)
we have array -> we'll use built in method forEach() of arrays 
send each element of array -> through callback to a func

#########################################################################
const initialArray=[1,2,3];
function logthings(str){
  console.log(str);
}
initialArray.forEach(logthings); //log things is callback 
// function forEach calling back another function 
//inside forEach it's basically calling logthings function 
//it's taking each element from array (Initial array)
//https://www.youtube.com/watch?v=uOZWH0KEUs4
*/
