/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //string are not Mutable -> so turn it in Arrays
  //splitting is good but we also need to make sure of different casing
  //o(nlogn)
  str1 = str1.toUpperCase().split("").sort().join(""); // Splitting: "Welcome"(str) -> str.split() ->["W","E","L"...]
  str2 = str2.toUpperCase().split("").sort().join(""); // https://www.youtube.com/shorts/_uT3Qvge_rE
  return str1 === str2;
}

module.exports = isAnagram;

/* 
OPtimized solution -> HashMap (Table of Frequency)
//Length of 2 strings should be same

function isAnagram(str1, str2) {
if(str1.length !==str2.length) return false
//JS object as HashMap
const str1Count={}
const str2Count={}
const N=str1.length();
if (s.length !== t.length) return false;
  const sCount = {};
  const tCount = {};
  const N = s.length;
  for (let i = 0; i < N; i++) {
    if (!sCount[s[i]]) sCount[s[i]] = 0;
    if (!tCount[t[i]]) tCount[t[i]] = 0;
    sCount[s[i]]++;
    tCount[t[i]]++;
  }
}


*/
