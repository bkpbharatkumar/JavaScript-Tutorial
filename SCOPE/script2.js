// Nested Scope

function one() {
    const username = "i.m.bkp"
    
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    // two()
}

// one()

if (true) {
    const username = "bkpbharatparihar"
    if(username === "bkpbharatparihar"){
        const website = " Youtube"
        // console.log(username+website);
    }
    // console.log(website); // error
}

// console.log(username); // error



// access the function before declaration
console.log(addone(5))

// declare the function
function addone(num) {
    return num + 2;
}


// declare as well as hold the function

addTwo(6); // error if variable hold the function we can not access the function before the declaration 
const addTwo = function(num){
    return num + 5;
}
