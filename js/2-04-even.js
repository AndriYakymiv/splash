const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
let total = 0;
for (let i = 0; i < numbers.length - 1; i += 1) {
    const number = numbers[i];
    if (number % 2 === 0) {
        total += number;
    }
}
console.log(total);