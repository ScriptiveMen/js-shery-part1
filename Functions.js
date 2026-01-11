function greet() {
    console.log("Hello World");
}

greet();

//  function expression

let sweep = function () {
    console.log("Sweeping...");
};

sweep();

// function statement

function write() {
    console.log("writing..");
}
write();

// fat arrow function

let abcd = () => {
    console.log("ABCD..");
};

abcd();

// parameter

function AnimalDance(animal) {
    console.log(`${animal} is dancing...`);
}

AnimalDance("Horse");
AnimalDance("Cat");
AnimalDance("Dog");

// default, rest and spread

// function add(v1 = 0, v2 = 0) {
//     console.log(v1 + v2);
// }

// add(2, 3);

// function add(...val) {
//     console.log(val);
// }

// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function add(a, b, c, ...val) {
    console.log(a, b, c, val);
}

console.log(1, 2, 3, 4, 5, 6);

function def(v) {
    return 33 + v;
}

let val = def(3);
console.log(val);
