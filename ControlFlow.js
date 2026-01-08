// // truthy values
// if (80) {
// } // code
// else {
//     //code
// }

// // falsy values
// if (0) {
// } // code
// else {
//     //code
// }

// if (loggedIn && admin) {
//     //code
// } else if (loggedIn) {
//     //code
// } else {
//     //code
// }

// switch (key) {
//     case value:
//         break;
//     case value:
//         break;
//     case value:
//         break;
//     default:
//         break;
// }

function getGrade(val) {
    if (val < 10) return "D";
    else if (val < 50) return "C";
    else if (val < 70) return "B";
    else return "A";
}

console.log(getGrade(34));
