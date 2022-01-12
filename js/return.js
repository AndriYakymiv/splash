function getExtremeElements(array) {
    const firstElement = array[0];
    const lastIndex = array[array.length - 1];
        
    return [firstElement,lastIndex];
}

getExtremeElements([1, 2, 3, 4, 5]);
getExtremeElements(["Earth", "Mars", "Venus"])
getExtremeElements(["apple", "peach", "pear", "banana"])


