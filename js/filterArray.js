function filterArray(numbers, value) {
    let number = [];
    
    for (let i = 0; i <= numbers.length; i += 1) {
        if (numbers[i] > value) {
            number.push(numbers[i])
        }
    }
    return number
}

filterArray([1, 2, 3, 4, 5], 3)
