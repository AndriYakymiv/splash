


function calculateEngravingPrice(message, pricePerWord) {

    const fillWord = message.split(" ");
    const lengtArray = fillWord.length;
    const costWord = lengtArray * pricePerWord;

      return (costWord);
    
        
    // console.log(fillWord);
    // console.log(lengtArray);
    // console.log(costWord);
    
}



calculateEngravingPrice("JavaScript is in my blood", 10)
calculateEngravingPrice("JavaScript is in my blood", 20)
calculateEngravingPrice("Web-development is creative work", 40)
calculateEngravingPrice("Web-development is creative work", 20)