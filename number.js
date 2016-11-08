//является ли значение числом?
(function () {
    "use strict";

    var num = prompt("Enter a number");

    function isNumber(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }

    isNumber(num) ? console.log("it`s a number") : console.log("It`s not a number");

    //отрицательное ли?
    num = prompt("Enter a number for defines negative or not");

    isNumber(num) ? console.log("it`s a number") : console.log("It`s not a number");

    function isNegative(num) {
        if (isNumber(num)) {
            return num < 0;
        } else {
            throw new Error("It's not a number");
        }
    }

    isNegative(num) ? console.log("it`s negative") : console.log("it`s positive");

    //положительное ли?
    num = prompt("Enter a number for defines positive or not");

    isNumber(num) ? console.log("it`s a number") : console.log("It`s not a number");

    function isPositive(num) {
        if (isNumber(num)) {
            return num > 0
        } else {
            throw new Error("It's not a number");
        }
    }

    isPositive(num) ? console.log("it`s positive") : console.log("it`s negative");

    //вычисление факториала
    num = prompt("Enter a number for defines factorial");

    isNumber(num) ? console.log("it`s a number") : console.log("It`s not a number");

    function factorial(num) {
        if (isNumber(num)) {
            if (num < 0) {
                return -1;
            } else if (num == 0) {
                return 1;
            } else {
                return (num * factorial(num - 1));
            }
        } else {
            throw new Error("It's not a number");
        }
    }
    
    console.log(factorial(num));

    //простое ли число?
    num = prompt("Enter a number for defines number is prime or not");
    isNumber(num) ? console.log("it`s a number") : console.log("It`s not a number");

    function isPrime(num) {
        if (isNumber(num)) {
            return num > 1 && num % 1 == 0 && num % num == 0;
        } else {
            throw new Error("It's not a number");
        }
    }

    isPrime(num) ? console.log("it`s prime") : console.log("It`s not prime");
})();


