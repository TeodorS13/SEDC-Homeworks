// Function to handle form submission
function submitForm() {
    // Get values from the form
    var selectedKind = document.getElementById('animalKind').value;
    var animalName = document.getElementById('animalName').value;

    // Create an Animal object
    var Animal = {
        name: animalName,
        kind: selectedKind,
        speak: function(message) {
            console.log(`The ${this.kind} ${this.name} says: '${message}'`);
        }
    };

    // Prompt the user for a message
    var message = prompt('Enter a message for the animal to speak:');
    
    // Call the speak method with the provided message
    Animal.speak(message);
}

// Add click event listener to the submit button
document.getElementById('submitButton').addEventListener('click', submitForm);
