var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = lowerCase.map(a => a.toUpperCase())
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',':','<','=','>','?','@','[',']','\\','^','_','`','{','}','|','~'];

// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var passwordLength = window.prompt("How long of a password? Choose between 8-128 characters")
    var includeLowerCase = window.confirm("Do you want to include lower case letters?")
    var includeUpperCase = window.confirm("Do you want to include upper case letters?")
    var includeNumbers = window.confirm("Do you want to include numbers 0-9?")
    var includeSpecial = window.confirm("Do you want to include special characters?")
    var possibleOptions = []

    if (includeLowerCase && includeUpperCase && includeNumbers && includeSpecial) {
      possibleOptions = possibleOptions.concat(lowerCase, upperCase, numbers, specialCharacters);

    } else if (includeLowerCase && includeUpperCase && includeNumbers ) {
    possibleOptions = possibleOptions.concat(lowerCase, upperCase, numbers);

    } else if (includeLowerCase && includeUpperCase && includeSpecial ) {
      possibleOptions = possibleOptions.concat(lowerCase, upperCase, specialCharacters);

    } else if (includeLowerCase && includeSpecial && includeNumbers ) {
      possibleOptions = possibleOptions.concat(lowerCase, specialCharacters, numbers);

    }else if (includeSpecial && includeUpperCase && includeNumbers ) {
      possibleOptions = possibleOptions.concat(specialCharacters, upperCase, numbers);

    }else if (includeLowerCase && includeUpperCase) {
      possibleOptions = possibleOptions.concat(lowerCase, upperCase);

    }else if (includeLowerCase && includeNumbers) {
      possibleOptions = possibleOptions.concat(lowerCase, numbers);

    }else if (includeLowerCase && includeSpecial) {
      possibleOptions = possibleOptions.concat(lowerCase, specialCharacters);

    }else if (includeUpperCase && includeNumbers) {
      possibleOptions = possibleOptions.concat(upperCase, numbers);

    }else if (includeUpperCase && includeSpecial) {
      possibleOptions = possibleOptions.concat(upperCase, specialCharacters);

    }else if (includeNumbers && includeSpecial) {
      possibleOptions = possibleOptions.concat(numbers, specialCharacters);

    }else if (includeLowerCase) {
      possibleOptions = possibleOptions.concat(lowerCase);

    }else if (includeUpperCase) {
      possibleOptions = possibleOptions.concat(upperCase);

    }else if (includeNumbers) {
      possibleOptions = possibleOptions.concat(numbers);

    }else if (includeSpecial) {
      possibleOptions = possibleOptions.concat(specialCharacters);

    }
    console.log(possibleOptions);

    // console.log(passwordLength);
    // console.log(includeLowerCase);
    // console.log(includeUpperCase);
    // console.log(includeNumbers);
    // console.log(includeSpecial);
    
    // console.log(alphabet[Math.floor(Math.random()*alphabet.length)]);
    // console.log(numbers[Math.floor(Math.random()*numbers.length)]);
    // console.log(specialCharecters[Math.floor(Math.random()*specialCharecters.length)]);
    // console.log(password.value);
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
