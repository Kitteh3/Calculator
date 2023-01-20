//Basic math functions
let operations = {
    "+" : function(num1,num2) {
        return num1 + num2;
    },
    "-" : function(num1,num2) {
        return num1 - num2;
    },
    "*" : function(num1,num2) {
        return num1 * num2;
    },
    "/" : function(num1,num2) {
        return num1 / num2;
    },
}
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
    nums[0] = displayContent;
    nums.pop();
});

 let dividedBy = document.querySelector('#divide');
 dividedBy.addEventListener('click', () => {
    nums.shift();
    nums.push(displayContent);
    operator = '/';
    display.textContent = undefined;

})