//разница между двумя датами в днях
var start = new Date(2016, 10, 1);

var end = new Date(2016, 10, 5);

function getDifference(start, end) {
	return  ((((end - start) / 1000) / 60) / 60) / 24;
}
console.log(getDifference(start, end));

//получение текущей даты
function currentDate() {
	return new Date();
}
console.log(currentDate());

//получение даты и времени в формате 
function formatDate() {
	var now = new Date();
	var options = {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		hour12: false,
		hour: 'numeric',
		minute: 'numeric'
	};

	return now.toLocaleString("en-US", options);
}
console.log(formatDate());