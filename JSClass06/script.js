document.addEventListener('DOMContentLoaded', function () {
    let generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', createTable);
});

function createTable() {
    // Read user input
    let numRowsInput = document.getElementById('numRows');
    let numColsInput = document.getElementById('numCols');

    // Parse input values as integers
    let numRows = parseInt(numRowsInput.value);
    let numCols = parseInt(numColsInput.value);

    // Validate input
    if (isNaN(numRows) || isNaN(numCols)) {
        alert('You need to enter a valid number between 1 and 50!');
        return;
    }

    // Check input range
    if (numRows < 1 || numRows > 50 || numCols < 1 || numCols > 50) {
        alert('You entered too much columns/rows. Please enter a number between 1 and 50.');
        return;
    }

    // Create a table element
    let table = document.createElement('table');

    // Loop to create rows and columns
    for (let i = 0; i < numRows; i++) {
        let row = table.insertRow(i);

        for (let j = 0; j < numCols; j++) {
            let cell = row.insertCell(j);
            cell.textContent = `Row-${i + 1} Column-${j + 1}`;
        }
    }

    // Append the table to the container
    let tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; // To make sure to clear previous content
    tableContainer.appendChild(table);
}