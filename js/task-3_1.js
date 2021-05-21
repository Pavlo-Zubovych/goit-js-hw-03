// "use strict";

// const name = 'Генератор захисного поля';
// let prise = 1000;
// console.log(`Обрано «${name}», ціна за штуку ${prise} кредитів`);

// prise = 2000;

// console.log(`Обрано «${name}», ціна за штуку ${prise} кредитів`);

const basket = {
    apple: 7,
    banana: 10,
    orange: 12,
    apricot: 17,
    mango: 2,
    nectarine: 10,
    granate: 3,
    showCountFood(basket) {
    let sum = 0;
      for (let fruit of Object.values(basket) {
        sum += fruit;
      }
    console.log(sum)
    return sum;
    }
}

console.log(basket.showCountFood())

// 3) Добавить и реализовать свойство showCountFood, которое считает общее количество всех продуктов, которые есть в корзине и выводит на экран.
// basket["showCountFood"]  
