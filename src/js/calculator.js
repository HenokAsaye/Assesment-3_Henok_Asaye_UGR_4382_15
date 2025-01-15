document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentValue = ''; 
    let operator = ''; 
    let previousValue = ''; 
    display.value = '0';

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            if (button.id === 'clear') {
                currentValue = '';
                previousValue = '';
                operator = '';
                display.value = '0';
            } 
            else if (button.id === 'equals') {
                if (previousValue && operator && currentValue) {
                    const result = calculate(parseFloat(previousValue), parseFloat(currentValue), operator);
                    display.value = result;
                    previousValue = result.toString(); 
                    currentValue = '';
                    operator = '';
                }
            } 
            else if (button.classList.contains('operator')) {
                if (currentValue) {
                    operator = value;
                    previousValue = currentValue;
                    currentValue = '';
                    display.value = `${previousValue} ${operator}`;
                }
            } 
            else {
                currentValue += value;
                display.value = operator ? `${previousValue} ${operator} ${currentValue}` : currentValue;
            }
        });
    });

    function calculate(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return b !== 0 ? a / b : "Can't divide by zero!"; 
            default:
                return 0;
        }
    }
});
