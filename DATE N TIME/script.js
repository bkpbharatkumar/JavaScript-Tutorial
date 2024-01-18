let myDate = new Date()
console.log(myDate); // 2024-01-18T02:37:25.871Z
console.log(myDate.toString()); // Thu Jan 18 2024 08:07:25 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Thu Jan 18 2024
console.log(myDate.toTimeString()); // 08:08:39 GMT+0530 (India Standard Time)
console.log(myDate.toJSON()); // 2024-01-18T02:38:39.883Z
console.log(myDate.toLocaleString()); // 18/1/2024, 8:08:39 am
console.log(myDate.toLocaleTimeString()); // 8:08:39 am
console.log(myDate.toLocaleDateString()); // 18/1/2024

console.log('\n');

let myCreateDate = new Date(2024,1,24)
console.log(myCreateDate.toDateString()); // Sat Feb 24 2024
let myCreateDate2 = new Date(2024,1,24,5,3)
console.log(myCreateDate2.toLocaleString()); // 24/2/2024, 5:03:00 am
let myCreateDate3 = new Date("01-17-2024")
console.log(myCreateDate3.toLocaleString()); // 17/1/2024, 12:00:00 am

console.log('\n');

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getUTCDay());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))

// newDate.toLocaleString('default',{
//     weekday: "long",
// })
