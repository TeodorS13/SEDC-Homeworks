// Create the constructor function 
function Product(name, category, hasDiscount, price) {
  this.name = name;
  this.category = category;
  this.hasDiscount = hasDiscount;
  this.price = price;
}


// Creating an array of 20 products, we can add more if we need
const products = [
  new Product("Apple", "Food", true, 15),
  new Product("Banana", "Food", false, 25),
  new Product("Carrot", "Vegetables", true, 18),
  new Product("Orange", "Food", false, 22),
  new Product("Tomato", "Vegetables", false, 12),
  new Product("Laptop", "Electronics", true, 1200),
  new Product("Headphones", "Electronics", false, 50),
  new Product("Desk Chair", "Furniture", true, 80),
  new Product("Bookshelf", "Furniture", false, 120),
  new Product("T-shirt", "Clothing", true, 15),
  new Product("Jeans", "Clothing", false, 40),
  new Product("Backpack", "Accessories", true, 30),
  new Product("Watch", "Accessories", false, 100),
  new Product("Sunglasses", "Accessories", true, 18),
  new Product("Smartphone", "Electronics", false, 500),
  new Product("Gaming Mouse", "Electronics", true, 40),
  new Product("Coffee Maker", "Appliances", false, 60),
  new Product("Toaster", "Appliances", true, 25),
  new Product("Bedside Lamp", "Home Decor", false, 20),
  new Product("Throw Pillow", "Home Decor", true, 10),
];

  
  // Requirement 1: Find all products with price greater than 20
  const productsGreaterThan20 = products.filter(product => product.price > 20);
  
  // Requirement 2: Get the names of all products of Category Food, that are on discount
  const foodProductsOnDiscount = products
    .filter(product => product.category === "Food" && product.hasDiscount)
    .map(product => product.name);
  
  // Requirement 3: Get the price of all products that are on discount
  const pricesOfProductsOnDiscount = products
    .filter(product => product.hasDiscount)
    .map(product => product.price);
  
  // Requirement 4: Find the name and price of all products with name starting with a vowel, that are not on discount
  const productsNotOnDiscountStartingWithVowel = products
    .filter(product => !product.hasDiscount && /^[aeiou]/i.test(product.name))
    .map(product => ({ name: product.name, price: product.price }));
  

 // Console the results
console.log("Products with price greater than 20:", productsGreaterThan20);
console.log("Names of Food products on discount:", foodProductsOnDiscount);
console.log("Prices of products on discount:", pricesOfProductsOnDiscount);
console.log("Products not on discount starting with a vowel:", productsNotOnDiscountStartingWithVowel);