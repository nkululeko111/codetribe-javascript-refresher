// Exercise 1 - temperature check

let temperature = 20;

if (temperature < 0){
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15){
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25){
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}


// switch cases

let temperatures = 20;

switch (true) {
    case (temperatures < 0):
        console.log("It's freezing!");
        break;
    case (temperatures >= 0 && temperatures <= 15):
        console.log("It's cold.");
        break;
    case (temperatures >= 16 && temperatures <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}

// exercise two divisible check.

let number = 9;

if (number%2 == 0 && number%3 == 0){
    console.log("Divisible by both.")
} else if (number%2==0){
    console.log("Divisible by 2.")
}else if (number%3==0){
    console.log("Divisible by 3.")
}else{
    console.log("Not divisible by 2 or 3.")
}

// switch case 

let num = 9;

switch (true){
    case(num%2 == 0 && num%3 == 0):
        console.log("Divisible by both.");
        break;
    case(num%2 == 0):
        console.log("Divisible by 2.");
        break;
    case(num%3 == 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("NOt Divisible by 2 or 3.");
}


// exercise 3 - for loop.

for (let i = 1; i <= 10; 1++){
    console.log(i);
}

// even numbers
for (let i = 1; i <= 20; i++){
    if (i%2 == 0){
        console.log(i);}
}


// sum of all numbers from 1 to 100
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// arrays
const numbers = [1, 2, 3, 4 , 5]

for (i in numbers){
    console.log(numbers[i]);
}

// find largest number

const numb = [3, 7, 3, 5, 10, 6];
let max = numb[0];
for (i in numbers) {
    if (numb[i] > max) {
        max = numb[i];
    }
}
console.log(max);

// exercise 4 - while loops

var num1 = 1

while (num1 >= 10){
    console.log(num1);
    num1++;
}

// even numbers

var num2 = 1
while (num2 <= 20){
    if (num2%2 === 0)
        console.log(num2);
        num2++;
}


// sum of all numbers from 1 to 100

var num3 = 1 
var sums = 0
while (num3<= 100){
    sums += num3;
    num3++;
}
console.log(sums)

// all multiple of 5 less than 50.

var mul = 1 

while (mul <50){
    if (mul%5 === 0){
        console.log(mul);
    }
    mul++;
}

// exercise 5 do while loops

let i = 1;

do {
    console.log(i);
    i++;
}
while (i <= 10); 



// sum of all numbers from 1 to 100.

let ii = 1;
let numbe = 0

do {

    numbe+=ii;
    ii++;
}
while (ii <= 100); 
console.log(numbe);


// user to enter a number greater than 10;

while (true){
    var userInput = prompt("Enter a number greater than 10: ");
    var numer = parseInt(userInput);
    if (numer > 10){
        console.log("nice!");
        break;
    }else {
        console.log("try again!")
        continue;
    }
}

// guessing game  


while (true){
    var guessed_code = 9;
    var userInput = prompt("Guess number between 1 to 10: ");
    var numer = parseInt(userInput);
    if (numer == guessed_code){
        console.log("You Guessed correctly. nice!");
        break;
    }else if (numer <= 0 || numer > 10){
        console.log("number outside range. try between 1 to 10");
        continue;
    }else{
        console.log("OPPS! TRY AGAIN!")
    }
}