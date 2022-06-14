// Напиши всі можливі варіанти створення функцій.
/*
newFunction function () {}
let newFunction = function() {}
let newFunction = () => {}
*/

// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function showSum(...args) {
    return args.length;
}
console.log(showSum(1, '2', 'some text'));

/* Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.*/

function takeNumber(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}
console.log(takeNumber(2, 7));
console.log(takeNumber(7, 2));
console.log(takeNumber(5, 5));

// або

function takeNumber1(a, b) {
    let c; 
    (a < b) ? c = -1 : (a > b) ? c = 1 : c = 0;
    return c
}
console.log(takeNumber(3, 7));
console.log(takeNumber(8, 2));
console.log(takeNumber(4, 4));

// Напиши функцію, яка обчислює факторіал переданого їй числа.

function calculateFactorial(n) {
    let m = 1;
    while (n) {
        m *= n--;
    }
    return m;
}
console.log(calculateFactorial(1));
console.log(calculateFactorial(2));
console.log(calculateFactorial(3));

// або

function calculateFactorial1(n) {
	let m = 1;
	for (let i = n; i != 0; i--) {
		m *= i;
	}
	return m;
}
console.log(calculateFactorial1(4));
console.log(calculateFactorial1(5));
console.log(calculateFactorial1(6));

// або

function calculateFactorial2(n) {
    return (n != 0) ? n * calculateFactorial2(n - 1) : 1;
}
console.log(calculateFactorial2(7));
console.log(calculateFactorial2(8));
console.log(calculateFactorial2(9));

/*Напиши функцію, яка приймає три окремі цифри 
і перетворює їх в одне число. 
Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/

function transformNumber(a, b, c) {
    let d;
    d = `` + a + b + c;
    return d;
}
console.log(transformNumber(2, 5, 4));

/* Напиши функцію, яка приймає довжину і ширину прямокутника 
і обчислює його площу. Якщо в функцію передали 1 параметр, 
то вона обчислює площу квадрата.*/

function area(a = 0, b = 0) {
    return b ? a * b : a ** 2;
} 
console.log(area(10, 20));
console.log(area(5));

/*Напиши функцію, яка перевіряє, 
чи є передане їй число “досконалим числом”. 
Досконале число - це число, яке дорівнює сумі всіх своїх дільників.*/

function perfectNum(a) {
	let dividers = 0;
	for (let i = 0; i < a; i++) {
		a % i == 0 ? (dividers += i) : false;
	}
	return dividers == a ? true : false;
}
console.log(perfectNum(6));
console.log(perfectNum(25));
console.log(perfectNum(22));

/* Напиши функцію, яка приймає мінімальне і максимальне значення 
для діапазону, і виводить тільки ті числа з діапазону, 
які є досконалими. Використовуй написану раніше функцію, 
щоб дізнатися, чи є це число досконалим.*/
