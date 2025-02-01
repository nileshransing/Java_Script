/**
 *  Documentation type comment
 *  */  

/** primitive Data types - 
 * String
 * Number
 * Boolean
 * Null
 * Symbol
 * Undefined
*/
  //  Data Types - number
let number =45;
console.log("Number = ",number);
console.log("data type = ",typeof number);
 number =45.4565;
console.log("Number = ",number);
console.log("data type = ",typeof number);

// String
let Name ="Rahul";
console.log("Name = ",Name);
console.log("data type = ",typeof Name);
 Name ="V";
console.log("Name = ",Name);
console.log("data type = ",typeof Name);

// Boolean
let bool = true;
console.log("Bool = ",bool);;
console.log("data type= ",typeof bool);

// null
let a=null;
console.log("Null = ",a);
console.log("Data Type = \n",typeof a);

//undefined
let n;
console.log("n is = ",n);
console.log("data type = ",typeof n);

// non primitive data types
// Array 
  let name=["Nilesh", "Amar", "Sahil","Ajay"];
  console.log("Names = ",name);
  console.log("index 1 =",name[1]);
  console.log("Data type is = ",typeof name);

  let Marks=[45, 56, 78, 59, 88, 81];
  console.log("Marks = ",Marks);
  console.log("index 4 =",Marks[4]);
  console.log("Data type is = ",typeof Marks);

  // Object
let bike1 = {
    bike_name: "Shine",
    bike_avg:55,
    bike_fuel: "petrol",
    bike_company: "Honda",
    bike_price:"115054.45$"
}
console.log("Bike Details= ",bike1);
console.log("Bike Price= ",bike1.bike_price);
console.log("data type =", typeof bike1);

bike1 = {
    bike_name: "Unicorn",
    bike_avg:50,
    bike_fuel: "petrol",
    bike_company: "Honda",
    bike_price:"125054.45$"
}
console.log("Bike Details= ",bike1);
console.log("Bike Price= ",bike1.bike_price);
console.log("data type =", typeof bike1);

bike1 = {
    bike_name: "KTM Duke 125:",
    bike_avg:40,
    bike_fuel: "petrol",
    bike_company: "Mattighofen, Austria",
    bike_price:"250000$"
}
console.log("Bike Details= ",bike1);
console.log("Bike Price= ",bike1.bike_price);
console.log("data type =", typeof bike1);

bike1 = {
    bike_name: "Activa 125",
    bike_avg:60,
    bike_fuel: "petrol",
    bike_company: "Honda India",
    bike_price:"150000$"
}
console.log("Bike Details= ",bike1);
console.log("Bike Price= ",bike1.bike_price);
console.log("data type =", typeof bike1);