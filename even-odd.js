function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return `${number} is an even number. 🟢`;
    } else {
        return `${number} is an odd number. 🟠`;
    }
}

// Example usage:
console.log(checkEvenOrOdd(7));