# JavaScript 教學 - 


---


# JavaScript 入門教學筆記

## 什麼是 JavaScript？

JavaScript 是一種用來為網頁添加互動功能的程式語言。它是前端三大技術之一，與 HTML、CSS 一起運作於瀏覽器中。

* 可以在網頁中運作的一種直譯式程式語言。
* 利用 JavaScript 程式可控制 HTML 與 CSS 的設定，進而達到動態網頁的效果。
* 現代網頁不可或缺的部分。

用途包含：
- 表單驗證
- 動畫與特效
- DOM 操作
- 資料互動（AJAX、API）
- 前端框架（如 React、Vue）

---

## 如何在 HTML 中使用 JavaScript？

```html
<!-- 方法一：內嵌寫法 -->
<script>
  alert("Hello JavaScript!");
</script>

<!-- 方法二：外部檔案引入 -->
<script src="script.js"></script>
```

建議將 `<script>` 放在 `</body>` 前，或使用 `defer`。

---

## 注意事項
* 程式中需區分英文字母的大小寫。
* 寫程式需細心，任何一個字母的錯誤都可能導致程式無法運作。

---

## 資料型別

| 類型              | 範例                           |
| --------------- | ---------------------------- |
| 字串 (String)     | `"Hello"`、`'Hi'`、\``Hey`\`     |
| 數字 (Number)     | `10`、`3.14`                  |
| 布林 (Boolean)    | `true`、`false`               |
| 陣列 (Array)      | `[1, 2, 3]`、`["a", "b"]`     |
| 物件 (Object)     | `{ name: "Alice", age: 20 }` |
| 空值 (null)       | `null`                       |
| 未定義 (undefined) | `undefined`                  |
* 其他：Symbol, Symbol
* Object
  * 屬性鍵 (Property keys) 可以是任何符號或字串。
  * 屬性鍵需要單（'）或雙引號（"）字串字面值，而不是模板字面值(``)。
* Array
  * typeof [] = object：  
    陣列（Array）其實是特殊型態的物件（Object）。
    > JavaScript 的語言設計歷史造成的結果。

## 變數
變數的名稱被稱為識別符號(identifier)。  

有效的識別符號必須遵循以下規則：
* 識別符號可以包含Unicode字母、美元符號（$）、下劃線字元（_）、數字（0-9），甚至一些 Unicode 字元。
* 識別符號不能包含空格，因為解析器使用空格來分離輸入元素。 
* 識別符號必須以字母、下劃線（_）或美元符號（$）開頭。 他們不能從數字開始，以防止數字和識別符號之間的混淆。

---

## 變數宣告
變數：程式中用來儲存資料的基本單位。  
基本格式：var 變數名稱；let 變數名稱。  
利用 `=` 將資料放入變數中，以便未來使用。

```js
let name;
let name = "Alice";      // 可重新賦值
const age = 25;          // 常數，不能變更
var city;
var city = "Taipei";     // 舊式語法（不推薦）
```

## 作用域 (`{}`, block statement)
```js
let x = 10;
{
  let y = 20;
  console.log(x); // 有效
  console.log(y); // 有效
}
console.log(x);   // 有效
console.log(y);   // 錯誤：y is not defined
```
常見與 if, for, while 等控制流程搭配

---

## 運算子
https://web.dev/learn/javascript/comparison
```js
// 指定運算：=, +=, -=
let a = 0;
a += 2;
console.log(a);

// 單元運算：++, --, !
let b = 0;
b++;
console.log(b);

// 算術運算：+, -, *, /, %
console.log("10 + 5 =", 10 + 5); // 數字相加
console.log("10 - 5 =", 10 - 5); // 數字相減
console.log("10 * 5 =", 10 * 5); // 數字相乘
console.log("10 / 5 =", 10 % 3); // 數字相除
console.log("10 % 5 =", 10 % 3); // 數字相除後的餘數

// 比較運算：>, <, ==, >=, <=
console.log("a == b : ", a == b)      // 相等（值）
console.log("a === b : ", a === b)     // 全等（值與型別）
console.log("a != b : ", a != b)      // 不等
console.log("a !== b : ", a !== b)     // 全不等 (null, undefined)
console.log("a > b", a > b)       // 大於
console.log("a <= b", a <= b)      // 小於等於

// 邏輯運算：&&, ||, !
console.log("a && b", a && b)      // 且
console.log("a || b", a || b)      // 或
console.log("!a", !a)          // 非

// 資料型態的重要性 (弱型別語言)
console.log(`"Hello" + "World" = ${"Hello" + "World"}`) // 字串串接
console.log(`"課程網站 - " + 1 = ${"課程網站 - " + 1} (${typeof "課程網站 - " + 1}`)`;      // 把 1 轉換成字串後，字串串接
```

---

## 條件判斷

```js
if ( true ) console.log("True");

if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}

```

三元運算子：

```js
let result = score >= 60 ? "及格" : "不及格";
```

switch-case：
```js
let score = "B";

switch (score) {
  case "A":
    // 如果表達式 === "A"，就執行這裡
    console.log("優秀");
    break;
    // `break`：跳出 `switch` 結構，否則會繼續執行下一個 `case`（稱為 "fall-through" 現象）
  case "B":
    console.log("良好");
    break;
  case "C":
    console.log("普通");
    break;
  case "D":
  case "E":
  case "F":
    console.log("需加強");
    break;
  default:
    // `default`：所有 case 都不符合時執行，可選寫但建議保留
    console.log("無效等級");
}

// 比較「單一變數」對應多個可能值時，不建線寫太多 if-else
```

---

## 迴圈語法
for
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

forin
```js
const myObject = { "myProperty" : true, "mySecondProperty" : false };
for( const myKey in myObject ) {
    console.log( `${ myKey } : ${ myObject[myKey] }` );
}
```

forof
```js
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

while
```js
// 請避免無窮迴圈
let iterationCount = 0;
console.log( "Pre-loop." );
while( iterationCount < 3 ) {
  iterationCount++;
  console.log( "Loop iteration." );
}
```

do...while
```js
let randomNum;
do {
  randomNum = ( () => Math.floor( Math.random() * 10 ) )();
  console.log( `Is the number ${ randomNum }?` );
} while ( randomNum !== 3 );
```

### 非同步JavaScript

---

## 函式定義與呼叫
關鍵詞 (key word)
* `return`
* `new`
* `this`
```js
function sayHello(name) {
    console.log("Hey");
    return "Hello, " + name;
}

let message = sayHello("Tom");
console.log("message = ",message);
```

箭頭函式（ES6）：

```js
const add = (a, b) => a + b;

const minus = (a, b) => {
    return a - b
};
```

---

## 物件與陣列

### 物件 (Object)

```js
const user = {
  name: "Amy",
  age: 22,
  greet: function () {
    console.log("Hi, I'm " + this.name);
  }
};

user.greet(); // 呼叫方法
```

### 陣列操作

```js
let nums = [1, 2, 3];
nums.push(4);         // 新增元素
console.log(nums[0]); // 讀取第一個元素
console.log(nums.length); // 取得陣列長度 
```

---

## 常用內建函式與方法

| 類型   | 方法/屬性                             | 範例                             |
| ---- | --------------------------------- | ------------------------------ |
| 字串   | `.length`, `.toUpperCase()`       | `"hi".toUpperCase()`           |
| 陣列   | `.push()`, `.pop()`, `.forEach()` | `arr.forEach()`                |
| 數字   | `Math.random()`, `Math.floor()`   | `Math.floor(3.8)`              |
| 日期時間 | `Date()`                          | `new Date().getFullYear()`     |
| 轉型   | `Number()`, `String()`            | `Number("123")`, `String(123)` |

---

## ES6 教學總覽
ES6（ECMAScript 2015）是 JavaScript 的一個重大版本，加入了許多提升語言表達能力與開發效率的新特性。

以下為常見的 ES6 語法介紹。

### 1. `let` 與 `const`

#### `let`：區塊作用域變數

```js
let x = 10;
if (true) {
    let x = 20;
    console.log(x); // 20
}
console.log(x);   // 10
```

#### `const`：宣告常數（不可重新賦值）

```js
const PI = 3.14;
// PI = 3.14159; // 錯誤：不能重新賦值
```

---

### 2. 箭頭函式（Arrow Functions）

簡化函式撰寫，且**不綁定 this**

```js
// 傳統函式
function add(a, b) {
  return a + b;
}

// 箭頭函式
const add = (a, b) => a + b;
```

---

### 3. 模板字串（Template Literals）

使用 **反引號 \`** 包裹，可插入變數與換行：

```js
const name = "Alice";
console.log(`Hello, ${name}!
歡迎來到 ES6 教學。`);
```

---

### 4. 解構賦值（Destructuring）

#### 解構陣列：

```js
const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a); // 1
```

#### 解構物件：

```js
const user = { name: "Tom", age: 25 };
const { name, age } = user;
console.log(name); // Tom
```

---

### 5. 預設參數（Default Parameters）

```js
function greet(name = "訪客") {
  console.log(`你好，${name}`);
}
greet();         // 你好，訪客
greet("Amy");    // 你好，Amy
```

---

### 6. 展開運算子（Spread `...`）

#### 展開陣列：

```js
const nums = [1, 2, 3];
const all = [...nums, 4, 5];
console.log(all); // [1, 2, 3, 4, 5]
```

#### 展開物件：

```js
const user = { name: "Tom" };
const newUser = { ...user, age: 30 };
console.log(newUser); // { name: "Tom", age: 30 }
console.log({ ...user, age: 20 }); // { name: "Tom", age: 20 }
```

---

### 7. 剩餘參數（Rest Parameters）

```js
function sum(...nums) {
    console.log(nums);
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
```

---

### 8. 模組（Modules）

#### 導出（export）

```js
// file: math.js
export const PI = 3.14;
export function add(a, b) {
    return a + b;
}
```

#### 匯入（import）

```js
import { PI, add } from './math.js';
console.log(add(2, PI));
```

---

### 9. 類別（Class）

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const p = new Person("Jane");
p.greet(); // Hi, I'm Jane
```

---

### 10. Promise（非同步處理）

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("資料載入完成"), 1000);
  });
}

fetchData().then(data => console.log(data));
```

---

### ES6 總整理表

| 特性              | 說明                   |
| --------------- | -------------------- |
| `let` / `const` | 區塊變數與常數              |
| 箭頭函式            | 簡化函式撰寫、不綁定 this      |
| 模板字串            | 支援變數與換行的字串寫法         |
| 解構賦值            | 快速拆解陣列與物件屬性          |
| 展開運算子           | 快速複製與合併陣列/物件         |
| 預設參數            | 函式參數設定預設值            |
| 剩餘參數            | 收集多餘參數為陣列            |
| 模組化             | 支援 `import`/`export` |
| 類別              | 支援物件導向語法             |
| Promise         | 處理非同步流程的機制           |

---

## 事件與 DOM 操作

### HTML

```html
<button onclick="sayHi()">點我</button>
```

### JavaScript

```js
function sayHi() {
  alert("Hello!");
}
```

或使用事件監聽：

```html
<button id="my-btn">點我</button>
```
```js
document.getElementById("my-btn").addEventListener("click", function() {
  alert("Clicked!");
});
```

---

## JSON 與 API 簡介

### JSON 格式

```json
{
  "name": "Alice",
  "age": 30
}
```

### 轉換

```js
let json = '{"name":"Alice","age":30}';
let obj = JSON.parse(json);           // 轉為物件
let str = JSON.stringify(obj);        // 轉回字串
```

---
