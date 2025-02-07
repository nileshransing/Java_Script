// que1 
// using map function
let ages =[21,45,18, 7,77,1,,9];
let categories = ages.map((age) =>{
    if(age>=18){
        return "Adult";
    }
    else{
       return "Minor";
    }
});
console.log("Categories = ",categories);

// que2
// using filter function

let product =[
    {name:"milk", expireDate: new Date(25, 1,7), instock:true},
  {name:"cheese", expireDate: new Date(25, 1,23), instock:true},
   { name:"card", expireDate: new Date(25, 1,1), instock:true},
   { name:"butter", expireDate: new Date(25, 1,3), instock:true}
]
let exproduct =product.filter((ex) => {
    if(ex.expireDate< new Date (25,1,7)){
        return "Expire product";
    }
});
console.log("expire product =", exproduct);
