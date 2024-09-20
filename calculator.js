function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error: Division by zero';
            }
            return num1 / num2;
        default:
            return 'Error: Invalid operator';
    }
}


const num1 = 10;
const num2 = 5;

console.log('Addition:', calculate(num1, num2, '+'));
console.log('Subtraction:', calculate(num1, num2, '-'));
console.log('Multiplication:', calculate(num1, num2, '*'));
console.log('Division:', calculate(num1, num2, '/'));
console.log('Division by zero:', calculate(num1, 0, '/'));