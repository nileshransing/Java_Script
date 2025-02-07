// Q1)(if_else)problem: On Time for the Exam
// A student has to attend an exam at a particular time (for example at 9:30 am).
//  They arrive in the exam room at a particular time of arrival (for example 9:40 am). 
// It is considered that the student has arrived on time, if they have arrived at the time when the exam starts or up to half an hour earlier.
//  If the student has arrived more than 30 minutes earlier, the student has come too early. 
// If they have arrived after the time when the exam starts, they are late.

// Write a program that inputs the exam starting time and the time of student's arrival, and prints if the student has arrived on time,
//  if they have arrived early or if they are late, as well as how many hours or minutes the student is early or late.
// Input Data
// Read the following four integers (one on each line) from the console:

// The first line contains exam starting time (hours) – an integer from 0 to 23.
// The second line contains exam starting time (minutes) – an integer from 0 to 59.
// The third line contains hour of arrival – an integer from 0 to 23.
// The fourth line contains minutes of arrival – an integer from 0 to 59.
// Output Data
// Print the following on the first line on the console:

// "Late", if the student arrives later compared to the exam starting time.
// "On time", if the student arrives exactly at the exam starting time or up to 30 minutes earlier.
// "Early", if the student arrives more than 30 minutes before the exam starting time.
// If the student arrives with more than one minute difference compared to the exam starting time, print on the next line:

// "mm minutes before the start" for arriving less than an hour earlier.
// "hh:mm hours before the start" for arriving 1 hour or earlier. Always print minutes using 2 digits, for example "1:05".
// "mm minutes after the start" for arriving more than an hour late.
// "hh:mm hours after the start" for arriving late with 1 hour or more. Always print minutes using 2 digits, for example "1:03".
// Sample Input and Output

// Sample Input :
// 9
// 30
// 8
// 45
// Sample Output :
// Early
// 45 minutes before the start

// let examstarthour=9;
// let examstartmin=30;
// let arrivehour=9;
// let arrivemin=45;

// if(examstarthour===arrivehour && examstartmin <=30){
//     if(examstartmin === 0){
//         examstarthour - 1;
//         examstartmin += 30;
//         console.log("On time");
    
//     }else if(examstartmin >0 && examstartmin <=30){
//           examstartmin -=30;
//            console.log("On time");  
//     }
//     console.log("On time");
// }else if(examstarthour > arrivehour || examstartmin > arrivemin){
//     console.log("too early");
// }else if(examstarthour < arrivehour || examstartmin < arrivemin){
//     console.log("too late");
// }else{
//     console.log("Invalid"); 
// }

          