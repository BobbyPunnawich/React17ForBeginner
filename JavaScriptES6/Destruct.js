// Destructuring

// Array
const colors = ["white", "red"];

const [a, b] = colors;

console.log(a);
console.log(b);

console.log("------------");

// Object
const product = {
  productName: "Computer",
  price: 45000,
  stock: 10,
};

const { productName, price, stock } = product;

console.log(productName);
console.log(price);
console.log(stock);
