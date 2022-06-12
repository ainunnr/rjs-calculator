let prevNumber = '';
let calculationOperator = '';
let currentNumber = '';

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    if(number === ''){
        calculatorScreen.value = 0;
    }
    else{
        calculatorScreen.value = number;
    }
}

const inputNumber = (number) => {
    if (currentNumber !== '') {
        currentNumber += number;
    }
    else {
        currentNumber = number;
    }
}

const inputOperator = (operator) => {
    console.log(prevNumber)
    console.log(calculationOperator)
    console.log(currentNumber)
    if(calculationOperator === ''){
        if(currentNumber === ''){
            // calculationOperator = operator;
            prevNumber = '0';
        }
        else{
            prevNumber = currentNumber;
        }
    }
    else if (prevNumber !== '' && currentNumber !== ''){
        calculate();
        updateScreen(currentNumber);
        prevNumber = currentNumber;
    }

    // if(currentNumber !== ''){
        calculationOperator = operator;
        currentNumber = '';
    // }
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value)
    })
});

const calculate = () => {
    let result = '';

    if(currentNumber !== ''){
        switch(calculationOperator) {
            case "+":
                result = parseFloat(prevNumber) + parseFloat(currentNumber);
                break
            case "-":
                result = parseFloat(prevNumber) - parseFloat(currentNumber);
                break
            case "*":
                result = parseFloat(prevNumber) * parseFloat(currentNumber);
                break
            case "/":
                result = parseFloat(prevNumber) / parseFloat(currentNumber);
                break
            case "%":
                result = parseFloat(prevNumber) % parseFloat(currentNumber);
                break
            default:
                break
        }

        calculationOperator = ''
        currentNumber = result
    }    
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    calculate();
    if(currentNumber !== ''){
        updateScreen(currentNumber);
    }
});

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = ''
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})