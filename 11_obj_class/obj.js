let obj1 ={
    name: "nilesh",
    age:22,
    branch:"ENTC",
    job:"Web Developer",
};
console.log("obj1 =",obj1);

let obj2 =new Object();

    obj2.name="bali";
    obj2.age =22;
    obj2.branch="com";
    console.log("obj2 =" ,obj2);

// Accessing object properties
console.log("Name = ",obj2.name);
console.log("Age= ",obj2["age"]);

// Modifiying properties
obj1.name= "kt";
obj2.age=19;
console.log(" Modi name =",obj1["name"]);

// Add properties
obj1.year = 2024;
console.log("year =",obj1["year"]);
console.log("Add =",obj1);
// Delete properties

delete obj1.year;
console.log("Delete =",obj1);

// checking if properties
// using for in loop
for(key in obj1){
    console.log("key=",key ,"    value= ",obj1[key]);
}

// properties extraction
console.log("object key =", Object.keys(obj1));
console.log("object values =", Object.values(obj1));
console.log("object entries =", Object.entries(obj1));

// for each loop
Object.keys(obj1).forEach((key) =>
console.log("key =",key,  "value =",obj1[key])
);

// merging properties
 let product1 ={name :"Amar"};
 let product2 ={age :22};
 let product3 = {...product1,...product2};
 console.log("product3 =",product3);

 //length
 console.log("length =" , Object.keys(obj1).length);

// object methods
let obj3 ={
    name : "Dipak",
    run:function(){
        console.log("Run ", this.name);
    }
}
obj3.run();

// let product4 = {
//     name: "cherry",
//     wt: "500gm",
//     display: () => {
//       console.log("name:", this.name, " wt=", this.wt);
//     },
//   };
//   product4.display();
