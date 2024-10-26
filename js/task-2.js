"use strict";

function getShippingMessage(country, price, deliveryFee) {
    if (price < 0 || deliveryFee < 0) {
        return "Invalid input";
    }
    const totalCost = price + deliveryFee;
    let credit;
    if (totalCost <= 1) {
        credit = "credit";
    } else {
        credit = "credits";
    }
    return `Shipping to ${country} will cost ${totalCost} ${credit}`;
}


console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

