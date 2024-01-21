// const tinderUser = new Object();

const regularUser = {}

regularUser.email = "bkp@gmail.com"
regularUser.Fname = "Bkp"
regularUser.MName = "Bharat"
regularUser.LName = "Parihar"

// console.log(regularUser);

const userInfo = {
    id: "123abc",
    fullName: {
        userFullName: {
            firstName: "Bharat",
            lastName: "Parihar"
        }
    },
    email: "bkp@gmail.com",
    address: "Mandsaur"
}

// console.log(userInfo);

// console.log(userInfo.fullName.userFullName.firstName);

userInfo.newUserInfo = function(){
    console.log(`Hello, ${this.fullName.userFullName.firstName}`)
}
// console.log(userInfo.newUserInfo());

const object1 = {
    1: "a",
    2: "b",
    3: "c"
}
const object2 = {
    FName: "Bkp",
    MName: "Bharat",
    LName: "Parihar"
}

// const object3 = {object1,object2}
// console.log(object3);

// Merge Object using Object.assign(target, source)

const object4 = Object.assign({},object1,object2)
// console.log(object4);

// Merge Object Using Spread 
const object5 = {...object1,...object2}
// console.log(object5);



const users = [
    {
        id: 1,
        email: "B@gmail.com"
    },
    {
        id: 1,
        email: "B@gmail.com"
    },
    {
        id: 1,
        email: "B@gmail.com"
    },
]

// console.log(users[0].email);

// Access keys or values in object stored in Array
console.log(regularUser);
console.log(Object.keys(regularUser)); // [ 'email', 'Fname', 'MName', 'LName' ]
console.log(Object.values(regularUser)); // [ 'bkp@gmail.com', 'Bkp', 'Bharat', 'Parihar' ]
console.log(Object.entries(regularUser)); /* [
                                                [ 'email', 'bkp@gmail.com' ],
                                                [ 'Fname', 'Bkp' ],
                                                [ 'MName', 'Bharat' ],
                                                [ 'LName', 'Parihar' ]
                                            ]
                                        */

// properties exists in object or not

console.log(regularUser.hasOwnProperty('MName')) // true
console.log(regularUser.hasOwnProperty('dob')) // false