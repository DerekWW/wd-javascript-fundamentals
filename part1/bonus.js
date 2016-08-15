/*
The purpose of this challenge is to be able to encode and decode a string using the Caesar cipher.

https://en.wikipedia.org/wiki/Caesar_cipher

Each string character has a numeric representation called an ASCII code. For example, the character "a" has an ASCII code of 97 and the character "b" has an ASCII code of 98.

https://en.wikipedia.org/wiki/ASCII#ASCII_printable_code_chart

JavaScript has a pair of methods to convert characters to and from ASCII codes.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

The Caesar cipher works like this.

- Convert the character "a" to the ASCII code 97.
- Add 13 to that integer, resulting in 110.
- Convert the new ASCII code to a character, resulting in "n".

If by adding 13 to an ASCII code results in a number greater than 122 (i.e. "z"), wrap back around to the start of the alphabet.

It'll take a few steps to solve this cipher. Have fun!
*/

// Define a function named caesarShiftInt that takes one argument
//    integer (number)
//
// If the integer is less than 97
//    Throw an error with the message 'Error: integer too low'
// If the integer is greater than 122
//    Throw an error with the message 'Error: integer too low'
// If the integer + 13 would be greater than 122, the ASCII code for 'z'
//    Return an integer that is "wrapped" around
// Otherwise
//    Return the integer plus 13
//
// For example, given 97, then return 110. And given 110, then return 97.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
function caesarShiftInt(integer) {
  if (integer < 97) {
    throw 'Error: integer too low';
  }
  if (integer > 122) {
    throw 'Error: integer too high';
  }
  if (integer + 13 > 122) {
    return (96 + ((integer + 13) - 122));
    // wrap
  }else {
    return integer + 13;
    // return int + 13
  }
}

// Define a function named caesarShiftChar that takes a one argument
//    char (string of one character)
//
// If the string is not a lowercase letter
//    Return the string as is
// Otherwise
//    Return the char shifted using the caesarShiftInt() function
//
// For example, given '!', then return '!'. But given 'a' or 'A', return 'n'.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

function caesarShiftChar(char) {
  var returnValue;
  if (char.charCodeAt(0) < 65 || char.charCodeAt(0) > 122 || char.charCodeAt(0) > 90  && char.charCodeAt(0) < 97 )  {
    return char;
  }else {
    return String.fromCharCode(caesarShiftInt(char.toLowerCase().charCodeAt(0)))
    }

}



// Define a function named encodeMessage that takes a one argument
//    message (string)
//
// Return the encoded version of the message. For example, given
// 'Hello, there!', then return 'uryyb, gurer!'.
//
// HINT: You'll need a loop for this.
function encodeMessage(message) {
  var returnString = '';
  for (var i = 0; i < message.length; i++) {
    returnString += caesarShiftChar(message[i]);
  }
  return returnString;
}



// Define a function named decodeMessage that takes a one argument
//    message (string)
//
// Return the decoded version of the message. For example, given
// 'uryyb, gurer!', then return 'Hello, there!'.
//
// HINT: Is there a way to use the encodeMessage() function?
function decodeMessage(message) {
  return encodeMessage(message);
}
