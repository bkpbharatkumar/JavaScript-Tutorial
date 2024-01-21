// Loops can execute a block of code a number of times.
/*

JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

*/

// For Loop --> Normal Loop

for (let i = 0; i < 5; i++) {
    // console.log(i)
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop Value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop Value: ${j} and Inner Loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}



let myArray = ["Bkp", "Deepak", "Kanha", "Binod", "Ankit"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}

// Break and Continue

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        // console.log("Detected 5");
        break;
    }
    // console.log(`Value of i is ${index}`);  
}

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        // console.log("Detected 5");
        continue;
    }
    // console.log(`Value of i is ${index}`);  
}


//For In object
const object = {
    fname : "Devkanya",
    lname : "Malviya",
    age : 13
}

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        // console.log(key,element)
        
    }
}

// For of strings

const name = "IAMBKP"

for (const iterator of name) {
    // console.log(iterator)
}



// do {
    
// } while (condition);



// while (condition) {
    
// }

let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray2 = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray2.length) {
    //console.log(`Value is ${myArray2[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);