/*
Запросіть у користувача дані за допомогою prompt() і виве-
діть результат за допомогою alert().
1. Запросіть у користувача число, зведіть це число в 2 ступінь
та виведіть на екран.
2. Запросіть у користувача 2 числа та виведіть середнє арифме-
тичне цих чисел.
3. Запросіть у користувача довжину сторони квадрата та
виведіть його площу.
4. Реалізуйте конвертор із кілометрів у милі (користувач
вводить кілометри, програма виводить милі).
1 км = 0,621371 миль.
Вкажіть це значення у коді як константу.
5. Реалізуйте калькулятор. Користувач вводить два числа, а
програма виводить результати дій + – * / цих чисел.
6. Користувач вводить значення a і b для формули a * x + b = 0,
а програма підраховує і виводить значення x.
7. Запросіть у користувача поточний час (години та хвилини)
і виведіть, скільки годин та хвилин залишилося до наступ-
ного дня. 8. Запросіть у користувача тризначне число та виведіть дру-
гу цифру цього числа. Для вирішення завдання використо-
вуйте оператор % (залишок від ділення).
9. Запросіть у користувача п’ятизначне число та перемістіть
останню цифру на початок (із числа 12345 має вийти чис-
ло 51234).
10. Зарплата працівника становить $250 + 10% від продажу.
Запросіть загальну суму продажу за місяць і підрахуйте
зарплату.
*/
//--
//1.
let number = prompt("Enter number: ");
let result1 = Math.pow(parseFloat(number), 2);
alert(`Number square ${number} is: ${result1}`);

//2.
let num1 = prompt("Enter first num: ");
let num2 = prompt("Enter second num: ");
let average = (parseFloat(num1) + parseFloat(num2)) / 2;
alert(`The arithmetic mean of numbers ${num1} і ${num2} is: ${average}`);

//3.
let sideLength = prompt("Enter the length of the side of the square: ");
let squareArea = Math.pow(parseFloat(sideLength), 2);
alert(`The area of a square with side ${sideLength} is: ${squareArea}`);

//4.
const kilometersToMiles = 0.621371;
let kilometers = prompt("Enter km amount: ");
let miles = parseFloat(kilometers) * kilometersToMiles;
alert(`${kilometers} km is ${miles} miles`);

//5.
let num3 = prompt("Enter first num: ");
let num4 = prompt("Enter second num: ");
let sum = parseFloat(num3) + parseFloat(num4);
let difference = parseFloat(num3) - parseFloat(num4);
let product = parseFloat(num3) * parseFloat(num4);
let quotient = parseFloat(num3) / parseFloat(num4);
alert(`Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}`);

//6.
let a = prompt("Enter the value a: ");
let b = prompt("Enter the value b: ");
let x = -parseFloat(b) / parseFloat(a);
alert(`Result ${a} * x + ${b} = 0: x = ${x}`);

//7.
let currentHours = prompt("Enter hours: ");
let currentMinutes = prompt("Enter minutes: ");
let remainingHours = 23 - parseInt(currentHours);
let remainingMinutes = 60 - parseInt(currentMinutes);
alert(`Until the next day ${remainingHours} hours and ${remainingMinutes} minuts`);

//8.
let threeDigitNumber = prompt("Enter a three-digit number: ");
let secondDigit = Math.floor(parseInt(threeDigitNumber) / 10) % 10;
alert(`Second number ${threeDigitNumber} is: ${secondDigit}`);

//9.
let fiveDigitNumber = prompt("Enter a five-digit number: ");
let lastDigit = fiveDigitNumber % 10;
let modifiedNumber = parseInt(lastDigit.toString() + fiveDigitNumber.toString().slice(0, -1));
alert(`Number with the last digit moved: ${modifiedNumber}`);

//10.
let totalSales = prompt("Enter the total sales amount for the month: ");
let salary = 250 + (parseFloat(totalSales) * 0.1);
alert(`The employee's salary is: ${salary}$`);
