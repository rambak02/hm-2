//Задание 1
function returnSmallNumber(num1, num2) {
  let smallNumber = num1 <= num2 ? num1 : num2;
  return smallNumber;
}

//Задание 2
const evenOdd = (num) => {
  if (num % 2 == 0) {
    let message = "Число четное";
    return message;
  } else {
    let message = "Число нечетное";
    return message;
  }
};

//Задание 3.1
const squareNumber = (number) => {
  console.log(number * number);
};

//Задание 3.2.
const squareNumber2 = (number1) => {
  return number1 * number1;
};

//Задание 4
function ageUser(age) {
  if (age < 0) {
    alert("Вы ввели неправильное значение");
  } else if (age <= 12) {
    alert("Привет, друг");
  } else if (age >= 13) {
    alert("Добро пожаловать!");
  }
}
//Задание 5
function multip(numb1, numb2) {
  if (!isNaN(numb1) && !isNaN(numb2)) {
    return numb1 * numb2;
  } else {
    let message = "Одно или оба значения не являются числом";
    return message;
  }
}

//Задание 6
function userNum(usrNum) {
  if (!isNaN(usrNum)) {
    usrNumСube = usrNum * usrNum * usrNum;
    return `${usrNum} в кубе равняется ${usrNumСube}`;
  } else {
    let message = "Переданный параметр не является числом";
    return message;
  }
}

//Задание 7

function getArea() {
  let result = Math.PI * (this.radius * this.radius);
  return result.toFixed(2);
}

function getPerimeter() {
  let result = 2 * Math.PI * this.radius;
  return result.toFixed(2);
}
const circle1 = {
  radius: 23,
  getArea,
  getPerimeter,
};
const circle2 = {
  radius: 24,
  getArea,
  getPerimeter,
};
// Задание 9
function gameSeasons() {
  let seasNum = parseInt(prompt("Введите число"));
  if (!isNaN(seasNum) && seasNum > 0 && seasNum < 13) {
    if ((seasNum > 0 && seasNum <= 2) || seasNum == 12) {
      alert("Зима");
    } else if (seasNum > 2 && seasNum <= 5) {
      alert("Весна");
    } else if (seasNum > 5 && seasNum <= 8) {
      alert("Лето");
    } else if (seasNum > 8 && seasNum <= 11) {
      alert("Осень");
    }
  } else {
    alert("Вы ввели не число, ввели ноль или больше 12");
  }
}
gameSeasons();
