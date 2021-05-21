const basket = {
	apple: 7,
	banana: 10,
	orange: 12,
	apricot: 17,
	mango: 2,
	nectarine: 10,
	granate: 3,
	// showCountFood() {},
};

const countFood = function () {
	const fruits = Object.values(basket);
	// console.log(fruits);
	fruits.pop();
	// console.log(fruits);

	let sum = 0;
	// for (let i = 0; i < fruits.length; i += 1) {
	for (let fruit of fruits) {
		sum += fruit;
		// console.log(sum);
	}
	return sum;
};

basket.showCountFood = countFood;

console.log(`showCountFood: ${basket.showCountFood()}`);

// 4) Вызвать alert( basket ) и передать туда basket. Почему выводится [object Object] и как это исправить? Исправить этот момент, чтобы объект basket выдавал правильные данные.

function printObject(Object) {
	var out = '';
	for (let i in Object) {
		out += i + ': ' + Object[i] + '\n';
	}
	alert(out);
}
printObject(basket);
