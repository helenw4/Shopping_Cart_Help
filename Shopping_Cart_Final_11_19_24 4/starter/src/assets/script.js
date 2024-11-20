// Created 3 product objects 

let firstProd = {
  name: "Shirt",
  price: 30,
  quantity: 0,
  productId: 1,
  image: "../src/images/shirt_shopping_cart (1).jpeg",
};
let secondProd = {
  name: "Hat",
  price: 20,
  quantity: 0,
  productId: 2,
  image: "../src/images/hat_shopping_cart (1).jpeg",
};
let thirdProd = {
  name: "strawberry",
  price: 25,
  quantity: 0,
  productId: 3,
  image: "../src/images/gloves_shopping_cart (1).jpeg",
};

//Create an array named products which you will use to add all of your product object
let products = [firstProd, secondProd, thirdProd];

/* Declare an empty array named cart to hold the products that customer will put in the cart */

let cart = [];

//Create a function named addProductToCart that takes in the product productId as an argument
function addProductToCart(productId) {
  let prod = getProductId(productId);
  if (prod) {
    prod.quantity += 1;
    if (!cart.includes(prod)) {
      cart.push(prod);
    }
  }
}

//Create a function named increaseQuantity that takes in the productId as an argument
function increaseQuantity(productId) {
  let prod = getProductId(productId);
  if (prod) {
    prod.quantity += 1;
  }
}

//Create a function named decreaseQuantity that takes in the productId as an argument
function decreaseQuantity(productId) {
  let prod = getProductId(productId);
  if (prod) {
    prod.quantity--;
    if (prod.quantity === 0) {
      removeProductFromCart(productId);
    }
  }
}

// Create a function named removeProductFromCart that takes in the productId as an argument
function removeProductFromCart(productId) {
  let index = cart.findIndex(item => item.productId === productId);
  if (index !== -1) {
    cart[index].quantity = 0;
    cart.splice(index, 1);
  }
}

//find a product by it's productId
function getProductId(productId) {
  return products.find((product) => product.productId === productId) || null;
}

// Create a function named cartTotal that has no parameters
function cartTotal() {
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCost += cart[i].quantity * cart[i].price;
  }
  return totalCost;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart = [];
}

// Create a function named pay that takes in an amount as an argument
let total = 0;

function pay(amount) {
  total += amount;
  let remainBalance = total - cartTotal();
  return remainBalance;
}

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
};
