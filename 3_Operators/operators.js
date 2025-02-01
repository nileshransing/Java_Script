// Arthmetic Operators
let a =45;
let b =18;
console.log("add = ",a+b);
console.log("Sub = ",a-b);
console.log("Mul = ",a*b);
console.log("Div = ",a/b);
console.log("Module =",a%b);

// Assignment Operators
// Assign operator
b=34; 
console.log("b=",b);
b+=17;
console.log("b+=",b);
b-=17;
console.log("b-=",b);
b*=17;
console.log("b*=",b);
b/=17;
console.log("b/=",b);
b%=17;
console.log("b%=",b);

// Comparision Opretors
let n=23;
let m="25";
console.log("==",n==m);
console.log("===",n===m);
console.log(">",n>m);
console.log("<",n<m);
console.log(">=",n>=m);
console.log("<=",n<=m);
console.log("!=",n!=m);

// Logical Operators
let x =true;
let y=false;
console.log("x && y", x && y);
console.log("x && x", x && x);
console.log("x || y", x || y);
console.log("y || y", y || y);
console.log("!y", !y);

// Bitwise Operator
console.log("& And = ", 5 & 4);  // Bitwise And
console.log("| or = ", 5 | 4); // Bitwise or
console.log("^ xor = ", 5 ^ 4);  // Bitwise xor
console.log("Not = ",  ~4); // Bitwise not

// Shift operator
console.log("<< ",2<<1);
console.log(">>",5>>1);

// Ternary operator
const Marks=91;
Marks >=35 ?  console.log("Congratulation You are pass") : console.log("Sorry You are fail");

// coma operator
console.log(", operator= ",a=4,b=45, "a+b=",a+b);

// Unary Operator
a=10;
console.log("++a pre Increament= ", ++a);
a=10;
console.log("a++ post Increament= ", a++);
a=10
console.log(a--);
b=10;
console.log(--b);

// Relational Operators
// object
const stud ={
    stud_id: 1,
    Name:"Nilesh",
    Marks: 74.70,
};
console.log("in: ","Marks" in stud);
console.log("in: ","Name" in stud);

// class
class bike{
    bike(name){
        this.name =name;
        console.log(this.name);
    }
}
let shine = new bike("shine"); // object
console.log("instanceof: ",shine instanceof bike);

 //String Operators
 let name= "fname"+"mname"+"lname";
 name+="string ";  // concating string
 console.log("name =",name);

// chainig Operator
let bike1 ={
    b_name :"CB Shine",
    b_avg:55,
    b_price:120045,
    b_company:"Honda",
};
let bike2 ={
    b_name :"FZS",
    b_avg:45,
    b_price:167099,
    b_company:"Yamaha",
};
console.log("check ?.", bike1?.b_avg);
console.log("check ?.", bike2?.b_price);