function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const num of order) {
    total += num;
  }
    

  // Change code above this line
  return total;
}