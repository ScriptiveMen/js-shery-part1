// primitive datatype -> provides real copy.
// reference datatype -> provides you reference of parent

let a = 23;
let b = a;

let c = [1, 2, 3, 4];
let d = c;
d.pop();

// symbol

// external library
let library = {
    uid: 1,
    name: "third party library",
};

// library.uid = 12; // my habbit to do this with every library
let u1 = Symbol("uid");
library[u1] = "001";

let bigInteger = 9007199254740991n;
bigInteger + 3n;
console.log(typeof bigInteger);

// dynamic typing

let r = 34;
r = true;
r = [];
r = {};
r = undefined;

// truthy falsy

if (-1) {
}

let x;
console.log(x); // undefined (like garbarge value)
let y = null;
console.log(y); // null
