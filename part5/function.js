// function greet(name) {
//     // console.log(`Hello ${name}`)
//     return `Hello, ${name}`
// }
// let x = greet("bhavay");
// console.log(x)

/*
1. write a function namse maketea that takes one parameter, 'typeoftea, and returns a string like "making green tea" when called "green tea". store the result in variable named teaOrder
*/
function makeTea(typeOfTea) {
    return `making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea");
// console.log(teaOrder)

/*
2. create a function named orderTea that takes one params , teatype. inside this function create another function named confirmorder that returns a message like 'order confirmes for chai. call confirmorder from within ordertea and return the result
*/
function orderTea(teaType){
    function confirmOrder(){
        return "order confirmed for chai"
    }
    return confirmOrder()
}
console.log(orderTea("bhaay"))

/*
3. write an arrow function named calculateTotal that takes two params : price and quantity, the function should return the total cost by multiplying the price and quantity. store result in a variable totalcost.
*/
// const calculateTotal = (price, quantity)=>  price*quantity; //implicit
const calculateTotal = (price, quantity)=>  {
    return price*quantity;
}
// let totalCost = calculateTotal(499,100);
// console.log(totalCost);

/*
4. Write a function named processTeaOrder that takes another function makeTea as a parameter and calls it with argument earl grey
return the result of calling makeTea
*/ //// first class function: when function is passed as an argument in other function
function makeTea(typeOfTea){
    return `make tea: ${typeOfTea}`;
}

function processTeaOrder(fn){
    return fn("earl grey");
}
let order = processTeaOrder(makeTea);
// console.log(order);

/* 
5. write a function named "createTeaMaker" that returns another function. the returned function should take one parameter. 'teatype' , and return a message like "making green tea". store the returned function in a variable named 'teamaker' and call it with "green tea"
*/

function createTeaMaker(name){
    let score = 100
    return function(teaType){
        return `Making tea type: ${teaType} for ${name} at price ${score}`;
    }
}

let teamaker= createTeaMaker("hitesh")
console.log(teamaker("green tea"));