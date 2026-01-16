// // let obj = {
// //     name: "Satya",
// //     age: 32,
// // };

// // let aa = "name";

// // console.log(obj.aa);
// // console.log(obj[aa]);

// // // deep access

// // let user = {
// //     name: "Satya",
// //     address: {
// //         city: "Alipurduar",
// //         pin: 736123,
// //         location: {
// //             lat: 43234,
// //             lng: 432.43,
// //         },
// //     },
// // };

// // console.log(user.address.location.lat);

// // let { lat, lng } = user.address.location;

// // looping

// let obj = {
//     name: "Satya",
//     age: 23,
//     email: "test@test.com",
// };

// // for (let key in obj) {
// //     obj[key];
// // }

// // console.log(Object.keys(obj));
// console.log(Object.entries(obj));

// let obj2 = Object.assign({}, obj);

// let role = "admin";

// let user = {
//     name: "Satya",
//     addresses: {
//         city: "Alipurduar",
//     },
//     [role]: true,
// };

// let obj = JSON.parse(JSON.stringify(user));

// console.log(user?.address?.city);

const user = {
    "first-name": "satya",
};

let { "first-name": firstName } = user;
