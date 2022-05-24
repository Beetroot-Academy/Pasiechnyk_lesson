// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
let userName = prompt("What is your name?");
alert(`Hello ${userName}!`)

// Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
let userBorn = prompt("What is your birth year?")
const currentYear = 2022;
let userAge = currentYear - userBorn;
alert(`You are ${userAge}`);

// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
let squareSize = prompt("Enter the length side of the square.");
let squarePerimeter = squareSize * 4;
alert(`Perimeter of the square is equal to ${squarePerimeter}`)

// Запитай у користувача радіус кола і виведи площу такої окружності.
let circleRadius = prompt("Enter the radius of the circle.");
let circleArea = Math.PI * Math.pow(circleRadius, 2);
alert(`Area of the circle is equal ${circleArea}`);

    //    Створи HTML-файл, в ньому пропиши всі можливі способи використання JS;
    //        в body html файлу, підключення окремого js файлу через head

    //    Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі.
    //        userName, userData, test123, $, myBirthdayDay

    //    Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);
    //        UserName, 1f, _test123, MY-NAME, mybirthdayday

    //    Вкажи всі можливі способи коментування коду;
            // комент рядка
            /**/ //комент більше рядка

    //    Які стилі написання імен змінних ти знаєш?
    //        camelCase