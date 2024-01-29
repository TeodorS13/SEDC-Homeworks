// Step 1: Function generatelist is called when the "Generate List" button is clicked
function generateList() {
    // Step 2: Get the input values
    let color = document.getElementById('colorInput').value.trim();
    let fontSize = document.getElementById('fontSizeInput').value.trim();
    let itemsInput = document.getElementById('itemsInput').value.trim();

    // Step 3: Check for the required fields
    if (!color || !fontSize || !itemsInput) {
        alert('Please fill in all required fields.');
        return;
    }

    // Step 4: Split items input into an array
    let itemsArray = itemsInput.split(',');

    // Step 5: Create a new ul element
    let ulElement = document.createElement('ul');

    // Step 6: Set styles based on input values
    ulElement.style.color = color;
    ulElement.style.fontSize = fontSize + 'px';

    // Step 7: Add li elements to the ul
    itemsArray.forEach(function(item) {
        let trimmedItem = item.trim(); 
        if (trimmedItem !== '') {
            let liElement = document.createElement('li');
            liElement.textContent = trimmedItem;
            ulElement.appendChild(liElement);
        }
    });

    // Step 8: Display the generated list
    let listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = ''; 
    listContainer.appendChild(ulElement);

    // Step 9: Clear input fields
    document.getElementById('colorInput').value = '';
    document.getElementById('fontSizeInput').value = '';
    document.getElementById('itemsInput').value = '';
}



// Step 10: Function to initialize the button click event
function initializeButtonClick() {
    let button = document.getElementById('generateButton');
    button.onclick = generateList;
}

// Step 11: Call the initializeButtonClick function when the document is fully loaded
document.addEventListener('DOMContentLoaded', initializeButtonClick);
