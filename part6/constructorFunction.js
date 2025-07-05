// function greet(name){
//     console.log("hello", name);
// }

function Person(name, age){
    this.name = name
    this.age = age
}

// this: keyword refers to the newly created object inside a constructor function 

function Car(make, model){
    this.make = make
    this.model = model
}

let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

let myNewCar = new Car("Tata", "Safari")
// console.log(myNewCar)

function Teas(type){
    this.type = type
    this.description = function(){
        return `this is a cup of ${this.type}`
    }
}
let lemonTea = new Teas("lemon Tea")
console.log(lemonTea.description());

function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

let dog = new Animal("Dog")
console.log(dog.sound());

let cat = new Animal("Cat")
console.log(cat.sound())

function Drink(name){
    if(!new.target){
        throw new Error("drink must be called with new keyword");
    }
    this.name = name
}
let tea = new Drink("tea")
// let coffee = Drink("coffee")




