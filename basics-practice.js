
/*--------------TASK 1------------------*/
//определение наибольшего числа
function largestNum(a, b) {
    c = Boolean(a > b);

    console.log(c);
    
    if (c) {
        alert("The largest number =" + a)
    } else {
        alert("The largest number =" + b)
    }
}
a = prompt("Enter the first number");
b = prompt("Enter the second number");
largestNum(a, b) ? console.log("The largest number =" + a) : console.log("The largest number =" + b);

//четное число или нет?
for (var i = 0; i < 10; i++) {

    if (isOdd(i)) {
        console.log(i + " - it`s even");
    } else {
        console.log(i + " - it`s odd");
    }
}

function isOdd(num) {

    return num % 2 == 0;
}

//пустая ли строка?
var str = prompt("enter a string");

function is_Blank(str) {

    str = str.replace(/ /g, '');

    if (Boolean(str) == '') {
        console.log("is empty")
    } else {
        console.log("is blank")
    }

}
is_Blank(str)

/*--------------TASK 2------------------*/
//является ли слово палиндромом?
var str = prompt("enter a word");

    if (isPalindrome(str)) {
        console.log("It`s not palindrome")
    } else {
        console.log("it`s palindrome")
    }

function isPalindrome(str) {
    var result;

    for (var i = 0; i < str.length; i++) {

        result=Boolean(str[i]!= str[str.length - 1 - i]);
    }

    return result;
}


//сортировка пузырьком по алфавиту
function BubbleSort(str) {

    var s = str.split('');
    var n = s.length;

    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - 1 - i; j++) {
            if (s[j + 1] < s[j]) {
                var t = s[j + 1];
                s[j + 1] = s[j];
                s[j] = t;
            }
        }
    }

    str = s.join('');

    return str;
}
str = prompt("Enter a word");
BubbleSort(str);
console.log(BubbleSort(str))

//комбинации слова
var str = prompt("Enter a word");

function combination(str) {
    var s = '';

    for (i = 0; i < str.length * 2; i++) {

        s = str.substring(i - str.length, i);
        console.log(s)
    }
}

combination(str)

//нахождение слова с наибольшей длиной
str = prompt("Enter a string");

function longestWord(str) {
    var strSplit = str.split(' ');

    var longest = 0;

    var name = '';

    for (var i = 0; i < strSplit.length; i++) {

        if (strSplit[i].length > longest) {
            longest = strSplit[i].length;
            name = strSplit[i];
        }
    }

    return longest;
}
var longest = longestWord(str);
console.log("Word with max length is '" + name + "' it`s lingth=" + longest);


//удаление повторяющихся букв
var str = prompt("Enter string with  repeated words");
function extract(str) {
    var s = str.split('');
    for (i = 0; i < s.length; i++) {

        for (j = 0; j < s.length; j++) {

            if (s[i] == s[j] && i != j) {
                s[i] = '';
            }
        }
    }

    str = s.join('');
    return str;
}
var resultString = extract(str);

console.log(resultString)








