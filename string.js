//является ли строкой?
var str = prompt("Enter a string")

function isString(str) {
	return typeof (str) == "string";
}

isString(str) ? console.log("it`s string") : console.log("its`not string")

//может ли быть переведено в число?
str = prompt("Enter a string");

function canParseToNumber(str) {
	if (isString(str)) {
		return parseInt(str);
	} else {
		throw new Error("It's not a string");
	}
}

canParseToNumber(str) ? console.log("it can be parse to number") : console.log("it can`t be parse to number");

//длина строки
str = prompt("Enter a string");

function getStringLength(str) {
	if (isString(str)) {
		return str.length;
	} else {
		throw new Error("It's not a string");
	}
}
console.log(getStringLength(str));

//привести к Camel case
str = prompt("Enter a string");

function camelize(str) {
	if (isString(str)) {
		return str.split(' ').join('');
	} else {
		throw new Error("It's not a string");
	}
}

console.log(camelize(str))

//сделать первую букву строчки заглавной 
str = prompt("Enter a string");

function capitalize(str) {
	if (isString(str)) {
		var s = str.charAt(0).toUpperCase();

		return s + str.substring(1);
	} else {
		throw new Error("It's not a string");
	}
}
console.log(capitalize(str));

//положение символа
str = prompt("Enter a string");

var word = prompt("Enter the word which must be occurrence");

function findOccurrences(str, word) {
	if (isString(str)) {
		return str.indexOf(word);
	} else {
		throw new Error("It's not a string");
	}
}

console.log(findOccurrences(str, word));
