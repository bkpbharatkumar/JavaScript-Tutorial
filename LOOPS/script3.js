// We use forin loop for object

const myObject = {
    A: "Apple",
    B: "Ball",
    C: "Cat",
    D: "Dog",
    E: "Elephent"
}

for (const key in myObject) {
    // console.log(key); // only print key not value
    // console.log(`${key} for ${myObject[key]}`); // print key and value
}

const proLanguages = ["Java","Python","CPP","JavaScript","Ruby"]

for (const key in proLanguages) {
    // console.log(key); // only print array keys
    console.log(`${key} for ${proLanguages[key]}`);
}

