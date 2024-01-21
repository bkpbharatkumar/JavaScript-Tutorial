const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map( (num) => {return num + 20} )
// console.log(newNums);

const myNums2 = myNumbers.map((num)=> num*20).map((num)=>num+2).filter((num)=> num>=140)
console.log(myNums2);