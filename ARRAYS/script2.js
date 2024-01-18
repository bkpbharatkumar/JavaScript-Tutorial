

const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// marge two arrays in new array

const new_hero = marvel_heros.concat(dc_heros);
console.log(new_hero); // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]


// spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// flat method

const attendence = [5,6,9,[3,4,1,[2,8,7]]]
console.log(attendence); // [ 5, 6, 9, [ 3, 4, 1, [ 2, 8, 7 ] ] ]
const newAttendence = attendence.flat(Infinity)
console.log(newAttendence); // [ 5, 6, 9, 3, 4, 1, 2, 8, 7 ]

console.log(Array.isArray("Bkp"));
console.log(Array.from("Bkp"));
console.log(Array.from({name: "Bkp"})); // interesting

