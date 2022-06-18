/*Створи масив «Список покупок». Кожен елемент масиву є об'єктом, 
який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. 
Написати кілька функцій для роботи з таким масивом:*/
//Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
//Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
//Створення списку (не) придбаних продуктів.

let shoppingList = [
{  name: 'plate',
   amount: 6,
   bought: true,
   price: 320,
},
{  name: 'teapot',
   amount: 1,
   bought: false,
   price: 432,
},
{  name: 'cup',
   amount: 6,
   bought: false,
   price: 240,
},
{  name: 'tureen',
   amount: 1,
   bought: true,
   price: 532,
}
];
function isBought (shoppingList) {
   return shoppingList.sort ((a, b) => a.bought - b.bought)
}
console.log(isBought(shoppingList));



   

