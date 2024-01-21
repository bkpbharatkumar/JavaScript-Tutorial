// REDUCE

const nums = [1,2,3,4,5]
const myTotal = nums.reduce(function (accumlator, currentValue) {
    console.log(`accumlator : ${accumlator} and currentValue : ${currentValue}`);
    return accumlator + currentValue
}, 0)
// console.log(myTotal);

const nums2 = [6,7,8,9,3]
const myTotal2 = nums2.reduce( (accumlator,currentValue) => accumlator + currentValue ,0 )
// console.log(myTotal2);


const shoppingCartCourse = [
    {
        itemName: "JavaScript",
        price: 999
    },
    {
        itemName: "Python",
        price: 1999
    },
    {
        itemName: "CPP",
        price: 2999
    }
]

const total = shoppingCartCourse.reduce((accumlator,currentValue) => accumlator + currentValue.price ,0)
console.log(total);