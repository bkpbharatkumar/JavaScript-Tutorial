/*

Create a faulty calculator using JavaScript

This faulty calculator does following :
1. It takes two numbers as inut from the user
2. It performs wrong operations as follows :
    + ---> -
    * ---> +
    - ---> /
    / ---> **

It performs wrong operation only 10% of the times...

*/





let random = Math.random();
console.log(random);
let number1 = prompt("Please Enter The First Number : ");
let operation = prompt("Please Enter The Operation Which Do You Have Performs : ");
let number2 = prompt("Please Enter The Second Number : ");

const operator = {
    '+' : '-',
    '*' : '+',
    '-' : '/',
    '/' : '**'
};

if(random>0.5){
    //Please Perform Correct Calculation
    console.log(`The Result is ${number1} ${operation} ${number2}`)
    alert(`The Result is ${eval(`${number1} ${operation} ${number2}`)}`);
}
else{
    operation = operator[operation]
    alert(`The Result is ${eval(`${number1} ${operation} ${number2}`)}`);
}
