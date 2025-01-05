function updateOperator(symbol) {
  document.getElementById("operator").value = symbol;
}

function evaluateResult() {
  const num1 = parseFloat(document.getElementById("input1").value);
  const num2 = parseFloat(document.getElementById("input2").value);
  const operator = document.getElementById("operator").value;
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '×':
      result = num1 * num2;
      break;
    case '÷':
      if (num2 === 0) {
        result = 'Error: Division by zero';
      } else {
        result = num1 / num2;
      }
      break;
    case '^':
      result = Math.pow(num1, num2);
      break;
    case '%':
      result = num1 % num2;
      break;
    case '√':
      result = Math.sqrt(num1);
      break;
    case 'log':
      if (num1 <= 0) {
        result = 'Error: Logarithm of non-positive number';
      } else {
        result = Math.log(num1);
      }
      break;
    case 'sin':
      result = Math.sin(toRadians(num1));
      break;
    case 'cos':
      result = Math.cos(toRadians(num1));
      break;
    case 'tan':
      result = Math.tan(toRadians(num1));
      break;
    default:
      result = 'Invalid operation';
      break;
  }

  document.getElementById("output").innerText = result;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
