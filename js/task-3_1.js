// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
	name: 'Mango',
	age: 20,
	hobby: 'html',
	premium: true,
};

function myFunction() {
	user.mood = 'happy';
	console.log(user);

	user.mood = 'skydiving';
	console.log(user);

	user.premium = false;
	console.log(user);

	// выводит  ключ:значение используя Object.keys() и for...of
	const keys = Object.keys(user);
	console.log('______________________');

	for (let key of keys) {
		console.log(`${key}: ${user[key]}`);
	}
}

myFunction();
