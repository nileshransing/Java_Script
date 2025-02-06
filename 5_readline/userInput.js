// const {console} = require("inspector")
const readline = require("readline")
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("enter the value pf a: ",(a) => {
    rl.question("enter the value of b: ",(b) => {
        console.log("sum = ", parseFloat(a) + parseFloat(b))
    });
});