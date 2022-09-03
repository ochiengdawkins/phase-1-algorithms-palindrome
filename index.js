function isPalindrome(word) {
  // Write your algorithm here
  return word.split("").reverse().join("");

}
function reverse(word) {
  // 'abc' => 'cba'
  // const wordArray = word.split("");
  // const reversedWordArray = wordArray.reverse();
  // const reversedWord = reversedWordArray.join("");
  // return reversedWord;
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverse(word);

  return word === reversedWord;
}
/* 
  Add your pseudocode here
*/
//return word.split("").reverse().join("");

/*
  Add written explanation of your solution here
*/
// 'Joseph ' will reverse to 'hpesoJ'
// const word_array = word.split(""); // using .split to remove blank spaces /spliting a string into an array of substrings
// const reverse = wordArray.reverse(); // using .reverse to reverse the word
// const reversed_word = reversedWordArray.join("");  //returning our array as a string using the join method
// return reversed_word;

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;