var NumberUtils = (function () {
    var isNumber = function (leftOperand) {
        return !isNaN(parseFloat(leftOperand)) && isFinite(leftOperand);
    };
    return {
        isNumber: isNumber
    };
} ());

(function (NumberUtils) {
    "use strict";

    function Calculator(leftOperand) {
        "use strict";
        this.value = leftOperand;

        this.add = function (a) {
            if (NumberUtils.isNumber(this.value)) {
                this.value = this.value + a;
                return this.value;
            } else {
                throw new Error("It's not a number");
            }
        };

        this.substract = function (a) {
            if (NumberUtils.isNumber(this.value)) {
                this.value = this.value - a;
                return this.value;
            } else {
                throw new Error("It's not a number");
            }
        };

        this.divide = function (a) {
            if (NumberUtils.isNumber(this.value)) {
                this.value = this.value / a;
                return this.value;
            } else {
                throw new Error("It's not a number");
            }
        };

        this.multiply = function (a) {
            if (NumberUtils.isNumber(this.value)) {
                this.value = this.value * a;
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

    };

    var calc = new Calculator(12);
    console.log(calc.add(10).add(4));
    console.log(calc.substract(2));
    console.log(calc.divide(2));
    console.log(calc.multiply(4));
} (NumberUtils));