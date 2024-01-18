// Arrays are object

// Arrays are not associative Arrays

// Arrays are resizable

// Arrays copy operation create shallow copy  - change in original array, deep copy - do not share the same reference 

const myArray = [7,0,8,9,1,1,3,9,7,0];
console.log(myArray); // [ 7, 0, 8, 9, 1, 1, 3, 9, 7, 0 ]

const myArray2 = ["Bkp", "Bheru", "Paras", "Kanha", "Deepak"];
console.log(myArray2);

const myArray3 = new Array(1,5,9,3,5,7)
console.log(myArray3);

// Array Methods

myArray.push(8,9)
console.log(myArray) // [ 7, 0, 8, 9, 1, 1, 3, 9, 7, 0, 8, 9 ]

myArray.pop()
console.log(myArray) // [ 7, 0, 8, 9, 1, 1, 3, 9, 7, 0, 8 ]

myArray.unshift(2);
console.log(myArray) // [ 2, 7, 0, 8, 9, 1, 1, 3, 9, 7, 0, 8 ]

myArray.shift();
console.log(myArray) // [ 7, 0, 8, 9, 1, 1, 3, 9, 7, 0, 8 ]

console.log(myArray.includes(8)) // true
console.log(myArray.includes(5)) // false
console.log(myArray.indexOf(3)) // 6
console.log(myArray.indexOf(5)) // -1

const newArray = myArray.join();
console.log(newArray); // 7,0,8,9,1,1,3,9,7,0,8
console.log(typeof newArray); // String

// Slice, Splice

const dummyArray = [4,2,8,6,3,9,4]
console.log("A ", dummyArray);

const dummyAry1 = dummyArray.slice(1,4);
console.log(dummyAry1);
console.log("B ", dummyArray);

const dummyAry2 = dummyArray.splice(1,4);
console.log(dummyAry2);
console.log("C ", dummyArray);



