// ================================== User Money

/* Pseudo code
 Prompt user for the amount of money
userMoney = prompt("How much money do you have?")

 Parse input to floating-point number
moneyAmount = parseFloat(userMoney)

 Check if the input is a valid number
if (isNaN(moneyAmount)) {
   Log an error message and exit
  logError("Invalid input. Please enter a valid number for the amount of money.")
} else {
   Provide suggestions based on the amount of money
  if (moneyAmount < 10) {
    log("You have a small amount of money. Consider saving more.")
  } else if (moneyAmount >= 10 && moneyAmount < 50) {
    log("You have a moderate amount of money. You can buy a small treat.")
  } else if (moneyAmount >= 50 && moneyAmount < 100) {
    log("You have a decent amount of money. Consider buying something nice for yourself.")
  } else {
    log("You have a significant amount of money. You can make a thoughtful purchase or save for the future.")
  }
}
*/

// Ask the user how much money they have
let userMoney = prompt("Колку пари имаш?");

// Convert the user input to a floating-point number
let moneyAmount = parseFloat(userMoney);

// Check if the user entered a valid number
if (isNaN(moneyAmount)) {
  console.error("Неважечки влез. Те молам внеси точен износ.");
} else {
  // Suggestions based on the amount of money
  if (moneyAmount < 50) {
    console.log("Немаш многу пари. Заштеди нешто плус.");
  } else if (moneyAmount >= 50 && moneyAmount < 100) {
    console.log("Имаш доволно пари за да си купиш леб и паштета.");
  } else if (moneyAmount >= 100 && moneyAmount < 300) {
    console.log("Имаш пари за да си купиш солиден оброк пр. '7Седмица'.");
  } else {
    console.log("Имаш многу пари, можеш да одиш на вечера во ресторан.");
  }
}



// =============================== Chinese Zodiac Calculation

/* Pseudo code
 Prompt user for the year
yearInput = prompt("Enter the year:")

 Parse input to integer
 year = parseInt(yearInput)

 Check if the input is a valid number
 if (isNaN(year)) {
 Log an error message and exit
   logError("Invalid input. Please enter a valid number for the year.")
 } else {
 Calculate Chinese Zodiac index
   zodiacIndex = (year - 4) % 12

 Define Chinese Zodiac animals
  zodiacAnimals = [
    "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
    "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
  ]

  Display the result
   log("The Chinese Zodiac animal for the year " + year + " is " + zodiacAnimals[zodiacIndex] + ".")
 } */


// Get input from user for the year
let yearInput = prompt("Enter the year:");

// Parse the input to an integer
let year = parseInt(yearInput);

// Check if the user entered a valid number
if (isNaN(year)) {
  console.error("Invalid input. Please enter a valid number for the year.");
} else {
  // Calculate the Chinese Zodiac
  let zodiacIndex = (year - 4) % 12;

  // Define the Chinese Zodiac animals
  let zodiacAnimals = [
    "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
    "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
  ];

  // Display the result
  console.log(`The Chinese Zodiac animal for the year ${year} is ${zodiacAnimals[zodiacIndex]}.`);
}
