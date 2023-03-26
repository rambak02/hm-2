//Задание 1
let js = "js";
js = js.toUpperCase();


console.log(js);

//Задание 2
function searchStart(array, string) {
  let newArray = array.filter(el => el.toLowerCase().includes(string));
  console.log(newArray);
  return newArray;
}
//Задание 3
console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

//Задание 4
const max = Math.max(52, 53, 49, 77, 21, 32);
const min = Math.min(52, 53, 49, 77, 21, 32);
console.log(max, min);

//Задание 5
const random = () => console.log(Math.ceil(Math.random() * 10));

random();
//Задание 6
function getRandomArrNumbers(number) {
  const RandomArrNumbers = [];
  for (let i = 0; i < Math.floor(number / 2); i++) {
    RandomArrNumbers.push(Math.round(Math.random() * number));
  }
  return RandomArrNumbers;
}
let g = getRandomArrNumbers(2);
console.log(g);
//Задание 7
const getRandomNumber = (a, b) => a + Math.round(Math.random() * (b - a));
console.log(getRandomNumber(10, 26));
//Задание 8

const days8 = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

function addLeadingZero(date) {
  return date < 10 ? "0" + date : date;
}

function getUsersTime(userTime = new Date()) {
  let years = userTime.getFullYear();
  let month = addLeadingZero(userTime.getMonth() + 1);
  let day = addLeadingZero(userTime.getDate());
  let hours = userTime.getHours();
  let minutes = userTime.getMinutes();
  let daysWeek = days8[userTime.getDay()];
  return `${years}.${month}.${day} ${hours}:${minutes} (${daysWeek})`;
}
console.log(getUsersTime());

//Задание 9

let currentDate = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = currentDate + days73;
let date73DaysLater = new Date(searchDate);
console.log(date73DaysLater);

//Задание 9.1
function addDays(days) {
  let date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}

console.log(addDays(73));
//Задание 9.2

function addDays2(days) {
  let date2 = new Date().getTime() + 86400000 * days;
  let date3 = new Date(date2);
  return date3;
}
console.log(addDays2(2));

//Задание 10
const days10 = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months10 = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
function addLeadingZero(date) {
  return date < 10 ? "0" + date : date;
}

function getUsersTime(userTime = new Date()) {
  let years = userTime.getFullYear();
  let month = months10[userTime.getMonth()] ;
  let day = addLeadingZero(userTime.getDate());
  let hours = userTime.getHours();
  let minutes = userTime.getMinutes();
  let daysWeek = days10[userTime.getDay()];
  return `Дата: ${day} ${month} ${years}  (${daysWeek}) \nВремя: ${hours}:${minutes} `;
}
console.log(getUsersTime());
