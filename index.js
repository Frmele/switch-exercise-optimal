'use strict';

console.log("Please tell us your favourite animal:");
console.log("Choose one of: dog, cat, fish, hamster, horse or bunny");
const favouriteAnimal = prompt("");

// Write your code here

let hair;
let car;
let swim;

switch (favouriteAnimal) {
   case "dog":
     hair = "has hair.";
     car = "fits in a car.";
     swim = "likes to swim.";
     break;
   case "cat":
     hair = "has hair.";
     car = "fits in a car.";
     swim = "does not like to swim.";
     break;
   case "fish":
     hair = "does not have hair.";
     car = "fits in a car.";
     swim = "likes to swim.";
     break
   case "hamster":
     hair = "has hair.";
     car = "fits in a car.";
     swim = "does not like to swim.";
     break
   case "horse":
     hair = "has hair.";
     car = "does not fit in a car.";
     swim = "likes to swim.";
     break
   case "bunny":
     hair = "has hair.";
     car = "fits in a car.";
     swim = "does not like to swim.";
     break
   default:
     hair = "";
     car = "";
     swim = "";
 }

var sentence = "My favourite animal"

if (hair !== "" && car !== "" && swim !== "" ) {
  console.log(`${sentence} ${hair}`);
  console.log(`${sentence} ${car}`);
  console.log(`${sentence} ${swim}`);
} else {
  console.log(`My favorite animal is ${favouriteAnimal} because is awesome!`);
}

