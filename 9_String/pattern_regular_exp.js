/* Patterns in JavaScript often refer to regular expressions (regex), 
which are used for matching patterns in strings. 
Regular expressions are very powerful tools for 
searching, replacing, and validating strings based on specific patterns.
 */

// literal notation 
let str= /nilesh/;
console.log("regular ex =",str);

//constructor notation
let str2 =new RegExp ("nilesh");
console.log("ex =", str2);

//Literal characters:
if(str.test("nilesh")){
    console.log("both match");
}else{
    console.log("Not match");
}

if ("nilesh".match(str2)) {
    //compare str to RegExp using match()
    console.log("both str1 and str2 match");
  }

  if ("nilesh" === str2.toString().slice(1, -1)) {
    // "/"1 and "/"-1
    //compare str to RegExp using match()
    console.log("both hello and regex2 match");
  }
  

  // pattren matching
//Metacharacters: Special characters with a specific meaning in regex.
/*
.(dot): Matches any single char(except newline).
^: Anchors the pattern to the start of the string.
$: Anchors the pattern to the end of the string
[]: Matches any one of the characters in the brackets.
\d: Matches any digit (equivalent to [0-9]).
\w: Matches any word character (letters, digits, or underscores).
\s: Matches any whitespace character (spaces, tabs, line breaks).
*: Matches 0 or more occurrences of the preceding element.
+: Matches 1 or more occurrences of the preceding element.
?: Matches 0 or 1 occurrence of the preceding element
*/

let reg = /nil../;
console.log(". ", reg.test("nil.esh"));

reg= /^nilesh ransing/;
console.log("^", reg.test("abc nilesh ransing"));

reg= /[#]/;
console.log("[]", reg.test("abc# nilesh ransing"));

reg= /\d/;
console.log("\d", reg.test("abc 45 nilesh ransing"));
console.log("\d", reg.test("abc# nilesh ransing"));

reg= /\w/;
console.log("\w ", reg.test("abc# nilesh ransing"));
console.log("\w ", reg.test( "!"));
console.log("\w ", reg.test( 4545));

reg= /\s/;
console.log("\s ", reg.test("abc# nilesh ransing"));
console.log("\s ", reg.test("ddsdsf"));
console.log("\s ", reg.test("45@45"));


reg= /n*r/;
console.log("* ", reg.test("nilesh niransing"));
console.log("* ", reg.test(""));
console.log("* ", reg.test("345%76"));

reg= /#+/;
console.log("+ ", reg.test("nilesh nira"));
console.log("+ ", reg.test(""));
console.log("+ ", reg.test("345#76"));

reg= /n?r/;
console.log("? ", reg.test("ni ransing"));
console.log("? ", reg.test("nile"));
console.log("? ", reg.test("ra%76"));

// Card Number	Card Type	Payment Status
// 5555 5537 5304 8194	MasterCard	APPROVED
// 5555 5555 5555 4444	MasterCard	APPROVED
// format one occurance or more of 5 5 5 4
regex = /^(45+\d{2})\s(5+\d{3})\s(4+\d{3})\s(\d{3}4$)/;
console.log(regex.test("4555 5237 4304 8194"));