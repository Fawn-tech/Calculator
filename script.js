//calculator

const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Enter the first number: "));
let operator = prompt("Enter the operator (+, -, *, /): ");
let num2 = parseFloat(prompt("Enter the second number: "));

let result;
// addition, subtraction, multiplication, division

// Perform the calculation based on the operator
if (operator === "+") {git
    result = num1 + num2;
}
else if (operator === "-") {
    result = num1 - num2;
}
else if (operator === "*") {
    result = num1 * num2;
}   
else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        console.log("Error: Division by zero is not allowed.");git
        return;
    }
}
else {
    console.log("Invalid operator. Please use +, -, *, or /.");
    return;
}

console.log("Result: " + result);