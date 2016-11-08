//является ли массивом?
arr = prompt("enter an array");

function isArray(arr) {
	return Array.isArray(arr);
}

isArray([1, 2, 3]) ? console.log("it`s array") : console.log("its`not array")

//удаление
function del(arr) {
	for (i = 0; i < arr.length; i++) {
		if (!arr[i]) {
			arr.splice(i, 1)
		}
	}

	return arr;
}

arr = [1, 0, 2, null, 0 / 0];

isArray(arr) ? console.log("it`s array") : console.log("its`not array");

console.log(del(arr))

//наибольший элемент массива

function isMax(arr) {
	var maxEl = arr[0];

	for (i = 0; i < arr.length; i++) {
		if (maxEl < arr[i]) {
			maxEl = arr[i];
		}
	}

	return maxEl;
}
arr = [1, 9, 3, 4];

isArray(arr) ? console.log("it`s array") : console.log("its`not array");

console.log(isMax(arr))

//наименьший элемент массива

function isMin(arr) {
	var minEl = arr[0];

	for (i = 0; i < arr.length; i++) {
		if (minEl > arr[i]) {
			minEl = arr[i]
		}
	}

	return minEl
}
arr = [1, 9, 3, 4];

isArray(arr) ? console.log("it`s array") : console.log("its`not array");

console.log(isMin(arr))

//создание массива из слов
var str = prompt("Enter a string");

function convert(str) {
	arr = str.split('');

	return arr;
}

console.log(convert(str))

//нахождение часто встречающегося элемента

function isFrequent(arr) {
	var maxcount = 1;

	for (i = 0; i < arr.length - 1; i++) {
		var count = 0;

		for (j = 0; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				count++;
			}
		}

		if (count > maxcount) {
			maxcount = count;
			item = arr[i];
		}
	}

	return item;
}

arr = [1, 5, 5, 5, 2, 2];

isArray(arr) ? console.log("it`s array") : console.log("its`not array");

console.log(isFrequent(arr));

//клонирование массива
function clone(arr) {
	return arr.slice();
}

console.log([1, 2, 3]);

console.log(clone([1, 2, 3]));

//удаление дубликатов
arr = [1, 2, 2, 2, 3, 4, 2]

isArray(arr) ? console.log("it`s array") : console.log("its`not array");

var arrNew;

arrNew = arr.sort();

for (i = arr.length - 1; i > 0; i--) {
	if (arr[i + 1] == arr[i]) {
		arrNew = arr.splice(i, 1)
	}
}

console.log(arr);

//соединение двух массивов и удаление дубликатов
function merge(arr1, arr2) {
	var arr;
	var arrNew = arr1.concat(arr2);
	arrNew = arrNew.toString();
	arrNew = arrNew.toLowerCase();
	arrNew = arrNew.split(',');
	arrNew = arrNew.sort();

	for (i = arrNew.length - 1; i > 0; i--) {
		if (arrNew[i + 1] == arrNew[i]) {
			arr = arrNew.splice(i, 1)
		}
	}
	return arrNew;

}
arr1 = ["Ol", "a", "b"];

arr2 = ["ol", "c", "B"];

isArray(arr1) ? console.log("it`s array") : console.log("its`not array");

isArray(arr2) ? console.log("it`s array") : console.log("its`not array");

console.log(merge(arr1, arr2))

//удаление специфических символов
function removeSymbol(arr, symbol) {
	for (i = 0; i < arr.length; i++) {
		if (arr[i] == symbol) {
			arrNew = arr.splice(i, 1);

		}
	}
	return arr;

}
arr = [1, 2, 8, 7];

isArray(arr, 8) ? console.log("it`s array") : console.log("its`not array");

console.log(removeSymbol(arr));

//сортировка по заголовку
var library = [
	{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
	{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
	{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

function compareTitle(a, b) {
	return a.title > b.title ? 1 : -1;
}

console.log(library.sort(compareTitle));

