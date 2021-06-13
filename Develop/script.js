var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharecters = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',':','<','=','>','?','@','[',']','\\','^','_','`','{','}','|','~'];

// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    console.log(alphabet[Math.floor(Math.random()*alphabet.length)]);
    console.log(numbers[Math.floor(Math.random()*numbers.length)]);
    console.log(specialCharecters[Math.floor(Math.random()*specialCharecters.length)]);
    
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
