//function definition
function sayMyName(){
    console.log("Bhavay")
}
// function use - function call
sayMyName()


// function for counting
function printCounting(){
    for(let i = 1; i<=100; i++){
        console.log(i)
    }
}

printCounting()


// including params in function
function printNumber(num){
    // console.log(`Printing number = ${num} `)

    console.log("Printing Number:", num)
}

printNumber(27)

// to find average of two numbers
function getAvg(num1, num2){
    let avg = (num1 + num2)/2;
    console.log(avg);
}

getAvg(4 , 5)

return functions
function getSums(a,b,c){
    let sum = a+b+c
    return sum
}

// let ans = getSums(1,2,3)
console.log(ans)

const solve = function(a,b){
    return a*b;
}

// let ans = solve(2,5)
console.log(ans)


// arrow functions
let getExp = (x,y)=>{
    return x**y;
}

let ans = getExp(2,3)
console.log(ans)


