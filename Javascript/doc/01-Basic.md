# JavaScript 教學 - 入門筆記


參考：
* [彭彭的教學課程 | JavaScript 程式簡介](https://docs.google.com/presentation/d/1qMZrWHPZbJsxqJuISYqoXj3FqAk4nfngpV88YirReqk/edit?usp=sharing)
* [彭彭的教學課程 | 變數與運算子](https://docs.google.com/presentation/d/1x_Qa87sDiIMpwu8Sx8VSGSrO-hQKb5heEfLnn8BaY2Y/edit?usp=sharing)

範例：
* [use_javascript.html](../example/use_javascript.html)
* [use_javascript_body.js](../example/use_javascript_body.js)
* [use_javascript_head.js](../example/use_javascript_head.js)
* [variable.html](../example/variable.html)
* [variable.js](../example/variable.js)

---

## 什麼是 JavaScript？

JavaScript 是一種用來為網頁添加互動功能的程式語言。它是前端三大技術之一，與 HTML、CSS 一起運作於瀏覽器中。

* 可以在網頁中運作的一種直譯式程式語言。
* 利用 JavaScript 程式可控制 HTML 與 CSS 的設定，進而達到動態網頁的效果。
* 現代網頁不可或缺的部分。

用途包含：
- 表單驗證
- 動畫與特效
- DOM 操作
- 資料互動 (AJAX、API)
- 前端框架 (如 React、Vue)

---

## 如何在 HTML 中使用 JavaScript？

### 方法一：行內腳本 (Inline Script)
```html
<button onclick="alert('你點到了按鈕')">點我</button>
```

直接寫在 HTML 標籤的屬性中的 JavaScript 程式碼

### 方法二：內部腳本 (Internal Script)
```html
<script>
  alert("Hello JavaScript!");
</script>
```
> type 屬性可省略，預設已為 `text/javascript`

* 放置在 `<head>` 中：
    * HTML 尚未載入完成時就執行 JS
    * 無法安全操作 DOM 元素
    * 容易報錯 (元素未存在)

* 放置在 `<body>` 中 (上)：
    * 該行被解析時立即執行 JS
    * 只能操作該行之前出現的 DOM
    * 後面元素還沒被解析

* 放置在 `<body>` 中 (底)：
    * HTML 幾乎解析完畢後才執行
    * 可以安全操作整個 DOM
    * 推薦放法，等同 `defer`

> 注意！ `defer` 是屬於外部 JavaScript (src) 腳本的屬性。

### 方法三：外部腳本 (External Script)
```html
<!-- 放在 `<head>` 中 -->
<script src="script.js" defer></script>

<!-- 放在 `<body>` 底 (已等同 defer) -->
<script src="script.js"></script>
```
> type 屬性可省略，預設已為 `text/javascript`

* 預設情況 (沒加 defer)：
    * HTML 解析器會在讀到 `<script>` 時暫停解析，
    * 等 main.js 下載 + 執行完，再繼續解析 HTML。
    * 這會導致頁面載入變慢、畫面出不來 (阻塞渲染)。
    * **建議在 `<script>` 放在 `<body>` 底時使用。**

* 加上 defer 的寫法：
    * JavaScript 會背景下載。
    * 等 HTML 完全解析完後，再依序執行 (不阻塞畫面渲染)。
    * 頁面載入更順暢。
    * **建議在 `<script>` 放在 `<head>` 中時使用。**

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
| 函式 (Function)   | `() => {}`、`function () {}`               |
| 陣列 (Array)      | `[1, 2, 3]`、`["a", "b"]`     |
| 物件 (Object)     | `{ name: "Alice", age: 20 }` |
| 空值 (null)       | `null`                       |
| 未定義 (undefined) | `undefined`                  |
* 其他：Symbol, Symbol
* Object
  * 屬性鍵 (Property keys) 可以是任何符號或字串。
  * 屬性鍵需要單 (')或雙引號 (")字串字面值，而不是模板字面值(``)。
* Array
  * typeof [] = object：  
    陣列 (Array)其實是特殊型態的物件 (Object)。
    > JavaScript 的語言設計歷史造成的結果。
    > 需用 Array.isArray() 才能區分
* null
  * typeof null = object：  
    null 也是特殊型態的物件 (Object)。
    > JavaScript 的語言設計歷史造成的結果。

## 變數
變數的名稱被稱為識別符號(identifier)。  

有效的識別符號必須遵循以下規則：
* 識別符號可以包含Unicode字母、美元符號 ($)、下劃線字元 (_)、數字 (0-9)，甚至一些 Unicode 字元。
* 識別符號不能包含空格，因為解析器使用空格來分離輸入元素。 
* 識別符號必須以字母、下劃線 (_)或美元符號 ($)開頭。 他們不能從數字開始，以防止數字和識別符號之間的混淆。

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
var city = "Taipei";     // 舊式語法 (不推薦)
```

## 變數的作用域 (Scope)
* 使用 var 宣告變數：只有函式區塊能定義 scope 範圍。
* 使用 let 宣告變數：任何程式區塊都能定義 scope 範圍。
* 宣告在內部範圍的變數不能被外部程式使用。
* `{}`, block statement
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

## 常見運算子
更多請參考：
* [web.dev | Comparison operators](https://web.dev/learn/javascript/comparison)
* [MDN | Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
* [MDN | Expressions and operators (Reference)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#expressions_and_operators)
```js
// 指定運算：=, +=, -=, *=, /=, %=
let a = 0;
console.log("a = 0 :", a);
a += 4;
console.log("a += 4 :", a);
a -= 2;
console.log("a -= 2 :", a);
a *= 3;
console.log("a *= 3 :", a);
a /= 2;
console.log("a /= 2 :", a);
a %= 2;
console.log("a %= 2 :", a);

// 單元運算：++, --
let b = 0;
console.log("++b =", ++b);
console.log("b =", b);
console.log("b++ =", b++);
console.log("b =", b);
// ++b	為前置遞增，會先加 1 再回傳值，回傳結果為加完的結果
// b++	後置遞增，會先回傳值，再加 1 ，回傳結果為原本的值

// 算術運算：+, -, *, /, %
console.log("10 + 5 =", 10 + 5); // 數字相加
console.log("10 - 5 =", 10 - 5); // 數字相減
console.log("10 * 5 =", 10 * 5); // 數字相乘
console.log("10 / 5 =", 10 % 3); // 數字相除
console.log("10 % 5 =", 10 % 3); // 數字相除後的餘數

// 比較運算：>, <, ==, >=, <=
console.log("a == b : ", a == b)      // 相等 (值)
console.log("a === b : ", a === b)     // 全等 (值與型別)
console.log("a != b : ", a != b)      // 不等
console.log("a !== b : ", a !== b)     // 全不等 (null, undefined)
console.log("a > b", a > b)       // 大於
console.log("a <= b", a <= b)      // 小於等於

// 邏輯運算：&&, ||, !
console.log("a && b", a && b)      // 且
console.log("a || b", a || b)      // 或
console.log("!a", !a)          // 非
```


### 資料型態的重要性
```js
// 資料型態的重要性 (弱型別語言)
console.log(`"Hello" + "World" = ${"Hello" + "World"}`) // 字串串接
console.log(`"課程網站 - " + 1 = ${"課程網站 - " + 1} (${typeof "課程網站 - " + 1}`);      // 把 1 轉換成字串後，字串串接
```
布林值與其他資料型態的強制轉換
| 資料型態 | 轉換為 true | 轉換為 false |
| ------- | ----------- | ----------- |
|  字串    | 非空字串 ("Hello World") | 空字串 ("") |
| 數字     | 非零數字 (5, -10.5)  | 零 (0) |
| 其他物件 | 有東西 | 沒有東西 (null, undefined) |


---
