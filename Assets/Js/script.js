// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt user for password criteria
function generatePassword() {
  var passwordLength = prompt("Password length must be at least 8 and no greater than 128. Please enter password length:", "");

  passwordLength = parseInt(passwordLength)
  if (Number.isNaN(passwordLength)) {
    console.log(passwordLength)
    console.log("Non-numeric input or user cancel: " + passwordLength)
    return
  }
  else if (passwordLength && passwordLength >= 8 && passwordLength <= 128) {
    console.log("length in range: " + passwordLength)
  }
  else {
    console.log(passwordLength)
    console.log("length out of range: " + passwordLength)
    // prompt again
    generatePassword()
  }

  var validChars = ""

  if (passwordLength) {
    var useLowercase = confirm("Do you want to include lowercase characters?");
    if (useLowercase) {
      validChars += "abcdefghijklmnopqrstuvwxyz"
    }

    var useUppercase = confirm("Do you want to include uppercase characters?");
    if (useUppercase) {
      validChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    var useNumeric = confirm("Do you want to include numeric characters?");
    if (useNumeric) {
      validChars += "0123456789"
    }

    var useSpecial = confirm("Do you want to include special characters?");
    if (useSpecial) {
      //validChars += "~!@#$%^&*()_+{}|:"`-=;',./"    // JS doesn't like "
      validChars += "~!@#$%^&*()_+{}|:?`-=;',./"
    }
  }

  console.log("passwordLength: ", passwordLength, "validChars: ", validChars)
  var password = ""

  if (useLowercase || useUppercase || useNumeric || useSpecial) {
    for (var i = 0; i < passwordLength; i++) {
      // Generate a random number between 1 and passwordLength
      // Math.floor will round down, meaning we would get a number between
      //0 and passwordLength.
      var idx = Math.floor(Math.random() * validChars.length);
      password += validChars[idx]
      //console.log("idx: ", idx, "validChars[idx]: ", validChars[idx]);
    }
  }

  // Display password
  console.log("password: ", password);
  document.getElementById("password1").innerHTML = password
}


