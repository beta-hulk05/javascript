//prototype : extra functionality and property given to that prototype
let computer = {cpu: 12}
let lenovo = {
    screen: "HD",
    __proto__: computer,
}
let tomHardware = {}

// console.log(`computer` , lenovo.__proto__);

let genericCar= {
    tyres: 4,
    stearing: true
}

let tesla = {
    driver:"AI",
}

Object.setPrototypeOf(tesla, genericCar)
console.log(`tesla: ` , Object.getPrototypeOf(tesla))