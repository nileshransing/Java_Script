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
let arr1= ["Nlesh", "amar"];
let arr2= ["bali","dipak"];
let arr3 =arr1.concat(arr2);
console.log("Concating array: ",arr3);

// reduce() - reduce array in single value by applying function
 let number = [1,3,4,67,5];
 let sum =number.reduce((accumulator, cureentvalue) => {
     return accumulator + cureentvalue;
 }, 0);
 console.log(" sum = ",sum);


