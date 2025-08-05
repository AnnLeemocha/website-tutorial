// 資料型別
console.log("=== 資料型別 ===");

console.log(`字串 (string):
typeof 'Hello' ➜ ${typeof "Hello"}`); // string

console.log(`數字 (number):
typeof 123 ➜ ${typeof 123}`); // number

console.log(`布林值 (boolean):
typeof false ➜ ${typeof false}`); // boolean

console.log(`函式 (function):
typeof function() {} ➜ ${typeof function () {}}`); // function

console.log(`未定義 (undefined):
typeof undefined ➜ ${typeof undefined}`); // undefined

console.log(`物件 (object):
typeof {} ➜ ${typeof {}}`); // object

console.log(`陣列 (array):
typeof [] ➜ ${typeof []}
Array.isArray([]) ➜ ${Array.isArray([])}`); // object, true

console.log(`空值 (null):
typeof null ➜ ${typeof null}`); // object


// 變數
console.log("");
console.log("=== 變數宣告 ===");
let myname;
let myname2 = "Alice";      // 可重新賦值
const age = 25;          // 常數，不能變更
var city;
var city = "Taipei";     // 舊式語法（不推薦）

console.log(`let myname : ${myname}
let myname2 : ${myname2}
const age : ${age}
var city : ${city}
`);

// 作用域
console.log("");
console.log("=== 作用域 ===");
try {
    // outside scope
    let x = 10;

    {
        // inner scope
        let y = 20;
        console.log("inner scope : ", x); // 有效
        console.log("inner scope : ",y); // 有效
    }

    // outside scope
    console.log("outside scope : ", x); // 有效
    console.log("outside scope : ", y); // 錯誤
} catch (error) {
    console.error(error);
}

// 常見運算子
console.log("");
console.log("=== 常見運算子 ===");
let a = b = c = 0;
let d = e = f = 2;
a = 1;
b += 2;
c -= 3;
d *= 4;
e /= 5;
f %= 6;
console.log(`指定運算：=, +=, -=, *=, /=, %=
let a = b = c = 0;
let d = e = 2;
---
a = 1; ➜ a = ${a}
b += 2; ➜ b = ${b}
c -= 3; ➜ c = ${c}
d *= 4; ➜ d = ${d}
e /= 5; ➜ e = ${e}
f %= 6; ➜ f = ${f}
`);

console.log(`單元運算：++, --
let a = b = c = 0;
---
c = ++a; ➜ c = ${++a}, a = ${a}
c = a++; ➜ c = ${a++}, a = ${a}
c = --b; ➜ c = ${--b}, b = ${b}
c = b--; ➜ c = ${b--}, b = ${b}
`);

console.log(`算術運算：+, -, *, /, %
---
10 + 5 ➜ ${10 + 5}
10 - 5 ➜ ${10 - 5}
10 * 5 ➜ ${10 * 5}
10 / 5 ➜ ${10 / 5}
10 % 5 ➜ ${10 % 5}
`);

console.log(`比較運算：==, !=, ===, !==, >, <, >=, <=
---
1 == '1' ➜ ${1 == '1'}
1 === '1' ➜ ${1 === '1'}
1 != '1' ➜ ${1 != '1'}
1 !== '1' ➜ ${1 !== '1'}
1 > 0 ➜ ${1 > 0}
1 < 0 ➜ ${1 < 0}
1 >= 0 ➜ ${1 >= 0}
1 <= 0 ➜ ${1 <= 0}
`);

console.log(`邏輯運算：&&, ||, !
---
true && false ➜ ${true && false}
true || false ➜ ${true || false}
!true ➜ ${!true}
`);

// 資料型態轉換
console.log("");
console.log("=== 資料型態轉換 ===");
let x = 10;
let y = "20";
let z = x + y;
console.log(`let x = 10;
let y = "20";
let z = x + y;
---
x = ${x} (${typeof x})
y = ${y} (${typeof y})
z = ${z} (${typeof z})
`);