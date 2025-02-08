// que 1
// Extrating date year and month from date format 

let str1 ="2025-02-08";
console.log("Month is =", str1.slice(5,7));
console.log("Year is =", str1.slice(0,4));

// using split()

// que 2
let str2 ="Amar is *** boy";
console.log("New String is using replace() : ",str2.replace("***","good"));

// que 3
let str3 = "India Is My Country";
let lw= str3.toLowerCase();
console.log(lw);
console.log("New sting is = ", lw.replaceAll(" ","_"));
