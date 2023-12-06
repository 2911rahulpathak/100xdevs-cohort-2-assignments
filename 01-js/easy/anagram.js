/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //string are not Mutable -> so turn it in Arrays
  //splitting is good but we also need to make sure of different casing
  //o(nlogn)
  str1 = str1.toUpperCase().split("").sort().join("");
  str2 = str2.toUpperCase().split("").sort().join("");
  return str1 === str2;
}

module.exports = isAnagram;
