// ***************NUMBER*****************


const score = 400;
console.log(score); // 400 automatically defined number

const balance = new Number(6000);
console.log(balance); // [Number: 6000] cast as a number


console.log(balance.toString()); // 6000
console.log(balance.toFixed(2)); // 6000.00

const otherNumber = 23.6656
console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-US'));

// ***************MATHS*****************

console.log(Math);

console.log(Math.abs(-4)); // 4
console.log(Math.round(8.8)); // 9
console.log(Math.round(8.4)); // 8
console.log(Math.ceil(8.4)); // 9
console.log(Math.floor(8.6)); // 8

console.log(Math.sqrt(16)); // 4

console.log(Math.min(8,5,6,9)); // 5
console.log(Math.max(8,5,6,9)); // 9

console.log(Math.random()); // 0-1
console.log(Math.random()*10); // 1-9
console.log((Math.random()*10)+1);

console.log('\n');

const min = 10;
const max = 20;

console.log(Math.random());
console.log(Math.random()*min); // 1-9
console.log(Math.random()*max); // 1-19
console.log(Math.floor(Math.random()*(max - min + 1)) + min); 