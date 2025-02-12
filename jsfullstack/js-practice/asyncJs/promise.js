function validateCart(cart) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cart.length > 0) {
        resolve("Cart validated");
      } else {
        reject("Cart is empty");
      }
    }, 1000);
  });
}

function processPayment(cartTotal) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cartTotal > 0) {
        resolve("Payment successful");
      } else {
        reject("Payment failed");
      }
    }, 2000);
  });
}

function confirmOrder() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Order confirmed"), 1000);
  });
}

// Simulating a Flipkart cart
const cart = ["Monitor"];
const cartTotal = 15000;

// Placing the order
validateCart(cart)
  .then((response) => {
    console.log(response);
    return processPayment(cartTotal);
  })
  .then((response) => {
    console.log(response);
    return confirmOrder();
  })
  .then((response) => console.log(response))
  .catch((error) => console.log("Error:", error))
  .finally(() => console.log("Order process completed"));
