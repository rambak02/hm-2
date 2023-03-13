//Задание 1
for (let i = 0; i < 2; i++) {
  console.log('Привет')
}

//Задание 2
for (let i = 1; i < 6; i++) {
  console.log(i);
}
//Задание 3
for (let i = 0; i < 23; i++) {
  if (i < 7) {
    continue;
  }
  console.log(i);
}
//Задание 4
const users ={
  "Коля": '200',
   'Вася': '300',
   'Петя': '400'
}
for (let key in users) {
  console.log(`${key} - зарплата ${users[key]} долларов` );
}

//Задание 5
let n =1000; 
let num = 0;
for ( let i = 0; i < n; i++) {
 if (n < 50) {
  break;
 }  
 n/= 2;
 num++;
}
console.log(n);
console.log(num);
//Задание 6
const firstFriday = 2;
 for (i = firstFriday; i <= 31; i = i + 7) {
   console.log(`Сегодня пятница, ${i} число. Необходимо подготовить отчет.`)
 }
