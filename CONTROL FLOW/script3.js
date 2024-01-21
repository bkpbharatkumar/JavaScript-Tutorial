// Truthy falsy Values

const userEmail = "bkp@gmail.com"

if (userEmail) {
    console.log("Got the User Email"); // output
} else {
    console.log("Don't have user Email");
}


const userNumberArray = []

if (userNumberArray) {
    console.log("Got the User Number");
} else {
    console.log("Don't have user Number");
}

if (userNumberArray.length === 0) {
    console.log("Array is Empty");
}

const userInfoObject = {}

if (Object.keys(userInfoObject).length === 0) {
    console.log("Object is Empty");
}