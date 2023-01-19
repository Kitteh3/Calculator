//Basic mat functions
/*
const add = function(num1,num2) {
    return num1 + num2;
};
const subtract = function(num1,num2) {
    return num1 - num2;
};
const multiply = function(num1,num2) {
    return num1 * num2;
};
const divide = function(num1,num2) {
    return num1 / num2;
}; */
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
}
console.log(operate([3,4], "+"));
