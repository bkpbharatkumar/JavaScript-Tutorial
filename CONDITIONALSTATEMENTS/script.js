/*
Conditional statements are used to perform different actions based on different conditions.

Use if -- to specify a block of code to be executed, if a specified condition is true
Use else -- to specify a block of code to be executed, if the same condition is false
Use elseif -- to specify a new condition to test, if the first condition is false
Use switch -- to specify many alternative blocks of code to be executed
*/


//Make a "Good day" greeting if the hour is less than 18:00:
let hours = 15;
if (hours < 18){
    console.log(greeting = "Good Day");
}

//Make a statement to check you are eligible for vote or not. if age > 18 --> eligible, otherwise not eligible

let age = 18;
if (age >= 18){
    console.log("you are eligible for vote...")
}
else {
    console.log("you are not eligible for vote")
}

//Take two numbers and Make a statement to check which number is greater

let num1 = 5;
let num2 = 5;


if (num1 > num2){
    console.log("num1 is greater")
}
else if (num1 < num2){
    console.log("num2 is greater")  
}
else {
    console.log("num1 and num 2 are equals")
}

/*
The getDay() method returns the weekday as a number between 0 and 6.

(Sunday=0, Monday=1, Tuesday=2 ..)

This example uses the weekday number to calculate the weekday name:
*/

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

console.log("Day is ",day)