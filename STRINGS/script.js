let bName = "Bharat";
let gName = "Archu";

console.log(bName);
console.log(gName);

console.log("My am " + bName + " and My Bestfriend is " + gName);
//print varible in inner string 
let Buddy = console.log(`My am ${bName} and My BestFriend is ${gName}`);
console.log(bName.length);
console.log(gName.length);

console.log(1+"2"); // 12
console.log("2"+1); // 21
console.log(1+"2"+3); // 123
console.log(1+2+3+"4"); //64 

const gameName = new String("FREE-FIRE-GAME");
console.log(gameName)
console.log(gameName[0],gameName[1])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2)) //position of charactor
console.log(gameName.indexOf('E')) //position of charactor

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "      Bkp     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://bkp.com/bkp%20bharat"
console.log(url.replace('%20','-'))

console.log(gameName.split('-'));


// References
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String