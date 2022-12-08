// Assignment Code
var generateBtn = document.querySelector("#generate");

var choiceArr = []

var charlngth = 8;

var alphLowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","x",]

var specialChar = ["!","@","#","$","%","^","&","*","~","?",]

var numberArr = ["1","2","3","4","5","6","7","8","9",]

var alphUpperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]

function generatePassword() {
  var password = "";
  for(var i = 0; i < charlngth; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

// Write password to the #password input
function writePassword() {

 var chosenPrompts = getPrompts();

 if(chosenPrompts) {
  var chosenPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = chosenPassword;
 }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function getPrompts() {
  charlngth = prompt("Please choose a character amount for your password between 8 and 128");

  if(isNaN(charlngth) || charlngth < 8 || charlngth > 128) {
    alert("Character length must be between 8 and 128, please try again")
    return false;
  }

  if(confirm("Would you like lowercase letters in your password")){
    choiceArr = choiceArr.concat(alphLowerArr)
  }

  if(confirm("Would you like uppercase letters in your password")){
    choiceArr = choiceArr.concat(alphUpperArr)
  }

  if(confirm("Would you like special characters in your password")){
    choiceArr = choiceArr.concat(specialChar)
  }

  if(confirm("Would you like numbers in your password")){
    choiceArr = choiceArr.concat(numberArr)
  }
return true

}