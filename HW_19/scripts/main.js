// МІНІМУМ

 /* Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), 
 підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), 
 передбач можливість введення невірних даних.*/

let userAge = prompt("Вкажіть будь ласка ваш вік.");
if (userAge >= 0 && userAge <= 11) {
    alert(`Ой ви ще така дитина`)
} else if (userAge >= 12 && userAge <= 17) {
    alert(`Ооо, ви підліток`)
} else if (userAge >= 18 && userAge <= 59) {
    alert(`Ви дорослі, ваш вік самий сок`)
} else if (userAge >= 60) {
    alert(`Пенсійний вік, їдьте на дачу, садіть цвіточкі ))`)
} 

 /* Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, 
 який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).*/

let userNum = +prompt("Введіть число від 0 до 9");
switch (userNum) {
    case 0:
        alert(")");
        break;
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;   
    case 3:
        alert("#");
        break;
    case 4:
        alert("$");
        break;
    case 5:
        alert("%");
        break;
    case 6:
        alert("^");
        break;    
    case 7:
        alert("&");
        break; 
    case 8:
        alert("*");
        break; 
    case 9:
        alert("(");
        break;
    default:
        alert("Error")
        break;                  
}

 // Запитай у користувача 2 числа і знайди найбільший спільний дільник.
let gcdOne = +prompt("Введіть будь яке число");
let gcdTwo = +prompt("Введіть ще одне будь яке число");
let gcd;
calc(gcdOne, gcdTwo)
function calc(x, y) {
    let i;
    while(x != y) {
        if (x > y) {
            x = x - y;
        } else if (x < y) {
            i = x;
            x = y;
            y = i;
        }
    } return gcd = x
}
alert(`Найбільший спільний дільник чисел ${gcdOne} і ${gcdTwo} буде ${gcd}`)

// НОРМА

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
/*від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%.*/

let userSum = prompt("Вкажіть будь ласка вашу суму покупки.");
if (userSum < 200) {
    alert(`Ваша сума до сплати ${userSum}`)
} else if (userSum >= 200 && userSum <= 300) {
    alert(`Сума до сплати буде ${userSum - (userSum * 0.03)}`)
} else if (userSum >= 300 && userSum <= 500) {
    alert(`Сума до сплати буде ${userSum - (userSum * 0.05)}`)
} else if (userSum >= 500) {
    alert(`Сума до сплати буде ${userSum - (userSum * 0.07)}`)
}


