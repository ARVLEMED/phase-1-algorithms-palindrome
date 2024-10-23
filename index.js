function isPalindrome(word) {

  let testWord = word.toString().replace(/\s+/g, '').toLowerCase();
  let rev = testWord.split('').reverse().join('');
  
  return rev === testWord;
}

console.log(121);
console.log('love');
/* 
  split the string,reverse and join
  boolean to check the string if it is true or false
  return true or false
*/

/*
  the function will take in the string ,split it, remove whitespaces,convert it to lowercase,
  then join and compare it with the original string
*/

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
