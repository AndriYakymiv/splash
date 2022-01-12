function findLongestWord(string) {
    let newString = string.split(" ");
    let longestWord = "";

    for (let i = 0; i < newString.length; i += 1) {

        if (longestWord.length < newString[i].length) {
            longestWord = newString[i];  
        }
    }

return longestWord;
}


findLongestWord("The quick brown fox jumped over the lazy dog");