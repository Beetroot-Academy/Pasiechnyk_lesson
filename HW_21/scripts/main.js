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

//Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

function isBought (shoppingList) {
   return shoppingList.sort ((a, b) => a.bought - b.bought)
}
console.log(isBought(shoppingList));

//Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

function isBuy(shoppingList, name) {
   shoppingList.forEach(element => {
      if(element.name == name) {
         element.bought = true;
      }
      return shoppingList;
   });
}
console.log(isBuy(shoppingList, 'cup'));

//Створення списку (не) придбаних продуктів.

function notBuy(shoppingList) {
   let list = shoppingList.filter((prod) => prod.bought == false);
   return list;
}
console.log(notBuy(shoppingList));


// норма
/*Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, 
   в якому продукт, що ми шукаємо, буде відсутнім) */

