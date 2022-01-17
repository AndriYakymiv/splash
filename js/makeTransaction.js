function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  let totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice <= customerCredits) {
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
  } else {
    message = `Insufficient funds!`;
  }
  return message;
}