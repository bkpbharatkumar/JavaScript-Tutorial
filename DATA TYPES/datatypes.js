"use strict"; //treate all js code as newer version

// alert("Hello Bkp"); // we are using nodejs, not browser

/*
Datatypes
number
bigint
string
boolean
null // standalone value and NULL IS AN OBJECT
undefined
symbol

object //non premitive 
*/

let num = 25;
let bgnt = 23223232;
let str = "Bkp"
let bools = true;
let und;
console.log(`number = ${num} \nbigint = ${bgnt} \nstring = ${str} \nboolean = ${bools}`);

console.log("\n");
// Data Type Conversion

// convert number into string
let score = 33;
console.log(typeof(score));
let valueString = String(score)
console.log(typeof valueString,"-",valueString);

// convert string into number
let strg = "23Bkp"
console.log(typeof(strg));
let valueNumber = Number(strg)
console.log(typeof valueNumber,"-",valueNumber);
