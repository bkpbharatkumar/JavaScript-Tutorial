// let - var - const

let a = 10;
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);

if (true) {
    // Block scope
    let x = 60;
    const y = 50;
    var z = 40; // global scope
}

// console.log(x); // x is not defined beacause let x is a block scope
// console.log(y); // x is not defined beacause let x is a block scope
console.log(z); // var z have a global scope
