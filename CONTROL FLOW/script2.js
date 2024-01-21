// Switch Case

/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febraury");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default Case Match");
        break;
}

// conditon ? true : false

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80");