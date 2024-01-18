/*
Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

const
let
var 
Automatically 
*/


// undeclared Variables or Automatically
a = 5;
b = 6;
console.log("undeclared variables Sum is = ",c = a + b);



//var is a global scope varible and used in older browser
var n1 = 1;
var n2 = 2;
var s1 = n1 + n2;
console.log("sum of var variables is = ",s1);



//let is a block varible and reassign
let n3 = 3;
let n4 = 5;
let s2 = n3 + n4;
console.log("sum of Let variables is = ",s2);
//reaasign
let BkpAge = 22;
BkpAge = 23;
console.log("Bkp Age is = ",BkpAge);



//const is a constant and it is a block scope variable and cannot be reassigned
const fName = "Bharat";
const LName = " Parihar";
const fullName = fName + LName;
console.log("My Full Name Is = ",fullName);
//reassign
/*
const MyAge = 22;
MyAge = 23;
console.log("Bkp Age is = ",MyAge); // Error
*/

const accountId = 221013
let accountEmail = "bkpbharatparihar0809@gmail.com"
var accountPassword = "kyo@btau"
accountCity = "Mandsaur"
let hello;

console.table([accountId,accountEmail,accountPassword,accountCity,hello])
// Reassignment

// accountId = 0801; // not allowed
accountEmail = "rhnedoyrr@gmail.com"
accountPassword = "Kya@kroge@jankar"
accountCity = "Ab to nhi bta rha"
hello = "hi Bkp"
// new way to print multiple statement in table form
console.table([accountId,accountEmail,accountPassword,accountCity,hello])
