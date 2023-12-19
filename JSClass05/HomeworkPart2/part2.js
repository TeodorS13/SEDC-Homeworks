
// HOMEWORK PART 2

// Print all numbers from an array and the sum

// Create an array with numbers
let numbers = [3, 4, 6, 8, 15];

// Print numbers in a list
let numberList = document.getElementById('numberList');

numbers.forEach(function(number) {
    let listItem = document.createElement('li');
    listItem.textContent = number;
    numberList.appendChild(listItem);
});


// Calculate and print out the sum
let sumParagraph = document.getElementById('sumParagraph');
let sum = numbers.reduce(function(acc, num) {
    return acc + num;
}, 0);

// Display the sum on one line
sumParagraph.textContent = `Sum: ${sum}`;

// Create a new paragraph element for the mathematical equation
var equationParagraph = document.createElement('p');
equationParagraph.textContent = `Equation: ${numbers.join(' + ')} = ${sum}`;

// Append the equation paragraph below the list
document.body.appendChild(equationParagraph);


