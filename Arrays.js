// let marks = [10, 43, 55, 80];
// marks[30];

// let arr = new Array(5);

// marks.push(10);

// let arr = [1, 2, 3, 4, 5];
// arr.push(8);
// arr.pop();
// arr.shift();
// arr.unshift(0);
// arr.splice(2, 1);
// arr.slice(0, 3);
// arr.reverse();
// let newArr = arr.sort(function (a, b) {
//     return a - b;
// });

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function (val) {
//     console.log(val);
// });

// let newarr = arr.map(function (val) {
//     if (val > 2) return val;
// });

// console.log(newarr);
// // undefined,

// let arr = [1, 2, 3, 4, 5];

// let newarr = arr.filter(function (val) {
//     if (val > 3) return true;
// });
// console.log(newarr);

// let newArr = arr.reduce(function (accumulator, val) {
//     return accumulator + val;
// }, 0);
// console.log(newArr);

// let arr = [
//     { id: 1, key: 1 },
//     { id: 2, key: 2 },
//     { id: 3, key: 1 },
// ];

// let ans = arr.find(function (val) {
//     return val.key == 1;
// });

let arr = [1, 2, 3, 4, 5];
let any = arr.every(function (val) {
    return val < 10;
});

// destructuring & spread opt.
let num = [1, 2, 3, 4, 5];
// let [a, b, , d] = num;
// console.log(a, b, d);

let newArr = [...num];

let fruits = ["Guava", "Cherry"];
fruits.splice(1, 0, "Pineapple", "Kiwi");
console.log(fruits);
