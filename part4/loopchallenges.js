/*
1. write a while loop sum of all numbers from 1 to 10 and stores result in variable "sum" 
*/
let sum = 0;
let  i = 1
while (i<=10) {
    sum += i;
    i++;
}
// console.log(sum)

/*
2. write a while loop that counts down 5 to 1 and stores the numbers in  an array named "countdown"
*/
let j  = 5;
let countdown = []
while(j >=1){
    countdown.push(j);
    j--;
}
// console.log(countdown)

/*
3. write a do while loop that prompts a user to enter their favorite tea type until they enter stop
store each tea type in an array named "teacollection"
*/
// let teacollection = []
// let tea=  "abc"
// do{
//     tea = prompt(`Enter your fav tea (type "stop" to finish)`) // to take input from user
//     if(tea !== "stop"){
//         teacollection.push(tea)
//     }
// }while(tea != "stop")

/*
4. write a do while loop that adds numbers from 1 to 3 and stores the result in a variable named total
*/

let total = 0;
let k = 1
do{
    total+=k;
    k++;
}while(k<=3);
console.log(total)

/*
5. write a for loop that multiplies each element in array [2 4 6 ]by 2 and stores result in array named 'multiplied numbers'
*/
let multipliednumbers = []
let numbers = [2,4,6]

for(let l = 0; l<numbers.length; l++){
    multipliednumbers.push(numbers[l]*2)
}
console.log(multipliednumbers)

/*
6. write a for loop that lists all the cities in the arry ["paris", "newyork", 'tokyo', 'london'] and stores each city in  a new array named 'citylist'
*/
let cities = ["paris", "newyork", 'tokyo', 'london'];
let citylist = [];

for (let index = 0; index < cities.length; index++) {
    let mycity = cities[index];
    citylist.push(mycity)
}
console.log(citylist)