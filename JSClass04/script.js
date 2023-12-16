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
findNumber(5, [5, 2, 5, 8, 5, 3]); 
findNumber(3, [1, 2, 3, 4, 3, 5, 3]); 
findNumber(7, [8, 9, 6, 7, 7, 7, 3]);


// Student exercise #2

function filterNumbers(array, type) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if ((type === 'even' && array[i] % 2 === 0) || (type === 'odd' && array[i] % 2 !== 0)) {
            result.push(array[i]);
        }
    }

    return result;
}

// Test the function with different arrays and types
console.log(filterNumbers([1, 2, 3, 4, 5, 6], 'even')); 
console.log(filterNumbers([1, 2, 3, 4, 5, 6], 'odd')); 


// Homework #1

function tellStory(name, mood, activity) {
    let story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
    console.log(story); 
    return story;
}

// Test the function with different arrays
tellStory('Alice', 'happy', 'playing'); 
tellStory('Bob', 'sad', 'working'); 


// Homework #2

function validateNumber(num) {
    if (isNaN(num)) {
        return false;
    }
    return true;
}

function calculateSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (!validateNumber(numbers[i])) {
            alert('Invalid number detected. Please provide valid numbers.');
            return; // Exit the function early if an invalid number is found
        }
        sum += numbers[i];
    }

    console.log('The sum is:', sum); 
    return sum;
}

// Test the function with different arrays
calculateSum([1, 2, 3, 4, 5]); 
calculateSum([10, 'abc', 30, 40, 50]); // Example(with an invalid number)



// Homework #3

function concatenateStrings(strArray) {
    let result = strArray.join(' ');
    console.log(result); 
    return result;
}

// Test the function with different arrays
concatenateStrings(["Hello", "there", "mentors", "of", "SEDC", "!"]); 
concatenateStrings(["This", "is", "a", "test"]); 


// Homework #4

// Looping structure
for (let i = 1; i <= 20; i++) {
    // Check if the number is even
    if (i % 2 === 0) {
        // Print the even number with a new line
        console.log('\n');
    } else {
        // Print the odd number with an empty space
        console.log(i + ' ');
    }
}



// Homework #5

function calculateSumMinMax(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }

    console.log(`Max: ${max}, Min: ${min}, Sum: ${sum}`);
    return { max, min, sum };
}

// Test the function with different arrays
calculateSumMinMax([3, 5, 6, 8, 11]); 
calculateSumMinMax([-1, 0, 2, -3, 4]); 



// Homework #6


function createFullNames(firstNames, lastNames) {
    let fullNames = [];

    for (let i = 0; i < firstNames.length; i++) {
        let fullName = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;
        fullNames.push(fullName);
    }

    console.log(fullNames);
    return fullNames;
}

// Test the function with different arrays
createFullNames(["Bob", "Jill"], ["Gregory", "Wurtz"]); 
createFullNames(["Alice", "Charlie"], ["Smith", "Brown"]); 
