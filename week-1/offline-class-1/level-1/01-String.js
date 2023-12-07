//Given a string -> "Rahul"

// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5); //Mostly Substring is depricated
//Any negative number =0 for substring: https://www.youtube.com/watch?v=PxD4cwADFys
/* 

function cut(str, startIndex, endIndex) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= startIndex && i < endIndex) {
      newStr = newStr + str[i];
    }
  }

  return newStr;

}
console.log(cut("Rahul", 2, 5));



*/

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World "); //trims the space from beg & end and not in between

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");


/* 
My comments for Learning:
1)str.length -> for length of string

2)str.indexOf(target) //target can be word anything that you want
If you didn't find anything then return -> -1

3)Also lets say you word is present 3 times & you need the last word index
str.lastIndexof(target)

4) str.slice(start, end)
5) str.substring(start,end)
The diff between slice & Substring
slice(0,4) -> from 0 till 3

6) Split
const value= "This is Replit prohgram";
console.log(value.split(" "));

To convert string into Array -> individually

split("")-< no space -> Individal characters of array
() -> inside this we need to specify delimeter -> ,
SPlit the string  in array given a delimeter , seperate in array
*/
