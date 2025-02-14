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

// Placing Order using async/await
async function placeOrder() {
  try {
    const cart = ["Monitor"];
    const cartTotal = 15000;

    const cartStatus = await validateCart(cart);
    console.log(cartStatus);

    const paymentStatus = await processPayment(cartTotal);
    console.log(paymentStatus);

    const orderStatus = await confirmOrder();
    console.log(orderStatus);

    console.log("Order process completed");
  } catch (error) {
    console.log("Error:", error);
  }
}

placeOrder();
