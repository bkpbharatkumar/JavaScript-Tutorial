// if & else if

/*
if (true) {
    // Code Execute
}

if (false) {
    // Code not Execute
}
*/

const isUserLogIn = false;

if (isUserLoggedIn) {
    // console.log("Welcome")
}

const temperature = 41

if ( temperature === 40 ){
    // console.log("less than 50");
} else {
    // console.log("temperature is greater than 50");
}

// console.log("Execute");


const score = 200

if (score > 100) {
    let power = "fly"
    // console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); // Error


const balance = 1000

if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
    // console.log("less than 500");
} else if (balance < 750) {
    // console.log("less than 750");
    
} else if (balance < 900) {
    // console.log("less than 750");
    
} else {
    // console.log("less than 1200");

}


const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserLoggedIn && debitCard) {
    console.log("Allow to buy Course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("Login Successfully");
}