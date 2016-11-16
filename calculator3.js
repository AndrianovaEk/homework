var isNumber = function (leftOperand) {
    "use strict";

    return !isNaN(parseFloat(leftOperand)) && isFinite(leftOperand);
}

function Calculator(leftOperand) {
    "use strict";
    this.value = leftOperand;

    this.add = function () {
        if (isNumber(this.value)) {
            for (var i = 0; i < arguments.length; i++) {
                this.value = this.value + arguments[i];
            }
            return this.value;
        } else {
            throw new Error("It's not a number");
        }
    };

    this.substract = function () {
        if (isNumber(this.value)) {
            for (var i = 0; i < arguments.length; i++) {
                this.value = this.value - arguments[i];
            }
            return this.value;
        } else {
            throw new Error("It's not a number");
        }
    };

    this.divide = function (a) {
        if (isNumber(this.value)) {
            for (var i = 0; i < arguments.length; i++) {
                this.value = this.value / arguments[i];
            }
            return this.value;
        } else {
            throw new Error("It's not a number");
        }
    };

    this.multiply = function (a) {
        if (isNumber(this.value)) {
            for (var i = 0; i < arguments.length; i++) {
                this.value = this.value * arguments[i];
            }
            return this.value;
        } else {
            throw new Error("It's not a number");
        }
    };

    this.getResult = function () {
        return this.value;
    };

    this.reset = function () {
        return this.value = 0;
    };
}
var calc = new Calculator(12);
console.log(calc.multiply(2, 2, 4, 5));
console.log(calc.add(3, 1, 2));
console.log(calc.substract(1, 4, 2, 1));
console.log(calc.divide(2, 6)); 
