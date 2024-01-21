// Immediately Invoked Function Expression (IIFE)

(function tea(){
    // Named IIFE
    console.log(`Tea is ready`);
}) ();

( (name) => {
    // UNNamed IIFE
    console.log(`My Name is ${name}`);
} )("Bkp")