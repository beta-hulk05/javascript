console.log("Babbar")
console.log("Babbar")
console.log("Babbar")
console.log("Babbar")
console.log("Babbar")
console.log("Babbar")
console.log("Babbar")
console.log("Babbar")
console.log("Babbar")
console.log("Babbar")
console.log("Babbar")
console.log("Babbar")
console.log("Babbar")
console.log("Babbar")
console.log("Babbar")
console.log("Babbar")


// for loop
for(let i = 1; i<=10; i++){
    console.log("Bhavay");
}

for(let i = 1; i<=5; i++){
    console.log(i);
}

for(let i = 5; i>=1; i--){
    console.log(i);
}

// break
for(let i = 1; i<=6; i++){
    if(i==4){
        break;
    }else{
        console.log("Bhavay")
    }
}


// while
// let i  =1;
while(i<=10){
    console.log("Bhavay");
    i++;
}

// let i = 1;
while(i<5){
    if(i==3){
        i++;
        continue;
    }  
    else{
        console.log("Hi")
    }
    i++;
}


// do while loop
// let i = 1;
do{
    console.log("Bhavay");
    i++
}while(i<=10)

Strings
// let firstName = "Love"
let lastName = 'Babbar'
console.log(firstName)

let firstName = new String("Love Babbar");
console.log(firstName)

let op1 = 'English '
let op2 = 'Hindi'

let ans = op1 + op2 // concatenation
console.log(ans)

let finalAns = `${op1}${op2}`;
console.log(finalAns);
console.log(finalAns.length)

console.log(op2.toUpperCase())

let str = "Babbar"
console.log(str.substring(2,5));
console.log(str.substring(2));

let sentence = "Hello jee kaise ho saare"

let words = sentence.split(' ')
console.log(words)
console.log(words.join(' '))