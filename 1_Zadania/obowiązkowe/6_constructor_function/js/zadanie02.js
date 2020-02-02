var Calculator = function () {
    this.store = [];
};


Calculator.prototype.add = function (num1, num2) {
    const result = num1 + num2;
    this.store.push(`added ${num1} to ${num2} got ${result}`);
    return result;
};

Calculator.prototype.multiply = function (num1, num2) {
    const result = num1 * num2;
    this.store.push(`multiplied ${num1} with ${num2} got ${result}`);
    return result;
};

Calculator.prototype.substract = function (num1, num2) {
    const result = num2 - num1;
    this.store.push(`susbtracted ${num1} from ${num2} got ${result}`);
    return result;
};

Calculator.prototype.divide = function (num1, num2) {
    const result = num1 / num2;
    this.store.push(`divided ${num1} by ${num2} got ${result}`);
    return result;
};

Calculator.prototype.printOperations = function () {
    this.store.forEach(operation => console.log(operation));
};

Calculator.prototype.clearoperations = function () {
    this.store = [];
};
