/* Regular Expressions Javascript */

//ways to construct RegEx in Javascript
const re = /ab+c/; //method 1
const reg = new RegExp("ab+c"); //method 2

//simple patterns to match characters with exam same sequence
const simple = /abc/;
let test0 = "Slabcraft"; 
console.log(test0.match(simple));

//special characters
const specialChar = /ab*c/; //* to match 0 or multiple occurences of the preceeding letter 'b'
let test1 = "Hello Mattabbbc";
console.log(test1.match(specialChar));

/* Character Classes */

var charClass1 = "[xyz] or [a-c]" // matches any character within the class
var charClass2 = "[^xyz] or [^a-c]" //matches any character that isn't part of the class
var charClass3 = "/.y/" //matches "ay" "my" and not the y in "yes"
var digits = /\d/; //matches digits 
var notDigits = /\D/; //matches any character that is not a digit
var alphaNumeric = /\w/; // [A-Za-z0-9_] 
var notAlphaNumeric = /\W/; // [^A-Za-z0-9_]
var whiteSpace = /\s/; //Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces.
var notWhiteSpace = /\S/; //Matches a single character other than white space

/*
\t = horizontal tab
\r = carriage return
\n = linefeed
\f = formfeed
\v = vertical tab
[\b] = backspace
\0 = null character
\cX = control character using CARET NOTATION
\xhh = matches character with the code hh (two hexadecimal digits)
\uhhhh = UTF-16 code unit with the the value hhhh (four hexadecimal digits).
\p{UnicodeProperty}, \P{UnicodeProperty} = matches character based on its unicode property
\ = escape or treat as special
x|y = disjuction matches either x or y
*/