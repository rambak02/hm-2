//Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);
//Задание 2
const firstIphone = Number(prompt("Год выпуска первого Iphone"));
alert(`Год выпуска первого айфона: ${firstIphone}`);
//Задание 3
const nameJSCreated = prompt("Имя первого создателя языка JavaScript?");
alert(`Имя первого создателя языка JavaScript: ${nameJSCreated}`);
//Задание 4
const num1 = 10;
const num2 = 2;
alert(num1 + num2);
alert(num1 - num2);
alert(num1 * num2);
alert(num1 / num2);
//Задание 5
const result = 2 ** 5;
alert(result);
//Задание 6
a = 9;
const b = 2;
alert(a % b);
//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
//Задание 8
const age = Number(prompt("Сколько вам лет?"));
alert(age);
//Задание 9.0
const user = {
  name: "Den",
  age: 29,
  isAdmin: true,
};
//Задание 9.1
user["city of residence"] = " ";

//Задание 9.2
user.age = 30;

//Задание 9.3
delete user["city of residence"];

//Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе");
alert(user[info]);

//Задание 10
const namePlayer = prompt("Ваше имя");
alert(`Привет, ${namePlayer} !`);
