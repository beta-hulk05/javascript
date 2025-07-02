let num1 = 5
let num2 = 8
console.log("I am regular upper code");

if(num1 > num2){
    console.log("num1 is greater than num2")
}
else{
    console.log("nope, num1 is not greater ")
}

console.log("I am regular bottom code");

// check if a string is equal to another string
let userName = "chai"
let anotherUserName = "chai"
if(userName != anotherUserName){
    console.log("Pick another username");   
}else{
    console.log("You can pick this number")
}

//checking if a variable is a number or not
let score = 44
if(typeof score === 'number'){
    console.log("Yep this is a numebr");
    
}else{
    console.log("No this is not a number");
    
}

// checking if a boolean value is true or false
let isTeaReady = false
if(isTeaReady){
    console.log("Tea is ready");

}else{
    console.log("Tea is not ready");
    
}
//checking if an array is empty or not
let items = [];

if(items.length === 0){
    console.log("Is empty")
}else{
    console.log("Not empty");
}