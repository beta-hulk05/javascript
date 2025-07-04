/*
1. write a for loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stop the loop when it finds chai
store all the teas before chai in new array named "selected teas"
*/
let  selectedTeas = [];
let teas = ["green tea", "black tea", "chai", "oolong tea"];
for(let i = 0; i< teas.length; i++){
    selectedTeas.push(teas[i]);
    console.log(selectedTeas[i]);
    
    if(teas[i] == "chai") break;
}
/* 
2. write a for loop that loops through the array ["London", "new york", "paris", "Berlin"] and skips "Paris"
store other elements in new array named "visitedCities"
*/
let cities=  ["London", "new york", "paris", "Berlin"];
let visitedCities = []
for(let i = 0; i<cities.length; i++){
    if(cities[i] == "paris") continue;
    visitedCities.push(cities[i]);
}
console.log(visitedCities)
/*
3. use for of loop to iterate through the array [1,2,3,4,5] and stop when number 4 is found.
store numbers before 4 in an array named smallnumbers
 */
let nums = [1,2,3,4,5]
let smallnumbers = []
for (let num of nums) {
    if(num == 4) break;
    smallnumbers.push(num)
}
console.log(smallnumbers)
/*
4. use a for of loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"]d and skip "herbal tea"
store the other teas in an array named "preferred teas" 
*/
let newTeas = ["chai", "green tea", "herbal tea", "black tea"]
let prefferedTeas = []
for (let tea of newTeas) {
    if(tea == "herbal tea") continue;;
    prefferedTeas.push(tea)
}
console.log(prefferedTeas)

/*
5. use a for in loop to lopp through the object containing city populations .stop the loop when the population of berlin is found and store all previious cities populations in a new object named "citypopulation"
*/
let citiesPopulation = {
    "London": 8900000,
    "new york": 8400000,
    "paris": 2200000,
    "berlin": 3500000
}
// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));
let cityPopulations = {}
for (const city in citiesPopulation) {
    // key = value
    if(city == "berlin") break;
    cityPopulations[city] = citiesPopulation[city]
    // console.log(citiesPopulation[city])
}
console.log(cityPopulations)

/*
6. Write a for each loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"]. stop when "chai"d is found,  and store all previous tea types in an array named "availableTeas".
*/
let types = ["earl grey", "green tea", "chai", "oolong tea"]
let availableTeas = []
types.forEach(function(tea){
    if(tea === "chai") return;
    // console.log(tea);
    availableTeas.push(tea)
});
console.log(availableTeas)