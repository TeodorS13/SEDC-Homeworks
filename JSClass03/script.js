// The Age Calculator

// Function to calculate age
function calculateAge(birthYear) {
    // Get the current year dynamically
    var currentYear = new Date().getFullYear();

    // Calculate the age
    var age = currentYear - birthYear;

    // Display the result
    console.log("You are " + age + " years old");
}

// Call the function with different sets of values
calculateAge(1962);
calculateAge(1915);
calculateAge(2006);


// Homework Part 2

// Function to calculate dog's age in human years
function calculateDogAgeInHumanYears(dogAge) {
  let humanAge = dogAge * 7;
  return humanAge;
}

// Function to calculate human age in dog years
function calculateHumanAgeInDogYears(humanAge) {
  let dogAge = humanAge / 7;
  return dogAge;
}


console.log(calculateDogAgeInHumanYears(11));  
console.log(calculateHumanAgeInDogYears(42)); 



// Homework Part 3

// Hardcoded account balance
let accountBalance = 1000;

// Function to withdraw cash from the ATM
function withdrawCash(amount) {
    if (amount > accountBalance) {
        return "Not enough money";
    } else {
        accountBalance -= amount;
        return `Amount withdrawn: ${amount}, Money left on the account: ${accountBalance}`;
    }
}

// Bonus: Make it work with prompt

function withdrawWithPrompt() {
    // Prompt the user for the withdrawal amount
    const withdrawalAmount = parseFloat(prompt("Enter the amount to withdraw:"));

    // Check if the input is a valid number
    if (isNaN(withdrawalAmount)) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }

    const result = withdrawCash(withdrawalAmount);
    alert(result);
}

withdrawWithPrompt();
