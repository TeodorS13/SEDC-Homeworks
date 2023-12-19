// HOMEWORK PART 1

// Change the text of all paragraphs
let paragraphs = document.querySelectorAll('p');

// Change the text of all headers
let headers = document.querySelectorAll('h1, h3');

// Change text content
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = 'New paragraph text from JavaScript!';
}

for (let i = 0; i < headers.length; i++) {
    headers[i].textContent = 'New header text from JavaScript!';
}


// If it is included, change the text of text element

let textElement = document.querySelector('text');

if (textElement) {
    textElement.textContent = 'New text element content from JavaScript!';
}

