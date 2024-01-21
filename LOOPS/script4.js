const color = ["Red","Black","Green","Orange","Blue"]

// color.forEach( function (item) {
//     console.log(item);
// } )

// color.forEach( (item) => {
//     console.log(item);
// } )

// function printME(item) {
//     console.log(item);
// }
// color.forEach(printME)

color.forEach( (item,index,arr) => {
    // console.log(item,index,arr);
} )

const programmingLanguages = [
    {
        proName: "PYTHON",
        extension: "py"
    },
    {
        proName: "JAVA",
        extension: "java"
    },
    {
        proName: "JAVASCRIPT",
        extension: "js"
    }
]

programmingLanguages.forEach( (item) => {
    // console.log(item.proName);
} )