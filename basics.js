//вывести два значения
var n = 5;
var s = "string";
alert(n);
alert(s);

//нахождение площади треугольника
function area(a, h) {
    return (a * h) / 2;
}

var s = area(5, 4);

alert("Triangle`s area =" + s);

//функция с циклами
function array(b, c, k) {
    while (b < 5) {
        b = b * 2;
    }

    alert(b);

    do {
        c = c * 2;
    } while (b < 5);

    alert(c);

    for (var i = 0; i < 5; i++) {
        k = k * 2;
    }
    
    alert(k);
}
array(4, 5, 1);

//определение разницы между q++ и ++w
q = 1;
w = 1;
q = q++;
w = ++w;
alert(q);
alert(w);

//определение знака числа
function check(z) {
    if (z === 0) {
        return console.log('It\'s 0');
    }

    return Boolean(z > 0);
}

z = prompt("Enter the number");
check(z)

//ввод и отображение имени
var name = prompt("What is your name?");
alert(name);

//вычисление факториала
function factorial(x) {
    var z = 1;

    for (i = x; i > 1; i--) {
        z = z * i;
    }

    return z;
}

alert("factorial=" + factorial(3));

