/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

//solution 2
function isPalindrome(str) {
  // Convert the string to lowercase for case-insensitive comparison
  //const lowercaseStr = str.toLowerCase(); // doesn't account for spaces and punctuation marks when checking for palindromes
  const lowercaseStr = str.replace(/[^a-z]/gi, "").toLowerCase();

  // Reverse the string and compare it with the original string
  const reversedStr = lowercaseStr.split("").reverse().join("");

  // Check if the reversed string is equal to the original string
  return lowercaseStr === reversedStr;
}

module.exports = isPalindrome;
// Example usage:
//console.log(isPalindrome('radar'));  // Output: true
//console.log(isPalindrome('hello'));  // Output: false
//console.log(isPalindrome('Nan'));    // Output: true

//shit logic
//if (palindrome[i] == palindrome[palindrome.length - 1]) {
// if (palindrome[i + 1] == palindrome[palindrome.length - 2]) {
//}
//}

/* 
Solution :
 // Case-insensitive -> 'N' and 'n' mean the same
  const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, ""); // Remove non-alphabetic characters
  const palindrome = cleanedStr.split("");

  for (let i = 0; i < palindrome.length / 2; i++) {
    // Check if characters at corresponding positions match
    if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
      return false; // Not a palindrome
    }
  }
  return true; // Palindrome


*/
