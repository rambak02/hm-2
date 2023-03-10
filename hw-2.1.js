//Задание 1
let password = "пароль";
let checkPassword = String(prompt("Введите пароль"));
if (checkPassword == password) {
  alert("Пароль введен верно");
} else {
  alert("Пароль введен неправильно");
}

//Задание 1.1
password == checkPassword
  ? alert("Пароль введен верно")
  : alert("Пароль введен неверно");

//Задание 2
let c = -3;
if (c > 0 && c < 10) {
  alert("Верно");
} else {
  alert("Неверно");
}

c > 0 && c < 10 ? alert("Верно") : alert("Неверно");

//Задание 3
let d = 2;
let e = 4;
d > 10 || e > 10 ? "Верно" : "Неверно";
//Задание 4

//let a = Number('2');
//let b = Number('3');
//alert(a + b);
let a = 2;
let b = 3;
alert(a + b);
//Задание 5
let monthNumber = 12;
switch (monthNumber) {
  case 1:
    console.log("Зима");
    break;
  case 2:
    console.log("Зима");
    break;
  case 3:
    console.log("Весна");
    break;
  case 4:
    console.log("Весна");
    break;
  case 5:
    console.log("Весна");
    break;
  case 6:
    console.log("Лето");
    break;
  case 7:
    console.log("Лето");
    break;
  case 8:
    console.log("Лето");
    break;
  case 9:
    console.log("Осень");
    break;
  case 10:
    console.log("Осень");
    break;
  case 11:
    console.log("Осень");
    break;
  case 12:
    console.log("Зима");
    break;
  default:
    console.log("Not Found");
}

//Задание 7
let numbers = Number(prompt("Пожалуйста, введите любое число"));
if (typeof numbers == "number") {
  if (numbers % 2 == 0) {
    alert("Четное");
  } else {
    alert("Нечетное");
  }
} else {
  console.log("Это не число");
}

//Задание 8
const clientOS = 0;
if (clientOS == 0) {
  console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS == 1) {
  console.log("Установите версию приложения для Android по ссылке");
}
//Задание 9
const clientDeviceYear = 2015;
if (clientDeviceYear < 2015 && clientOS == 0) {
  console.log("Установите облегченную версию приложения для iOS по ссылке");
} else if (clientDeviceYear >= 2015 && clientOS == 0) {
  console.log("Установите версию приложения для iOS по ссылке");
} else if (clientDeviceYear < 2015 && clientOS == 1) {
  console.log("Установите облегченную версию приложения для Android по ссылке");
} else if (clientDeviceYear >= 2015 && clientOS == 1) {
  console.log("Установите версию приложения для Android по ссылке");
}
