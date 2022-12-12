function isPalindrome(word) {
  // Write your algorithm here
  let reverseword=word.split('').reverse().join('')
  if(word === reverseword)
  {
    return true;
  }
  else
      return false;
}

/* 
  Add your pseudocode here
  -i used else if to compare the two arguments
  -i returned true or false to identify the result

/*
  Add written explanation of your solution here
*//


//

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
