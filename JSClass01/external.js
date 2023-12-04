// Write a program that will calculate area of circle
let pi = 3.14;
let r = 2;
let area = pi*(r*2);
console.log(area);

/* Write a program that will calculate the price of 30 phones, 
where the price of one phone is $119.95 and the tax rate is 5%*/

/* Pseudo code
  First we will set one phone to be $119.95
  Second we will set the tax rate of one phone to be 5%
  Third we will set the quantity of the phones */ 


let phonePrice = 119.95;
let taxRate = 0.05;
let quantity = 30;

// Calculate total cost before tax
let subtotal = phonePrice * quantity;

// Calculate tax amount
let tax = subtotal * taxRate;

// Calculate tax amount per unit
let taxPerUnit = phonePrice * taxRate;

// Calculate total cost including tax
let total = subtotal + tax;

console.log("Subtotal: $" + subtotal);
console.log("Tax: $" + tax);
console.log("Tax Per Unit: $" + taxPerUnit);
console.log("Total: $" + total);
