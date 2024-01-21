// Object De-Structuring and JSON API

const course = {
    courseName: "JavaScript",
    price: "999",
    intructor: "Hitesh"
}

// course.courseName

const {courseName} = course
const {intructor: ins} = course

console.log(courseName);
console.log(ins);