//select DOM elements
var generatePassword = document.getElementById('pass');
var clipboardCopy = document.getElementById('copy');

var charType = ["Include special characters?", "Include numbers?", "Include lowercase characters?", "Include uppercase characters?"];
var passLength;
var isSpecialChar;
var newPassword = "";

//initialize character types
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";
var lowerCase = 'abcdefghigklmnopqrstuvwxyz';
var upperCase = lowerCase.toUpperCase();

//build character types into array
var charTypesArr = [specialChar, numbers, lowerCase, upperCase];

//add event listener to generate password buton
generatePassword.addEventListener('click', generatePass);

//add event listener for clipboard copy button
clipboardCopy.addEventListener('click', copyText);

//get password DOM element
var showPass = document.getElementById('password');

//clipboard copy function
function copyText(event) {
    document.execCommand("copy");
}


//initiate the password prompts
function generatePass(event) {

    //initialize variables after every click
    isSpecialChar = [];
    newPassword = "";
    passLength = 0;

    //prompt user for password length
    passLength = prompt("Choose password length between 8 and 128 characters");
    console.log(passLength)

    //if password length is not between 8 and 128, abort
    if (passLength < 8 || passLength > 128) {
        return;
    }

    //if password length is satisfied, then confirm the following character types from charType
    for (var i = 0; i < charType.length; i++) {
        var char = confirm(charType[i]);
        //push results in new array to be checked to see if at least one is true;
        isSpecialChar.push(char)
        console.log(char)
    }

    //check to see if one of the character types have been selected
    var isChar = isSpecialChar.some(function (val) {
        return val === true
    })
    console.log(isSpecialChar)
    console.log(isChar);

    //if all criteria is met...
    if (isChar) {
        //set count variable
        var count = 0;
        //generate password
        //loop through char array
        for (var i = 0; i < passLength; i++) {
            //if special characters is true
            if (isSpecialChar[0] === true) {
                if (count < passLength) {
                    //split array values from character array
                    var specialCharacters = charTypesArr[0].split("");
                    //set random index
                    var rand0 = Math.floor(Math.random() * specialCharacters.length);
                    newPassword += charTypesArr[0].charAt(rand0);
                    count++;
                }
            }
            if (isSpecialChar[1] === true) {
                if (count < passLength) {
                    //split array values from numbers array
                    var numbersArr = charTypesArr[1].split("");
                    //set random index
                    var rand1 = Math.floor(Math.random() * numbersArr.length);
                    newPassword += charTypesArr[1].charAt(rand1);
                    count++;
                }
            }
            if (isSpecialChar[2] === true) {
                if (count < passLength) {
                    //split array values from lower case array
                    var lowerCaseArr = charTypesArr[2].split("");
                    //set random index
                    var rand2 = Math.floor(Math.random() * lowerCaseArr.length);
                    newPassword += charTypesArr[2].charAt(rand2);
                    count++;
                }
            }
            if (isSpecialChar[3] === true) {
                if (count < passLength) {
                    //split array values from upper case array
                    var upperCaseArr = charTypesArr[3].split("");
                    //set random index
                    var rand3 = Math.floor(Math.random() * upperCaseArr.length);
                    newPassword += charTypesArr[3].charAt(rand3);
                    count++;
                }
            }
        }
    } else {
        //abort and have user start over by clicking the generate password button again.
        alert("At least 1 character type must be chosen!  Try again.")
    }
    //output password to browser
    showPass.textContent = newPassword;

}