const calculatorScreen = document.querySelectorAll('.calculator-screen');

const updateScreen = (number) => {
	calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		console.log(event.target.value);
	})
});

let number = '';
let calculatorOperator ='';
let currentNumber = '0';

numbers.forEach ((number) => {
	number.addEventListener("click", (event) => {
		console.log(event.target.value);
		updateScreen(currentNumber);
	})
});

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number
	}else {
		currentNumber += number
	}
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		console.log(event.target.value);
	})
});

const inputOperator = (operator) => {
	if (calculatorOperator === '') {
		prevNumber = currentNumber;
	}
	calculatorOperator = operator;
	currentNumber = '';
};

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
	calculate();
	updateScreen(currentNumber);
});

const calculator = () => {
	let result = '';
	switch(calculatorOperator) {
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case "-":
			result = prevNumber - currentNumber
			break
		case "*":
			result = prevNumber * currentNumber
			break
		case "/":
			result = prevNumber / currentNumber
			break
		default:
			return
	}
	currentNumber = result;
	calculatorOperator = '';
};

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
	clearAll();
	updateScreen(currentNumber);
});

const clearAll = () => {
	prevNumber = '';
	calculatorOperator = '';
	currentNumber = '0';
};

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', () => {
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
});

inputDecimal = (dot) => {
	if(currentNumber.includes('.')) {
		return
	}
	currentNumber += dot
};


