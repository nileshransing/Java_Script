let tot_budget=1500;
let dept=5;
let percentage=[5,20,10,15,5];

percentage.sort();
percentage.reverse();


for(let i=0; i<5; i++){

    let budget = tot_budget * (percentage[i] /100);

    console.log("department=",i+1, "percentage=", percentage[i], "budget =",budget);
    // budget -= budget;
    
}
