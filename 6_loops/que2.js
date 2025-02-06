
// use do while loop 

let giftbags=100;
let participants =15;
let i=1;
let round =0;
let giftbag_remain=0;
while(i<=100){

    if(i % participants == 0){
        // console.log(i); 
        round++;
        giftbag_remain -=participants;
    }
    else{
        giftbag_remain++;
    }
    i++;
}
console.log("total round = ",round);

console.log("giftBags remaining = ",giftbag_remain);