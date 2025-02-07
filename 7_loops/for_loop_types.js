//  for of loop

let bike=["shine" , "Unicorn", "KTM","FZS"];
for(b of bike){
    console.log(b);
}

// for in loop
let object ={
    id : 45,
    name:"Nilesh",
    branch:"ENTC",
}
for(key in object){
    console.log( key,"=", object[key]);
}

// for each loop
let fruits = ["apple", "Mango", "Banana", "cherry"];
  // using arrow =>
fruits.forEach((f1) =>{
    console.log(f1);
} );
