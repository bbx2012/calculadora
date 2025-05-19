let display = document.getElementById('display');
let currentInput = '';
let firstOperand = null;
let operator = null;

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += currentInput === '' ? '0.' : '.';
        updateDisplay();
    }
}

function appendOperator(op) {
    if (currentInput !== '') {
        firstOperand = parseFloat(currentInput);
        operator = op;
        currentInput = '';
    }
}

function calculate() {
    if (firstOperand !== null && operator !== null && currentInput !== '') {
        let secondOperand = parseFloat(currentInput);
        let result;
        
        switch(operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '×':
                result = firstOperand * secondOperand;
                break;
            case '÷':
                result = firstOperand / secondOperand;
                break;
        }
        
        currentInput = result.toString();
        firstOperand = null;
        operator = null;
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operator = null;
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}