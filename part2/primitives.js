//number
let balance = 120
let anotherBalance = new Number(120);
console.log(anotherBalance.valueOf())

// console.log(typeof(balance));
console.log(typeof anotherBalance)

//boolean
let isActive =  true;
let isReallyActive = new Boolean(true) // not recommended

//null ans undefined

let firstname;
// console.log(firstname);  // it exists, but doent have any value-> undefined


let lastname = null ; // null means empty
// console.log(lastname); 

// string

let myString = "hello"
let mystring1 = 'Hola'
let username = 'hitesh'

let oldgreet = myString +" "+ "hitesh";
// console.log(oldgreet)

let greet = `hello ${username}`;
let demoOne = `value is ${2*2}`;
// console.log(demoOne)

// symbol
let sm1 = Symbol()
let sm2= Symbol("bhavay");
let sm3 = Symbol("bhavay");
console.log(sm2== sm3)
