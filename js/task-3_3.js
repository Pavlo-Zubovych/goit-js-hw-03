// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

const findBestEmployee = function (employees) {
	// твой код
	let bestEmployeeValue = 0;
	let bestEmployeeName;
	const employeesMassif = Object.keys(employees);

	for (let employee of employeesMassif) {
		if (bestEmployeeValue < employees[employee]) {
			bestEmployeeName = employee;
			bestEmployeeValue = employees[employee];
		}
	}
	return bestEmployeeName;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
	findBestEmployee({
		ann: 29,
		david: 35,
		helen: 1,
		lorence: 99,
	})
); // lorence

console.log(
	findBestEmployee({
		poly: 12,
		mango: 17,
		ajax: 4,
	})
); // mango

console.log(
	findBestEmployee({
		lux: 147,
		david: 21,
		kiwi: 19,
		chelsy: 38,
	})
); // lux
