/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function removeBlankSpace(value) {
  if (value !== " ") {
    return true;
  } else {
    return false;
  }
}
function isAnagram(str1, str2) {
  if (str1 === "" && str2 === "") {
    return true;
  }
  const arr1 = str1.toLowerCase().split("").filter(removeBlankSpace);
  const arr2 = str2.toLowerCase().split("").filter(removeBlankSpace);
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      return true;
    } else return false;
  }
}

ans = isAnagram("Ssame", "ms sae");
console.log(ans);
module.exports = isAnagram;
