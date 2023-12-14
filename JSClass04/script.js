//  Example #1

    // Initialize an array
    let values = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // Determine the largest value using loop
    let largestValue = values[0];
    // WHILE LOOP 
    // Initialize the loop counter
    let i = 1; 

    while (i < values.length) {
        if (values[i] > largestValue) {
            largestValue = values[i];
        }
        i++; // Increment the loop counter
    }

    // Print the largest value
    console.log("The largest value is: " + largestValue);




// Example #2
function printDigits(number) {
    // Convert the number to a string to easily access individual digits
    let numberString = number.toString();

    // Loop through each digit and print it
    for (var i = 0; i < numberString.length; i++) {
        console.log("Digit at position " + (i + 1) + ": " + numberString[i]);
    }
}

// Example: Read a number from the user and print its digits
let userInput = prompt("Enter a number:");
let userNumber = parseFloat(userInput);

// Check if the input is a valid number
if (!isNaN(userNumber)) {
    printDigits(userNumber);
} else {
    console.log("Invalid input. Please enter a valid number.");
}


//  Student Exercise #1
function findNumber(number, array) {
    let count = 0;
    let i = 0;

    while (i < array.length) {
        if (array[i] === number) {
            count++;
        }
        i++;
    }

    console.log(`There are ${count} occurrences of number ${number} in the array`);
}

// Test the function with different arrays
findNumber(5, [5, 2, 5, 8, 5, 3]); // Example 1
findNumber(3, [1, 2, 3, 4, 3, 5, 3]); // Example 2
findNumber(7, [8, 9, 6, 7, 7, 7, 3]); // Example 3
