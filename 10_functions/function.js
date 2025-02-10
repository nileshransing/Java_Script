// functions
// Regular function
function hello(){
    console.log("Hello KT");
}
hello();

// methods are functions 
const user ={
    name : "nilesh",
    greet:function(){
        console.log("Good Morning", this.name);
    }
}
user.greet();

// function have return value using return keyword
function add(num){
    return num + num;
}
let res =add(5);
console.log("result =",res);

// Named function - function  have name
    function namefun(){
    console.log("This is named function");
    }
    namefun();

//  Anonymus function - function they do not have a name
    const anony= function (){
    console.log("This is anonymus function");}
    anony();

//  Arrow function- using => 
    const mul =(a,b) =>{
        return a*b;
    }
    const ans= mul(5 ,5);
    console.log("mul =",ans);

// Function Expression: A function expression defines a function within an expression(returns something). The function can be anonymous or named.
const addi = function (a,b){
    return a + b;
};
console.log("Addtion is =", addi(4,6));

//Arguments: The arguments object is an array-like object available inside all non-arrow functions, containing the passed arguments.
function args(){
    console.log("args are =", arguments);
}
args(4,5,10);
args(3,6,8,9);

//Variadic functions are functions that can accept any number of arguments.
//argument object()
function mulof(){
    let total =1;
    let arr = Object.values(arguments); // convert object to array
    arr.forEach((element) =>{
        total *= element;
    })
    return total;
}
console.log("Mul is= ",mulof(7,5));
console.log("Mul is= ", mulof(9,6,4));

// Rest parameter
function divof(...numbers){
    total =1;
    numbers.forEach((num) =>{
        total /=num;
    });
   return total;
}
console.log("Div is= ",divof(10,5));
console.log("Div is= ",divof(9,3));

//Immediately Invoked Function Expression (IIFE): An IIFE is a function that is defined and immediately invoked.
(function (){
    console.log("iife function");
})();

//Generator Function: Generator functions use function* syntax and allow pausing and resuming execution with the yield keyword.
function* counter(stop) {
    let count  =5;
    while(count <=stop){
        yield count;
        count++;
    }
}
const num =counter(11);
console.log("counter= ", num.next());
console.log("counter= ", num.next());
console.log("counter= ", num.next());
console.log("counter= ", num.next());

//Async Functions: Async functions return a Promise and are used for handling asynchronous operations. You use the async keyword before the function.
async function fdata() {
    const response = await fetch("https://reqres.in/api/users?page=2",{
        method : "GET",
        body :null,
    });
    const data = await response.json();
    console.log("data =",data);
}
fdata();