// for of Loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "HELLO WORLD"

for (const greet of greeting) {
    if (greet === " ") {
        continue;
    }
    // console.log(`Each char is : ${greet}`);
}

// Map --> arrays ki tarah hi hota he unique values hoti he yeh ek object hota he
// The map is object holds key-value pairs and remembers the original insertion order of the keys

const map1 = new Map()

map1.set('a', "Apple")
map1.set('b', "Ball")
map1.set('c', "Cat")
map1.set('d', "Dog")
map1.set('e', "Elephent")

console.log(map1.get('a')); // Apple

map1.set('k', "Kanha")

console.log(map1.get('k')); // Kanha

console.log(map1.size); // 6

map1.delete('k')

console.log(map1.size); // 5

console.log(map1);  /*
                    Map(5) {
                    'a' => 'Apple',
                    'b' => 'Ball',
                    'c' => 'Cat',
                    'd' => 'Dog',
                    'e' => 'Elephent'
                    }
                    */

for (const key of map1) {
    // console.log(key);
}
                    /* output
                    [ 'a', 'Apple' ]
                    [ 'b', 'Ball' ]
                    [ 'c', 'Cat' ]
                    [ 'd', 'Dog' ]
                    [ 'e', 'Elephent' ]
                    */

for (const [key,value] of map1) {
    // console.log(key," - ",value);
}

                    /* 
                    a  -  Apple
                    b  -  Ball
                    c  -  Cat
                    d  -  Dog
                    e  -  Elephent
                    */


// Object ke liye forof loop use nhi kiya jata becasue it is not iterable
const myObject = {
    firstName: "Bkp",
    MiddleName: "Bharat",
    lastName: "Parihar"
}

for (const [key,value] of myObject) {
    // console.log(key," - ",value); // Error --> MyObject is not iterable
}
