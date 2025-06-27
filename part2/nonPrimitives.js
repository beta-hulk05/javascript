const username = {
    firstname: "hitesh",  // key->value
    isLoggedIn: true,
    "last name": "Batra"
}
// let and const in objects means different. we cannot change memory refrences of objects having const

// let username = {  
//     firstname: "hitesh",
//     isLoggedIn: true
// }
// username.lastname = "chaudhary"


// const myFirstName = "hitesh"
// myFirstName = " Mr.H"
username.firstname = "bhavay"
// console.log(username);
// console.log(username['last name'])

// console.log(typeof username);

let today = new Date();
// console.log(today.getDate());

// array-> collection
let heroes = ['a', 'b', 'c'];
let anotherUser = ["hitesh", "chaudhary", true]; // index-> [0,1,2] -> 0 base indexing

//type conversion

console.log(1 + "1");  //implicit conversion
let isValue = true;
console.log(Number(isValue) + 1);  // explicit

let val = "2abc"
console.log(typeof Number(val));

