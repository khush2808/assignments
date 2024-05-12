/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let ans =0;
    for (let char of str.split('')){
      if(['a','e','i','o','u','A','E','I','O','U'].indexOf(char) !== -1){
        ans++;
      } 
    }
    return ans; 
}

module.exports = countVowels;