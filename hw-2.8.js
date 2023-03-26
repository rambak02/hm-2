
//Задание 1
function getResult(array, callback) {
 return callback(array);
}
const sum = (array) => {
    return array.reduce ((a, b) => a + b);
}
const multi = (array) => {
 return array.reduce ((a,b) => a * b);
}
const array1 = [1, 2, 5];

console.log(getResult(array1, sum));
console.log(getResult(array1, multi));
//Задание 2
const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];
function getSortedArrayObj(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
                for (let j = i; j < arr.length; j++) {
                        const condition = compareFunction ? compareFunction(arr[i], arr[j]) > 0 : arr[i].toString() > arr[j].toString(); 
                        if (condition) {
                                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


function compareFunction(a, b) {
	return a.age - b.age;
}

console.log(getSortedArrayObj(users, compareFunction));

//Задание 3
const arra3 = [1, '4', 9, 'two'];

const arr3 = [1, '4', false, 9, 'two'];


const eachArray = (array3, callback) => callback(array3);

const reversArr = (d) => {
    return d.reverse();
}

const toNumberArr = (c) => {
 return c.map(Number).filter(el => !isNaN(el));    
}

console.log(eachArray(arra3, reversArr)); 
console.log(eachArray(arr3, toNumberArr));
//Задание 4
function Date30Sec() {
    const idInterval = setInterval(() => {
        console.log(Date());
    }, 3000);


setTimeout(()=> {
    clearInterval(idInterval);
    console.log("Прошло 30 секунд");
}, 30000);

}
Date30Sec();
//Задание 5
function calling() {
    console.log('Звоню!');
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...');
        callback();
    }, 1000);
}

function talk() {
    console.log('Разговор');
}

calling();
beeps(talk);
