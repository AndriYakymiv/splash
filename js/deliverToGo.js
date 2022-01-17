// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

function checkForName(fullName, name) {
    
    
    const result = fullName.includes(name);
    console.log(result)
    
    

    
 
 // Change this line
  return result;
}

checkForName("Egor Kolbasov", "Egor")
checkForName("Egor Kolbasov", "egor")
checkForName("Egor Kolbasov", "egOr")