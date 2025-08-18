// Implementing Simple Calculator

function calculator(num1, operator, num2) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : "Error: Cannot divide by 0";
      break;
    default:
      result = "Error: Invalid operator";
  }

  return result;
}

// Example usage:
console.log(calculator(15, '+', 5));  // 15
console.log(calculator(10, '-', 5));  // 5
console.log(calculator(10, '*', 5));  // 50
console.log(calculator(10, '/', 5));  // 2
console.log(calculator(10, '/', 0));  // Error: Cannot divide by 0
