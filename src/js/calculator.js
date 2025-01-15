document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let expression = ''; 

    display.value = '0';

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (button.id === 'clear') {
                expression = '';
                display.value = '0';
            } 
            else if (button.id === 'equals') {
                try {
                    const result = new Function(`return ${expression}`)();
                    display.value = result;
                    expression = result.toString(); 
                } catch (error) {
                    display.value = 'Error';
                    expression = '';
                }
            } 
            else {
                expression += value;
                display.value = expression;
            }
        });
    });
});
