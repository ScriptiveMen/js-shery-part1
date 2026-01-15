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

// let abcd = () => {
//     console.log("ABCD..");
// };

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

// function add(a, b, c, ...val) {
//     console.log(a, b, c, val);
// }

// console.log(1, 2, 3, 4, 5, 6);

// function def(v) {
//     return 33 + v;
// }

// let val = def(3);
// console.log(val);

// first class func

// function abcd(val) {
//     val();
// }

// abcd(function () {
//     console.log("Hello");
// });

// hof

// function def() {
//     return function () {
//         console.log("Hello");
//     };
// }

// def()();

// function def(val) {
//     val();
// }

// def(function () {
//     console.log("Nice..");
// });

// impure and pure functions

let a = 34;

// function abcd() {
//     a++;
// }

// closures

// function abcd() {
//     let a = 19;
//     return function () {
//         console.log(a);
//     };
// }

// lexical scoping

// function abcd() {
//     let a = 10;

//     function defg() {
//         let b = 20;

//         function hijk() {
//             let c = 30;
//         }
//     }
// }

// iife

let lib = (function () {
    let score = 0;

    return {
        getScore: function () {
            console.log(score);
        },
        setScore: function (val) {
            score = val;
        },
    };
})();

console.log(lib.getScore());
lib.setScore(40);

// hoisting

// abcd();

// let abcd = function () {
//     console.log("heyy");
// };

// fat arrow function is not created here because it looses this context

let obj = {
    value: 42,
    regular: function () {
        return this.value;
    },
    arrow: () => this.value,
};

// hoisting and tdz

greet(); // ✅ Works
function greet() {
    console.log("greeting..");
}

greet(); // ❌ Error
const greet = () => {
    console.log("greeting..");
};
