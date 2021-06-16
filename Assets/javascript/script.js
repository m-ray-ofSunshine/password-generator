var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = lowerCase.map(a => a.toUpperCase())
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ':', '<', '=', '>', '?', '@', '[', ']', /'\'/, '^', '_', '`', '{', '}', '|', '~'];

// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  function generatePassword() {
    var possibleOptions = []
    var passwordLength = window.prompt("How long of a password? Choose between 8-128 characters")
    var numLength = Number(passwordLength);
    console.log( numLength)

    if (passwordLength > 128 || passwordLength < 8 || numLength == NaN) {
      window.alert("Password length must be within 8 - 128 characters and a number!")
      return "Try Again";
    }
    
    var includeLowerCase = window.confirm("Do you want to include lower case letters?")
    var includeUpperCase = window.confirm("Do you want to include upper case letters?")
    var includeNumbers = window.confirm("Do you want to include numbers 0-9?")
    var includeSpecial = window.confirm("Do you want to include special characters?")
    var passwordInput = []

    if (includeLowerCase && includeUpperCase && includeNumbers && includeSpecial) {
      possibleOptions = possibleOptions.concat(lowerCase, upperCase, numbers, specialCharacters);

    } else if (includeLowerCase && includeUpperCase && includeNumbers) {
      possibleOptions = possibleOptions.concat(lowerCase, upperCase, numbers);

    } else if (includeLowerCase && includeUpperCase && includeSpecial) {
      possibleOptions = possibleOptions.concat(lowerCase, upperCase, specialCharacters);

    } else if (includeLowerCase && includeSpecial && includeNumbers) {
      possibleOptions = possibleOptions.concat(lowerCase, specialCharacters, numbers);

    } else if (includeSpecial && includeUpperCase && includeNumbers) {
      possibleOptions = possibleOptions.concat(specialCharacters, upperCase, numbers);

    } else if (includeLowerCase && includeUpperCase) {
      possibleOptions = possibleOptions.concat(lowerCase, upperCase);

    } else if (includeLowerCase && includeNumbers) {
      possibleOptions = possibleOptions.concat(lowerCase, numbers);

    } else if (includeLowerCase && includeSpecial) {
      possibleOptions = possibleOptions.concat(lowerCase, specialCharacters);

    } else if (includeUpperCase && includeNumbers) {
      possibleOptions = possibleOptions.concat(upperCase, numbers);

    } else if (includeUpperCase && includeSpecial) {
      possibleOptions = possibleOptions.concat(upperCase, specialCharacters);

    } else if (includeNumbers && includeSpecial) {
      possibleOptions = possibleOptions.concat(numbers, specialCharacters);

    } else if (includeLowerCase) {
      possibleOptions = possibleOptions.concat(lowerCase);

    } else if (includeUpperCase) {
      possibleOptions = possibleOptions.concat(upperCase);

    } else if (includeNumbers) {
      possibleOptions = possibleOptions.concat(numbers);

    } else if (includeSpecial) {
      possibleOptions = possibleOptions.concat(specialCharacters);

    } else {
      window.alert('You need to select at least one criteria')
      return "Try Again";
    }

    for (var i = 0; i < passwordLength; i++) {
      passwordInput.push(possibleOptions[Math.floor(Math.random() * possibleOptions.length)])
    }
    return passwordInput.join('')


  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
