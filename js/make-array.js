function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
  
    
    const sumArray = firstArray.concat(secondArray);
    
    if (sumArray.length > maxLength) {

        return sumArray.slice(0, maxLength);
    }

    return (sumArray);


    


  



}
  
makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)
