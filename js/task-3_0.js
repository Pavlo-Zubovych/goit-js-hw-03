// Задачи по теме Объекты

// 1) Создать объект basket. Добавить в этот объект фруктов и овощей apples, oranges, bananas и тп, на выбор. В качестве значение ввести числа, тоже навыбор 5, 8, 4 и тп. Всего в корзине должно быть 7 свойств. (Все свойства должны быть добавлены при инициализации объекта)
const basket = {
    apple: 7,
    banana: 10,
    orange: 12,
    apricot: 17,
    mango: 2,
    nectarine: 10,
    granate: 3
//     basket.toString = function basketToString() {
//         return { `apple: ${this.apple}, banana: ${this.banana}, orange: ${this.orange} `};​
//       }
};
// console.log(basket)
// 2) Добавить в объект еще пару свойств (В задача 1, нужно добавить свойства при инициализации объекта, а во 2-ой задаче, - нужно дополнить объект)
basket["grapefruit"] = 4,
basket["pear"] = 5
// 3) Добавить и реализовать свойство showCountFood, которое считает общее количество всех продуктов, которые есть в корзине и выводит на экран.
// basket["showCountFood"] = 
function countFood(basket) {
    var sum = 0;
    for (let fruit of Object.values(basket)) {
      sum += fruit;
    }
    console.log(sum)
    return sum;
};
// console.log(countFood());
    countFood()
//   console.log(basket.showCountFood());
// 4) Вызвать alert( basket ) и передать туда basket. Почему выводится [object Object] и как это исправить? Исправить этот момент, чтобы объект basket выдавал правильные данные.
// alert(basket)
// alert(JSON.stringify(basket))
// alert(basket);