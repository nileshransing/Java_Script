let arr=["Nilesh", "Amar", "Bali","Dipak"];
// printing array 
console.log("Array is 😈 ",arr);

arr.forEach(function (a1){
    console.log("👽",a1);
});

// methods or functions of array
// length
console.log("length of arr : ",arr.length);

// indexOf - return index of element
console.log("Index of :", arr.indexOf("bali"));

// push - add elemet at last
 arr.push("Mangesh");
console.log(arr);

//pop - delete element at last
arr.pop();
console.log(arr);

//unshift - add element at first
arr.unshift("ganu");
console.log(arr);

//shift - delete element at first
arr.shift();
console.log(arr);

let fruit = ["apple", "mango", "banana","cherry"];
fruit.forEach( function (f1){
    console.log("Fruits are 😎: ",f1);
})

// map()
let bigfruit = fruit.map((fruit) => fruit.toUpperCase());
console.log("big = ", bigfruit);
console.log("type of array :", typeof bigfruit);

 // filter()
 let num= [23,54,67,1,99,2,45];
 let smallnum =num.filter((n) => n<=45);
 console.log("small num = ",smallnum);

// spread operator - allow to copy element to other array
let car =["BMW", "swift","Balano","creta","fortuner"];
let mycar=[...car];
console.log("Mycar : ",mycar);

// Array Destruting 
let [c1,c2] = car;
console.log("c1 :",c1);
console.log("c2 :",c2);

// concat - add two string
let arr1= ["Nilesh", "amar"];
let arr2= ["bali","dipak"];
let arr3 =arr1.concat(arr2);
console.log("Concating array: ",arr3);

// reduce() - reduce array in single value by applying function
 let number = [12,22,4,68,8];
 let sum =number.reduce((accumulator, cureentvalue) => {
     return accumulator + cureentvalue;
 }, 0);
 console.log(" sum = ",sum);

 // find() - find first element that satifies the provided condition
 let found= number.find( (num) => num < 4)
 console.log("Found  = ",found);

 //some() - Checks if at least one element passes the test in true or false
 let some = num.some((num) => num%3==0);
 console.log("Some = ",some);
 
// every() - Checks if all elements pass the test in true or false
let ever= number.every( (num) => num % 2==0)
 console.log("Every = ",ever);

 // slice -  Returns a shallow copy of a portion of an array
 let str= "Nilesh";
 let slice = str.slice(0,4);
 console.log("slice =",slice );

 //sort() - Sorts the array in place
 let a =[45,6,7,22,99];
 a.sort((n,m) => n-m); // ascending
 console.log("Sorted array ascending order =",a);
 a.sort((n,m) => m-n); // descending
 console.log("Sorted Array descending order =",a);

 // //reverse() - Reverses the array in place
 let b =[45,77,7,22,99];
 b.reverse();
 console.log("Reverse order=",b);

//flat() - Flattens a multi-dimensional array
let array = [1, 45,[2, 3], [4, 5,67]];
let flatarr = array.flat();
console.log("flat arr=", flatarr);

//includes() - Checks if an array contains a specific element
 aaray6 =[2,4,5];
let inc = aaray6.includes(4);
console.log("includes =",inc);
 

