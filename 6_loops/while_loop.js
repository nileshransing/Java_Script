// let str ="Nilesh";
// let i = 0;
// let newstr="";
// while(i<str.length){
//    newstr += str[i] + "😍";
//     i++;
// }
// process.stdout.write(newstr);

// taking User input
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

    // let doors =100;
    // let monkey =5;
    let opendoors = 0;
     let closeddoors =100;
rl.question("enter the value monkey: ",(monkey) => {

     let i=1;
    while(i<=100) {
        if(i % monkey==0){
            opendoors++;  
            console.log("Open door No = ",i);      
            closeddoors--;
        }
        i++;
    }
    console.log("Open Doors = ",opendoors);
    console.log("Closed Doors =",closeddoors);

});
