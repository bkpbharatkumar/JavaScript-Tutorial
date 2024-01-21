// Singleton - constructor se singleton bnta he

// Object Literals

const mySym = Symbol("Key1");

const JSUser = {
    name: "Hitesh",
    "Full Name": "Hitesh Choudhary",
    age: 18,
    // mySym: "MyKey1",
    [mySym]: "MyKey1",
    location: "Jaipur",
    email: "hitesh@gmail.com",
    isLoggedIN: false,
    lastLogindays: ["Monday", "Saturday"]
}

// Access
console.log(JSUser.email); // // hitesh@gmail.com
console.log(JSUser["email"]); // hitesh@gmail.com
console.log(JSUser["Full Name"]); // Hitesh Choudhary
console.log(JSUser[mySym]); // MyKey1


// console.log(JSUser.Full Name) --> Not Allowed

// Change Key Values

JSUser.email = "bkp@gmail.com";
console.log(JSUser); /*
                        {
                        name: 'Hitesh',
                        'Full Name': 'Hitesh Choudhary',
                        age: 18,
                        location: 'Jaipur',
                        email: 'bkp@gmail.com',
                        isLoggedIN: false,
                        lastLogindays: [ 'Monday', 'Saturday' ],
                        [Symbol(Key1)]: 'MyKey1'
                        }
                    */



Object.freeze(JSUser) // Freeze The Object




JSUser.email = "bkp@outlook.com";
console.log(JSUser) /* 
                    Output will remain the same no changes in email be
                    */


const JSUser2 = {
    name: "Hitesh",
    "Full Name": "Hitesh Choudhary",
    age: 18,
    mySym: "MyKey1",
    location: "Jaipur",
    email: "hitesh@gmail.com",
    isLoggedIN: false,
    lastLogindays: ["Monday", "Saturday"]
}

JSUser2.greeting = function(){
    console.log("Hello JS User");
}

JSUser2.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`); // This :- the this keyword refers to an object.
}

console.log(JSUser2.greeting()); // Hello JS User
console.log(JSUser2.greetingTwo()); // Hello JS User, Hitesh


