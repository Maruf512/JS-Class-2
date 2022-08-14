console.log("hello");

// math operation
const currentYear = 2022;
const ageTumpa = currentYear - 1998;
const ageRahat = currentYear - 1996;

console.log(ageTumpa, ageRahat);

console.log(ageTumpa * 2);
console.log(ageTumpa / 2);
console.log(ageTumpa ** 2); //2 to the power of 24 (24^2)

const firstName = "Mikasa";
const lastName = "Arkamin";

console.log(firstName + " " + lastName);

const bikeBrand = "Yamaha";
const bikeModel = "Kawasaki";
const fullBikeName = bikeBrand + " " + bikeModel;
// console.log(bikeBrand + " " + bikeModel);
console.log(fullBikeName);

// assignment operators
let number = 20 + 10; //30
// number = number + 15; //45
number += 15; //45
number -= 10; //35
// number += 1; // 36
number++; // adds only 1
// number -= 1;
number--; // minus 1

console.log(number);

// comparison operator (>, <, >=, <=)
console.log(ageTumpa > ageRahat);

// oparator precedence
console.log(2022 > 2002 + 16);
console.log(20 + (10 + 20) * 2);

//  template literals
const nameTumpa = "Tumpa";
const tumpaAge = 24;
const jobTumpa = "programmer";
// const bioTumpa =
//   "My name is " +
//   nameTumpa +
//   ", " +
//   tumpaAge +
//   " " +
//   "years old and I am a " +
//   jobTumpa +
//   ".";

const bioTumpa = `My name is ${nameTumpa}, ${tumpaAge} years old and i am a ${jobTumpa}.`; // back tick

console.log(bioTumpa);

// console.log("I am Maruf and \n\
// i am a \n\
// developer");

console.log(`
Hello
I am Maruf
And
I
Am
A
Programmer.
`);

// Conditionals or control structure
const birthYear = 2012;
if (birthYear <= 1999) {
  console.log("You are a 90's kid 😍");
} else {
  console.log("You are not a 90's kid! 😒");
}

const bikeSpeed = 75;

if (bikeSpeed > 60) {
  console.log("You can not enter the padma bridge");
} else {
  console.log("you can enter.");
}

// Multiple conditions
// if we need mustiple blocks condition then we should use (if) or if we need single output from multiple conditions then we should use (else if)
const money = 0;
const pizzaPrice = 350;
const burgerPrice = 289;
const milkShake = 80;
const singaraPrice = 5;

if (money > pizzaPrice) {
  console.log("Pizza Khabo");
} else if (money > burgerPrice) {
  console.log("Burger Khabo");
} else if (money > milkShake) {
  console.log("Milk Shake Khabo");
} else if (money > singaraPrice) {
  console.log("Singara Khabo");
} else {
  console.log("Pani Khabo");
}

// grade calculation
const marks = 33;

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 70) {
  console.log("A");
} else if (marks >= 60) {
  console.log("A-");
} else if (marks >= 50) {
  console.log("B");
} else if (marks >= 40) {
  console.log("C");
} else if (marks >= 33) {
  console.log("Passed");
} else {
  console.log("Failed");
}

// type conversion (manually) and coercion (automattically)

const inputYear = "Ghost";
console.log(inputYear + 10 + 20); // string + number + number
console.log(inputYear - 10); // string - number
// NaN not a number

console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 20);
console.log(10 / 20);
console.log("Baby" + 20); //converts everithing to string
console.log("Baby" - 20); //converts everithing to number if a string contains value or it will show (NaN- not a number)
console.log("Baby" * 20);
console.log("Baby" / 20);
console.log("Baby" + " " + "Babu");
console.log("Baby" - " " - "Babu");
console.log(100 - "100");
console.log(100 * "100");
console.log(100 / "100");
console.log(100 + "200");

const testNumber = "200";
console.log(testNumber, typeof testNumber);
console.log(Number(testNumber));
console.log(Number("500.55"));
console.log(Number("Tanha"));

const testNumber2 = 200;
const currentKiGasa = false;
console.log(testNumber2, typeof testNumber2);

console.log(String(testNumber2));
console.log(typeof currentKiGasa);
console.log(typeof String(currentKiGasa));

console.log(typeof NaN); //NaN Counts as a Number

// game
let a = "1" + 1;
a -= 1;
console.log(a);

let x = 2 + 3 + 4 + "5";
x += 5;
console.log(x);

let y = "10" - "5" - "3" - 2 + "5";
y -= 10;
console.log(y);
