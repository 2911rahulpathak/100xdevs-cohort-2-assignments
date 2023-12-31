/*
//arrow
function sum(a, b) {
  return a + b;
}

const sum = (a,b) =>{   

}

const sum = sum(10, 20);
*/

//MAP
/* 
given an array, give me back a new array in which every value is multiplied by 2
[1,2,3,4,5]
[2,4,9,8,10]
*/
const input = [1, 2, 3, 4, 5];
function transform(i) {
  return i * 2;
}

//map(arr, transform); //this is not the how syntax looks but a slighlty differenty
// It's implemented on Array class
input.map(transform);

/* 
input.map((i)=>{
    return i*2;
})

*/

//You are told to transform arrays we use map
