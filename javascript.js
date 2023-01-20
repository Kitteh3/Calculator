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
function operate(numbers, operator) {
    return numbers.reduce(operations[operator]);
};

//Add event listeners to number buttons, put numbers in display area
let display = document.querySelector('.display');
let displayContent = 0;
let currentValue = displayContent;
const nums = [];
let numbers = Array.from(document.querySelectorAll('.number'));
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (nums.length >= 1) {
            display.textContent = undefined;
        }
        displayContent = display.textContent += number.id;
        currentValue = displayContent;
    });
});

//Add event listeners to operating buttons
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = undefined;
    nums.length = 0;
});
 let dividedBy = document.querySelector('#divide');
 dividedBy.addEventListener('click', () => {
    nums.push(currentValue);
    if (nums.length > 1) {
        currentValue = operate(nums, '/');
    }
})