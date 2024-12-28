
// Nilesh Ransing  
console.log("hello Nil");
process.stdout.write("Hello KT");
process.stdout.write("Hello KT");
console.warn({ name:"admin"});
console.table({ name: "admin"}); 


/** Data types
 * String
 * Number
 * Boolean
 * Null
 * Object
 * Symbol
 * Undefined
 * 

*/

var name = "KT";
console.log("Name =",name);

let marks = 45;
console.log("Mark=",marks);

let submit= true;
console.log("Submit=",submit);

// Bigint 

var num=4.5035996e+15 ;
console.log("Number=",num);

//object

let subject = ["math", "English", "HTML", "CSS"];
console.table({ Subject:subject});

let emp ={
    Name:"Nilesh",
    Company:"Wipro",
    Salary:"45000",
};
console.table({emp});

let emp1 ={
    Name:"KT",
    Company:"Wipro",
    Salary:"4500000",
};
console.table({emp1});