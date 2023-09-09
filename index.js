// function reverseString(word) {
//   // TODO: implement string reversing functionality
//   return word;
// }

// function isPalindrome(word) {
//   // reverse the input string
//   const reversedWord = reverseString(word);
//   // if the reversed string is the same as the input
//   if (word === reversedWord) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function reverseString(word) {
//   // create an array from the input string
//   const wordArray = word.split("");
//   // reverse the array
//   const reversedWordArray = wordArray.reverse();
//   // create a string from the reversed array
//   const reversedWord = reversedWordArray.join("");
//   // return the reversed string
//   return reversedWord;
// }

// function isPalindrome(word) { 
  // Write your algorithm here
  // I need to make an isPalindrome function that returns either true or false. When the input string is the same forwards and backwards, I should return true. That means that if the input string is the same after I reverse it, I should return true. For instance, "mom" in reverse is also "mom", and "racecar" in reverse is also "racecar", so my solution should return true for these cases. "hi" in reverse is "ih", so my solution should return false for this case.
// }

/* 
  Add your pseudocode here
  reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  Add written explanation of your solution here
*/

function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
