/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  // Convert the string to lowercase for case insensitivity
  str = str.toLowerCase();

  // Remove non-alphanumeric characters from the string
  str = str.replace(/[^a-z0-9]/g, "");

  // Check if the reversed string is equal to the original string
  return str === str.split("").reverse().join("");
}

var ans = isPalindrome("Able, was I ere I saw Elba!");
console.log(ans);
module.exports = isPalindrome;
