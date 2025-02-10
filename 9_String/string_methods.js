// concating two string
let fname= "Nilesh";
let lname=" Ransing";
let fullname= fname +" "+ lname;
console.log(fullname);

// using concat()
let cn=fname.concat(lname);
console.log("Using concat() = ",cn);

//escape char
let quote ='he said "nilesh"';
console.log("quote =",quote);

let multilinestring =`thise is line
these is line throw
these is line three`;
console.log("multiline  = ",multilinestring);

//mod in string 
let str5= "hello";
let modification = "j" + str5.slice(1);
console.log(modification);