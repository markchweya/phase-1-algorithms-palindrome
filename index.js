function isPalindrome(word) {
  function isPalindrome(string) {
  // Write your algorithm here
}
let reversed = string.split("").reverse().join("");

  if (string === reversed){
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("racecar"));
/* 
  Add your pseudocode here
  
  Initialize empty function called "isPalindrome" with a parameter string in it
Adding a variable with the keword "reversed" and assigning a solution for reversing the passed argument using 
.split("") to split each letter in an array format, then .reverse() to reverse the letters then .join("") tojoin back the letters.
"if" statement to compare the passed argument and the reversed version whether true or false"
Return results.
 
*/


/*
  Add written explanation of your solution here

    1. Initialize empty function called "isPalindrome" with a parameter string in it
  2. using a variable "reversed" inside the string and reversing the passed argument to reversed i.e by using .split("") to split each letter in an array format, then .reverse() to reverse the letters then .join("") tojoin back the letters.
  3. The use of "if statement to compare the passed argument and the reversed version whether true or false"
  4. Return results.
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
