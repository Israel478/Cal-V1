document.getElementById('evaluate').addEventListener('click', function() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const operator = document.querySelector('input[name="operation"]:checked');
  
    if (isNaN(input1) || isNaN(input2) || !operator) {
      alert('Please enter valid inputs and select an operation.');
      return;
    }
  
    let result;
    const operatorValue = operator.value;
    let operatorSymbol;
  
    switch (operatorValue) {
      case 'add':
        result = input1 + input2;
        operatorSymbol = '+';
        break;
      case 'subtract':
        result = input1 - input2;
        operatorSymbol = '-';
        break;
      case 'multiply':
        result = input1 * input2;
        operatorSymbol = '×';
        break;
      case 'divide':
        if (input2 === 0) {
          alert('Cannot divide by zero!');
          return;
        }
        result = input1 / input2;
        operatorSymbol = '÷';
        break;
      case 'power':
        result = Math.pow(input1, input2);
        operatorSymbol = '^';
        break;
      case 'log':
        if (input1 <= 0 || input2 <= 0) {
          alert('Logarithms are undefined for zero or negative numbers.');
          return;
        }
        result = Math.log(input2) / Math.log(input1);
        operatorSymbol = 'log';
        break;
      case 'modulus':
        result = input1 % input2;
        operatorSymbol = '%';
        break;
      default:
        alert('Unknown operation');
        return;
    }
  
    document.getElementById('operator').value = operatorSymbol;
    document.getElementById('output').textContent = result;
  });
  