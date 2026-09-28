const Calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    },

    divide(a, b) {
        if (b === 0) {
            return 'Error: Division by zero';
        }
        return a / b;
    }
};

function runCalculator() {
    console.log('--- Basic Calculator Test ---');

    const num1 = 12;
    const num2 = 4;

    console.log(`${num1} + ${num2} = ${Calculator.add(num1, num2)}`);
    console.log(`${num1} - ${num2} = ${Calculator.subtract(num1, num2)}`);
    console.log(`${num1} * ${num2} = ${Calculator.multiply(num1, num2)}`);
    console.log(`${num1} / ${num2} = ${Calculator.divide(num1, num2)}`);
    console.log(`${num1} / 0 = ${Calculator.divide(num1, 0)}`);
}

runCalculator()