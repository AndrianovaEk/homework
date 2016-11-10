
var NumberUtils = (function () {
    "use strict";

    function isNumber(a) {
        return !isNaN(parseFloat(a)) && isFinite(a);
    }

    return {
        isNumber: isNumber
    };
} ());

var Calculator = (function (NumberUtils) {
    "use strict";

    var value = 0;

    function add(a) {
        if (NumberUtils.isNumber(a)) {
            value = value + a;
            return add;
        } else {
            throw new Error("It's not a number");
        }
    }

    function substract(a) {
        if (NumberUtils.isNumber(a)) {
            value = value - a;
            return add;
        } else {
            throw new Error("It's not a number");
        }
    }

    function divide(a) {
        if (NumberUtils.isNumber(a)) {
            value = value / a;
            return add;
        } else {
            throw new Error("It's not a number");
        }
    }

    function multiply(a) {
        if (NumberUtils.isNumber(a)) {
            value = value * a;
            return add;
        } else {
            throw new Error("It's not a number");
        }
    }

    function getResult() {
        return value;
    }

    function reset() {
        return value = 0;
    }

    return {
        add: add,
        substract: substract,
        divide: divide,
        multiply: multiply,
        getResult: getResult,
        reset: reset
    };
} (NumberUtils));

Calculator.add(2)(2);
Calculator.substract(1);
console.log(Calculator.getResult());
console.log(Calculator.reset());

