// declaration and initialization

var a; // declaration
a = 23; // initialization

const dulha = "lab";
const dulhan = "laby";

// scopes
// global -> can be used in a whole function.
// block -> curly braces ke andar tak scope
// function -> only accesible into whole function.

var a = 4;

{
    var b = 3;
}

function abcd() {
    if (true) {
        var c = 43;
    }
}

// redeclaration and reassignment

var a = 12;
a = 34; //reassignment

var a; // redeclaration

// Temporal Dead Zone (TDZ)
console.log(a);
let a = 34;

// hoisting - > jab aap ek variable declare karte ho woh doo hisso me tutta hai, ek hissa upar chala jaata hai declaration wala and initilization niche reh jata hai.

console.log(a); // undefined
var a = 23;

console.log(d);
let d = 34;

console.log(nm);
var nm = "Satya";

if (true) {
    var a = 1;
    let b = 2;
}

console.log(a); // ✅
console.log(b); // ❌ ReferenceError

const person = { name: "Satya" };
person.name = "Rahul"; //✅ allowed
person.name = {}; // ❌ not allowed
