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
        return a / b;
    },
};
//Operate functions
//function for operator button click
let operator = undefined;
/*function updateArray(nums, operator) {
    nums.push(displayContent);
    display.textContent = undefined
    currentTotal = operate(nums, operator);
    //nums.length = 0;
    //nums.push(currentTotal);
};*/

function operate(numbers, operator) {
    return numbers.reduce(operations[operator]);
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

//Add event listeners to operating buttons
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = undefined;
    nums.length = 0;
    total.textContent = undefined;
});

let equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    operands.push(nums[0]);
    total.textContent = operate(operands, operator);
    display.textContent = undefined;
    currentTotal = total.textContent;
    operands[0] = Number(currentTotal);
    nums.pop();
    operands.pop();
    console.log(currentTotal);
    console.log(nums);
    console.log(operands);
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