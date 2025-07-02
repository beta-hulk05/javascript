/*
1. Declare an array named 'teaFlavors' that contains the strings `"green tea"`, "black tea" and "oolong tea". access the first element of array amd store it in a variable named 'firstTea'.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"]
// let teaFl = new Array("green tea", "black tea", "oolong tea");
const firstTea = teaFlavors[0];

/*
2. Declare an array named 'cities' that contains the strings `"new york"`, "london" and "tokyo" ans "Paris". access the third element of array amd store it in a variable named 'favoriteCity'.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
const favCity = cities[2];

/*
3. You have an array named "teaTypes" containing "herbal tea", "white tea", and "masala chai". change the second element of array to "jasmine tea"
*/
let teaTypes = ["herbal tea", "white tea", "masala chai"]
teaTypes[1] = "jasmine tea"
/*
4. Declare an array named "citiesVisited" containing "Mumbai" and "Sydney". Add Berlin to the array using the "push" method
*/
let citiesVisited = ["mumbai", "sydney"];
// citiesVisited[2] = "Berlin"
citiesVisited.push("Berlin"); // add value to end

/*
5. You have an array named "teaOrders" with "chai", "iced tea", "matcha" and "earl grey". remove the last element of the array using pop method and store it in variable name "lastOrder"
*/
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
const lastOrder = teaOrders.pop();
console.log(teaOrders);

/*
6. array named popularTeas containig green tea, oolong tree, and chai
create a soft copy of this array named "softCopyTeas"
*/
let popularTeas = ["green tea", "oolong tea", "chai"]
// let var1 = 5
// let var2 = var1
// var1 = 9
// console.log(var2)
let softCopyTeas = popularTeas
console.log(softCopyTeas);
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);
// when make changes in array1, array2 automatically changes -> soft copy

/*
7. array named topCities containig berlin, singapore, and newyork
create a hard copy of this array named "hardcopycities"
*/
let topCities = ["Berlin", "Singapore" , "New York"]
// let hardcopycities = [...topCities];
let hardcopycities = topCities.slice();
topCities.pop();
console.log(hardcopycities); // no changes in copy after removing something from arr1 -> hard copy

/*
8. array named european cities containig paris and rome , and "asian cities" array containing "tokyo", "bangkok"
merge these two arrays into a new array named world cities
*/

let europe = ["Paris", "Rome"]
let asia = ["Tokyo", "Bangkok"]
let world = [europe, asia]; // 2d array //o/p->[ [ 'Paris', 'Rome' ], [ 'Tokyo', 'Bangkok' ] ]
world = europe.concat(asia) // desired o/p
console.log(world)

/*
9. you have an array named 'teamenu' containing "masala chai*, "oolong tea", "green tea" and "earl grey"
find length of array and store it in a varibale naem "menulength" 
*/
let teaMenu = ["masala tea", "oolong tea", "green tea", "earl grey"]
let menuLength= teaMenu.length;
console.log(menuLength)

/*
10. array named citybucketlist containig "kyoto", "london", "cape town", "Vancouver"
check if "london" is present in array and store the result in variable "islondoninlist"
 */
let citybucketlist = ["kyoto", "london", "Cape town", "vancouver"];
let islondoninlist = citybucketlist.includes("london"); // o/p-> true/false
console.log(islondoninlist);