// ES6

// 1. let 與 const 

// --- let
let x = 10;
if (true) {
    let x = 20;
    console.log(x); // 20
}
console.log(x);   // 10

// --- const
const PI = 3.14;
// PI = 3.14159; // 錯誤：不能重新賦值


// 2. 箭頭函式 (Arrow Functions)

let arrow1 = (a, b) => a + b;
let arrow2 =(a, b) => {return a + b};
// 不綁定自己的 this。
const sayHi = name => console.log(`Hi, ${name}`);


// 3. 模板字串 (Template Literals)

let yourName = "John";
let yourAge = 30;
let message = `Hello, ${yourName}! You are ${yourAge} years old.`;


// 4. 預設值 (Default Parameters)

function add(a, b = 1) {
    return a + b;
}

console.log(add(1)); // 2


// 5. 解構賦值 (Destructuring Assignment)

// --- 解構物件
let user = { name: "John", age: 30, address: { street: "123 Main St", city: "New York" } };
let { name, age, address: { street, city } } = user;

console.log(name); // "John"
console.log(age);  // 30
console.log(street); // "123 Main St"
console.log(city);   // "New York"

// --- 解構陣列
let arr = [1, 2, [3, 4]];
let [a, b, [c, d]] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4

// 6. 擴展運算子 (Spread Operator)

// --- 擴展物件
const obj = { name: "Tom" };
const newObj = { ...obj, age: 30 };
console.log(newObj); // { name: "Tom", age: 30 }

// --- 擴展陣列
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// 7. 剩餘運算子 (Rest Operator)

// --- 物件範例
const user3 = {
  name: 'Alice',
  age: 25,
  city: 'Taipei',
  email: 'alice@example.com'
};

const { name3, ...others } = user;

console.log(name3);    // 'Alice'
console.log(others);  // { age: 25, city: 'Taipei', email: 'alice@example.com' }

// --- 陣列範例
function sum(...args) {
    let total = 0;
    for (let arg of args) {
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// 8. 物件屬性簡寫 (Shorthand Property Names)

const name2 = "John";
const age2 = 30;
const user2 = { name2, age2 };
console.log(user2);


// 9. 模組 (Modules)

import { PI as myPI, add as myAdd, multiply } from './math.js';
import myMath from './math.js';

console.log(myMath);
console.log(myAdd(2, myPI)); // 5.14159
console.log(multiply(2, 3)); // 6



// 10. 類別 (Classes)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const person = new Person("John", 30);
person.greet();
console.log(person);

// 11. 非同步處理 (Promise & async/await)

// Promise 版本 (ES6)
function getData(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('資料取得成功: ' + msg);
        }, 1000);
    });
}

getData("Promise").then(result => {
    console.log(result); // 資料取得成功
}).catch(error => {
    console.error(error);
});


// async/await 版本 (ES8)
async function fetchData() {
  try {
    const result = await getData("async/await");
    console.log(result); // 資料取得成功
  } catch (error) {
    console.error(error);
  }
}

fetchData();

// 12. 其他 ES6 功能
