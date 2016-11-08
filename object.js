//длина объекта
function countProperties(obj) {
	var count = 0;

	return (function innerCount(obj) {
		for (var key in obj) {
			if (typeof obj[key] === 'object') {
				innerCount(obj[key]);
			} else {
				count++;
			}
		}
	} ());
}

countProperties({
	name: "apples",
	sort: "Green",
	weight_kg: 200,
	exporting_country: {
		country: "Turkey"
	}
});

console.log(count);

//список свойств объекта

function keys(obj) {
	return len = Object.keys(obj);
}

keys({
	Name: "Kate",
	age: 19,
	sex: "Female"
});

console.log(len);