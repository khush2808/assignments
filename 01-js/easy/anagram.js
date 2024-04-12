/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let s1 = (s) => {
        return s.split("").sort().join("");
    };

    newstring = s1(str1.toLowerCase());
    newstring2 = s1(str2.toLowerCase());
    return newstring == newstring2;



}

module.exports = isAnagram;