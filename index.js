function isPalindrome(word) {
  
  // Write your algorithm here
  let splitWord = word.split("");
  let reverseWord=[...splitWord].reverse()
   if(splitWord.join("")===reverseWord.join("")){
    return true
   }
   else{
    return false
   }

}

/* 
  Add your pseudocode here
  write a function called is palindrome
  split the word
  reverse the copy of word
   write an if statement to return true if the split word is equals to the reversed word
  also write an else statement to return false if the if statement is not true
*/

/*
  Add written explanation of your solution here
   write a palindrome function
  a palindrome is a word that reads forward as backwards
  it takes in a sting
 split the word and also reverse the copy of the splited word
 check if the two matches if they do that word is palindrome 
  if they do not match return false
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  //testcases
  console.log("Expecting: true");
console.log(isPalindrome("madam"));
console.log("Expecting: false");
console.log(isPalindrome("cat"));
console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
