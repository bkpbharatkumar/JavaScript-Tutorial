// NORMAL FUNCTION

function addnum (num1,num2) {
    return num1 + num2;
}
// console.log(addnum(5,2));

// VARIABLE HOLD FUNCTION

const addTwoNum = function (num1,num2) {
    return num1 + num2
}
// console.log(addnum(4,7));



// *-*-*-*-*-*-*-*-*-*-* ARROW FUNCTION -*-*-*-*-*-*-*-*-*-*-*-*-*-*

const arrowFunction = () => {
    let username = "bkp"
    console.log(this.username); // Undefined
    console.log(this); // {} object
}

// arrowFunction()

// *-*-*-*-*-*-*-*-*-*-* BASIC ARROW FUNCTION -*-*-*-*-*-*-*-*-*-*-*-*-*-*

// () => {}

// *-*-*-*-*-*-*-*-*-*-* IMPLICIT ARROW FUNCTION -*-*-*-*-*-*-*-*-*-*-*-*-*-*

const addnumbers = (num1,num2) => num1 + num2
console.log(addnumbers(5,9));

// For Object
const objname = () => ({username: "yesiambkp"})
console.log(objname());

