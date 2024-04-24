document.addEventListener('DOMContentLoaded',() => {
    const input = document.getElementById('input');
    const buttons = document.querySelectorAll('.buttons button');
     let expression = '';
     buttons.forEach(button =>{
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            if (buttonText === '=') {
                try {
                    expression = eval(expression).toString();
                }
            catch(error) {
                expression = 'Error';
            } 
        } else if (buttonText==='C') {
                expression = '';

            } else {
                expression += buttonText;
            }
            input.value = expression;
        });
     });
});