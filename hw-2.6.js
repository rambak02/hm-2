//Задание 1
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] == 10) {
    break;
  } 
  }


//Задание 2
const arr2 = [1, 5, 4, 10, 0, 3];

console.log(arr2.indexOf(4));

//Задание 3
const arr3 = [1, 3, 5, 10, 20];

console.log(arr3.join(" "));

//Задание 4
const arr4 = [];
for (let i = 0; i < 3; i++) {
  const arrs = [];
  for (let i = 0; i < 3; i++) {
    arrs[i] = 1;
  }
  arr4.push(arrs);
}
console.log(arr4);

//Задание 5
const arr5 = [1, 1, 1];

  arr5.push(2,2,2);

console.log(arr5);
//Задание 6
const arr6 = [9, 8, 7, "a", 6, 5];

arr6.sort();
arr6.pop();
console.log(arr6);
//Задание 7
const arr7 = [9, 8, 7, 6, 5];
const b = prompt("Введите число");

  if (arr7.includes(b)) {
    console.log("Такое число есть в массиве");
  }


//Задание 8
let a = "abcdef";
a = a.split("");
a = a.reverse();
a = a.join("");
console.log(a);

//Задание 9

const arr9 = [
  [1, 2, 3],
  [4, 5, 6],
];
const newArr9 = arr9.flat();
console.log(newArr9);


//Задание 10
const arrs10 = [1, 2, 3, 4, 6, 9, 7];
let newArr10 = [];
for (let i = 0; i < arrs10.length - 1; i++) {
  if (arrs10[i + 1] !== null && arrs10[i + 1] !== undefined) {
    newArr10.push(arrs10[i] + arrs10[i + 1]);
  }
}
console.log(newArr10);

//Задание 11
const ads = [1, 6, 7, 9, 4];
const arrSquare = (array) => {
  return array.map((el) => el ** 2);
};

console.log(arrSquare(ads));

//Задание 12
const arraystrings = ['gdjf', ' ', ''];
const getLengthWords = (array12) => array12.map((el) => el.length);


console.log(getLengthWords(afs));
//Задание 13

const getNegativeNumbers = (array13) => array13.map((el) => el * -1);
const arrayN = [1,5,7,3,5,8,3]
console.log(getNegativeNumbers(arrayN));

//Необязательные к решению задания
//Ниже вас ждет два необязательных задания.

//Чтобы их решить, вам нужно провести рисеч (или поиск) в открытых источниках через поисковики.

//Если вы не справитесь с этими заданиями на этом уроке, рекомендуем вернуться к ним после изучения урока "Встроенные объекты" и приступить к решению ещё раз.

//Задание 14

const arrayRandom = []; 
for (let i = 0; i < 10; i++){
   arrayRandom.push((Math.random() * 10).toFixed(0));
  
}
console.log(arrayRandom);
const evenArrayRandom = arrayRandom.filter(el => el % 2 === 0 );
console.log(evenArrayRandom);

