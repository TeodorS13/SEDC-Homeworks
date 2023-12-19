// Ask for recipe name
let recipeName = prompt('Enter the name of the recipe:');

// Ask for number of ingredients
let numberOfIngredients = parseInt(prompt('How many ingredients do we need for the recipe?'));

let ingredients = [];
for (let i = 0; i < numberOfIngredients; i++) {
    // Ask for ingredient name
    let ingredientName = prompt(`Enter the name of ingredient #${i + 1}:`);
    ingredients.push(ingredientName);
}

// Create a heading element for the recipe name
let recipeHeading = document.createElement('h2');
recipeHeading.textContent = recipeName;

// Create an unordered list for the ingredients
let ingredientsList = document.createElement('ul');

// Populate the list with list items for each ingredient
ingredients.forEach(function (ingredient) {
    let listItem = document.createElement('li');
    listItem.textContent = ingredient;
    ingredientsList.appendChild(listItem);
});

// Append the elements to the body of the HTML document
document.body.appendChild(recipeHeading);
document.body.appendChild(ingredientsList);
