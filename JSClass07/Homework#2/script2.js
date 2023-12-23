// Function to create a book object
function createBook(title, author, readingStatus) {
    return {
        title: title,
        author: author,
        readingStatus: readingStatus,
        displayInfo: function() {
            if (this.readingStatus) {
                return `Already read '${this.title}' by ${this.author}.`;
            } else {
                return `You still need to read '${this.title}' by ${this.author}.`;
            }
        }
    };
}

// Function to handle form submission
function submitForm() {
    // Get values from the form
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var readingStatusString = document.getElementById('readingStatus').value.toLowerCase();

    // Validate readingStatus input
    var readingStatus;
    if (readingStatusString === 'yes') {
        readingStatus = true;
    } else if (readingStatusString === 'no') {
        readingStatus = false;
    } else {
        alert('Please enter "yes" or "no" for the reading status.');
        return;
    }

    // Create a book object
    var book = createBook(title, author, readingStatus);

    // Display book information
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = book.displayInfo();
}

// Add click event listener to the submit button
document.getElementById('submitButton').addEventListener('click', submitForm);
