var NumberUtils = (function () {
    var isNumber = function (leftOperand) {
        return !isNaN(parseFloat(leftOperand)) && isFinite(leftOperand);
    };
    return {
        isNumber: isNumber
    };
} ());

var Calculator = (function (NumberUtils) {
    "use strict";

    function Calculator(leftOperand) {
        this.value = leftOperand;

        function add(a) {
            if (NumberUtils.isNumber(this.value)) {
                this.value = this.value + a;
                return this;
            } else {
                throw new Error("It's not a number");
            }
        };

        function substract(a) {
            if (NumberUtils.isNumber(this.value)) {
                this.value = this.value - a;
                return this;
            } else {
                throw new Error("It's not a number");
            }
        };

        function divide(a) {
            if (NumberUtils.isNumber(this.value)) {
                this.value = this.value / a;
                return this;
            } else {
                throw new Error("It's not a number");
            }
        };

        function multiply(a) {
            if (NumberUtils.isNumber(this.value)) {
                this.value = this.value * a;
                return this;
            } else {
                throw new Error("It's not a number");
            }
        };

        function getResult() {
            return this;
        };

        function serverRequest(state) {
            this.value = state;
        }

        function getInitialState(callback) {
            var that = this;

            setTimeout(function () {
                that.serverRequest(5);
                callback();
            }, 500);
        }

        return {
            serverRequest: serverRequest,
            getInitialState: getInitialState,
            add: add,
            substract: substract,
            divide: divide,
            multiply: multiply,
            getResult: getResult
        };
    }

    return Calculator;
} (NumberUtils));


var calc = new Calculator(10);

calc.getInitialState(function () {
    console.log(calc.multiply(2).add(3).getResult());
});