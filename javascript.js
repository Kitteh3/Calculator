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
//Operate function
let operator = undefined;
function operate(numbers, operator) {
    return numbers.reduce(operations[operator]);
};

//equals function
/* let currentTotal = undefined;
function findTotal(nums, operator) {
    currentTotal = operate(nums, operator);
} */

//Add event listeners to number buttons, put numbers in display area
let display = document.querySelector('.display');
let displayContent = undefined;
display.textContent = displayContent;
const nums = [];
let currentTotal = undefined;
let numbers = Array.from(document.querySelectorAll('.number'));
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        displayContent = display.textContent += number.id;
    });
});

//Add event listeners to operating buttons
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = undefined;
    nums.length = 0;
});

let equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    nums.push(displayContent);
    display.textContent = operate(nums, operator);
    displayContent = display.textContent;
    currentTotal = display.textContent;
    nums[0] = displayContent;
    nums.pop();
});

 let dividedBy = document.querySelector('#divide');
 dividedBy.addEventListener('click', () => {
    console.log(nums);
    nums.shift();
    nums.push(displayContent);
    operator = '/';
    display.textContent = undefined;
    //if (nums.length === 2) {
    //    currentTotal = operate(nums, operator);
    //}
    console.log(currentTotal);
});

let multipliedBy = document.querySelector('#multiply');
multipliedBy.addEventListener('click', () => {
    console.log(nums);
    nums.shift();
    nums.push(displayContent);
    operator = '*';
    display.textContent = undefined;
    console.log(currentTotal);
});

let minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    console.log(nums);
    nums.shift();
    nums.push(displayContent);
    operator = '-';
    display.textContent = undefined;
    console.log(currentTotal);
});

let plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    nums.shift();
    nums.push(displayContent);
    operator = '+';
    display.textContent = undefined;
});