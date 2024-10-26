"use strict";

function makeTransaction(quantity, pricePerDroid) {
    if (quantity <= 0 || pricePerDroid <= 0) {
        return "Invalid input";
    }
    let droid;
    if (quantity == 1) {
        droid = "droid";
    } else {
        droid = "droids";
    }
    const totalPrice = quantity * pricePerDroid; // I use variable totalPrice, becasue it's in the task description, insted of just return quantity * pricePerDroid;
    return `You ordered ${quantity} ${droid} worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000credits!" 
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!" 
console.log(makeTransaction(10, 500)); // "You ordered10 droids worth 5000 credits!"