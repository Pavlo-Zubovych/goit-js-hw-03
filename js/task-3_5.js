// Задание 5
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

const products = [
	{ name: 'Радар', price: 1300, quantity: 4 },
	{ name: 'Сканер', price: 2700, quantity: 3 },
	{ name: 'Дроид', price: 400, quantity: 7 },
	{ name: 'Захват', price: 1200, quantity: 2 },
];
console.table(products);
const getAllPropValues = function (arr, prop) {
	// твой код
	const result = [];
	let keys;

	for (let product of arr) {
		keys = Object.keys(product); //Перевірка чи є бажиний ключ в об'єкті
		if (keys.includes(prop)) {
			// Якщо в масиві ключів знайшли бажаний (prop), виводими його значення для кожного об'єкта
			for (let product of arr) {
				result.push(product[prop]);
			}
			return result;
		}
		//Якщо ключ не знайдено виводиться не заповнений масив
	}
	return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
