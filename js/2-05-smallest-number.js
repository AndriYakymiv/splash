const numbers = [10, 15, 8, 9, 12, 14, 15, 27, 30, 18, 11];
let smallestNumber = numbers[0];

for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}
console.log('Smallest Number:', smallestNumber);