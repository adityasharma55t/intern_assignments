function validateCart(cart, callback) {
  setTimeout(() => {
    if (cart.length > 0) {
      console.log("Cart validated");
      callback(null, cart);
    } else {
      callback("Cart is empty");
    }
  }, 1000);
}

function processPayment(cartTotal, callback) {
  setTimeout(() => {
    if (cartTotal > 0) {
      console.log("Payment successful");
      callback(null, "Payment Done");
    } else {
      callback("Payment failed");
    }
  }, 2000);
}

function confirmOrder(callback) {
  setTimeout(() => {
    console.log("Order confirmed");
    callback(null, "Order Placed");
  }, 1000);
}

// Placing order using callbacks
function placeOrder() {
  const cart = ["Monitor"];
  const cartTotal = 15000;

  validateCart(cart, (error, validatedCart) => {
    console.log("Validated Contents:", validatedCart);
    if (error) {
      console.log("Error:", error);
      return;
    }

    processPayment(cartTotal, (error, paymentStatus) => {
      console.log("Validated Payment Status:", paymentStatus);
      if (error) {
        console.log("Error:", error);
        return;
      }

      confirmOrder((error, orderStatus) => {
        console.log("Validated Order Status:", orderStatus);
        if (error) {
          console.log("Error:", error);
          return;
        }

        console.log("Order process completed");
      });
    });
  });
}

placeOrder();
