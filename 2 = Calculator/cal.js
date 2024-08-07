function calculator(num1, num2, operator) {
    // Input validation
    const validOperators = ['+', '-', '*', '/'];
    if (!validOperators.includes(operator)) {
      console.error('Invalid operator');
      return;
    }
  
    // Calculation
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
        if (num2 === 0) {
          console.error('Division by zero');
          return;
        }
        result = num1 / num2;
        break;
      default:
        console.error('Unexpected error');
        return;
    }
    return result;
  }
  
  // Example usage:
  const num1 = 11;
  const num2 = 5;
  const operator = '-';
  
  const result = calculator(num1, num2, operator);
  console.log(result); // Output: 15 
  