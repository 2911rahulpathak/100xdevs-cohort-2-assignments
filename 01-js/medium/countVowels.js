/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const str1 = str.toLowerCase().split("");
  let count = 0;
  //write our logic here
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str1[i] == vowels[j]) {
        count = count + 1;
      }
    }
  }
  return count;
}

module.exports = countVowels;
/*
My ideation:
I/p String: Rahul -> convert it to lowercase using toLowerCase() & also split it using .split("");
Now we get ["r","a","h","u","l"]

now also we need to check about vowels in the string

let's make array -> vowels ["a","e","i","o","u"]

now lets run 1st loop for str.length ->to loop through the given string
also run a loop for vowels & keep a counter variable which gets updated as the same element is found


*/
