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

//Add event listeners to number buttons, put numbers in display area
let display = document.querySelector('.display');
let displayContent = undefined;
display.textContent = displayContent;
const nums = [];
let currentTotal = undefined;

//current total display
let total = document.querySelector('.total');
total.textContent = currentTotal;

let numbers = Array.from(document.querySelectorAll('.number'));
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        displayContent = Number(display.textContent+= number.id);
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
    nums.push(displayContent);
    total.textContent = operate(nums, operator);
    //displayContent = display.textContent;
    currentTotal = total.textContent;
    nums[0] = currentTotal;
    nums.pop();
});

 let dividedBy = document.querySelector('#divide');
 dividedBy.addEventListener('click', () => {
    if (nums.length >= 2) {
        currentTotal = operate(nums, operator);
        nums.length = 0;
        nums.push(currentTotal);
    };
    //nums.push(displayContent);
    operator = '/';
    display.textContent = undefined;
    //if (nums.length === 2) {
    //    currentTotal = operate(nums, operator);
    //}
    console.log(nums);
});

let multipliedBy = document.querySelector('#multiply');
multipliedBy.addEventListener('click', () => {
    if (nums.length >= 2) {
        currentTotal = operate(nums, operator);
        nums.length = 0;
        nums.push(currentTotal);
    };
   nums.push(displayContent);
    operator = '*';
    display.textContent = undefined;
    console.log(nums);
});

let minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    if (nums.length >= 2) {
        currentTotal = operate(nums, operator);
        nums.length = 0;
        nums.push(currentTotal);
    };
    nums.push(displayContent);
    operator = '-';
    display.textContent = undefined;
    console.log(nums);
});

let plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    if (nums.length >= 1) {
        currentTotal = operate(nums, operator);
        nums.length = 0;
        nums.push(currentTotal);
        total.textContent = currentTotal;
        console.log(currentTotal);
    };
    nums.push(displayContent);
    operator = '+';
    //currentTotal = nums[0];
    display.textContent = undefined;
    console.log(nums);
});