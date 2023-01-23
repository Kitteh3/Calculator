//Basic math functions
let operations = {
    "+" : function(a, b) {
        a = Number(a);
        b = Number(b);
        return a + b;
    },
    "-" : function(a, b) {
        return a - b;
    },
    "*" : function(a, b) {
        return a * b;
    },
    "/" : function(a, b) {
        if (b === 0) {
            return "NOPE.";
        } else {
            return a / b;
        };
    },
    "pow" : function(a, b) {
        return Math.pow(a, b);
    },
};
//Operate function
let operator = undefined;

function operate(numbers, operator) {
    return Math.round(1000 * (numbers.reduce(operations[operator]))) / 1000;
};

//Add event listeners to number buttons, put numbers in display area
let display = document.querySelector('.display');
let displayContent = undefined;
display.textContent = displayContent;
const nums = [];
const operands = [];
let currentTotal = undefined;

//current total display
let total = document.querySelector('.total');
total.textContent = currentTotal;

let numbers = Array.from(document.querySelectorAll('.number'));
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        displayContent = Number(display.textContent+= number.id);
        nums.shift();
        nums.push(displayContent);
        console.log(nums);
    });
});

//Decimals, floating point numbers
let decimal = document.querySelector('#decimal');
function decimalTest(n) {
    let result = (n - Math.floor(n)) !== 0;
    if (result) {
        return "decimal exists";
    } else {
        return "whole number";
    };
};

decimal.addEventListener('click', () => {
    if (decimalTest(nums[0]) === "whole number") {
        if (nums.lenth === 0) {
            nums[0] = 0;
            display.textContent = 0;
        };
        displayContent = display.textContent += decimal.textContent;
        console.log(nums);
    };
});

//Add event listeners to operating buttons
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = undefined;
    nums.length = 0;
    operands.length = 0;
    total.textContent = undefined;
    currentTotal = undefined;
});

let equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    operands.push(nums[0]);
    if (operands.length === 1) {
        operands[1] = 0;
        operator = '+';
    }
    total.textContent = operate(operands, operator);
    display.textContent = undefined;
    currentTotal = total.textContent;
    nums[0] = Number(currentTotal);
    operands.length = 0;
    console.log(currentTotal);
    console.log(nums);
    console.log(operands);
});

let powerOf = document.querySelector('#powerOf');
powerOf.addEventListener('click', () => {
    operands.push(nums[0]);
    console.log(operands);
    if (operands.length >= 2) {
        currentTotal = operate(operands, operator);
        total.textContent = currentTotal;
        operands.length = 0;
        operands.push(currentTotal);
    };
    operator = 'pow';
    display.textContent = undefined;
    total.textContent = operands[0];
    console.log(operands);
    console.log(currentTotal);
});

 let dividedBy = document.querySelector('#divide');
 dividedBy.addEventListener('click', () => {
    operands.push(nums[0]);
    console.log(operands);
    if (operands.length >= 2) {
        currentTotal = operate(operands, operator);
        total.textContent = currentTotal;
        operands.length = 0;
        operands.push(currentTotal);
    };
    operator = '/';
    display.textContent = undefined;
    total.textContent = operands[0];
    console.log(operands);
    console.log(currentTotal);
});

let multipliedBy = document.querySelector('#multiply');
multipliedBy.addEventListener('click', () => {
    operands.push(nums[0]);
    console.log(operands);
    if (operands.length >= 2) {
        currentTotal = operate(operands, operator);
        total.textContent = currentTotal;
        operands.length = 0;
        operands.push(currentTotal);
    };
    operator = '*';
    display.textContent = undefined;
    total.textContent = operands[0];
    console.log(operands);
    console.log(currentTotal);
});

let minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    operands.push(nums[0]);
    console.log(operands);
    if (operands.length >= 2) {
        currentTotal = operate(operands, operator);
        total.textContent = currentTotal;
        operands.length = 0;
        operands.push(currentTotal);
    };
    operator = '-';
    display.textContent = undefined;
    total.textContent = operands[0];
    console.log(operands);
    console.log(currentTotal);
});

let plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    operands.push(nums[0]);
    console.log(operands);
    if (operands.length >= 2) {
        currentTotal = operate(operands, operator);
        total.textContent = currentTotal;
        operands.length = 0;
        operands.push(currentTotal);
    };
    operator = '+';
    display.textContent = undefined;
    total.textContent = operands[0];
    console.log(operands);
    console.log(currentTotal);
})