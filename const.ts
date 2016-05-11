const a = 12; //accessible globally

function myFunction() {
    console.log(a);

    const b = 13; //accessible throughout function

    if (true) {
        const c = 14; //accessible throughout the "if" statement
        console.log(b);
    }

    //console.log(c); //Can't access c here
}

myFunction();

const myObj = {
    "name": "John"
};

console.log(myObj.name);

//The object elements can be modified
myObj.name = "Eden";

console.log(myObj.name);

//myObj = {}; //throws read-only exception