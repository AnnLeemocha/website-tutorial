# JavaScript 教學 - 變數與資料型態


參考：
* [彭彭的教學課程 | JavaScript 程式簡介](https://docs.google.com/presentation/d/1qMZrWHPZbJsxqJuISYqoXj3FqAk4nfngpV88YirReqk/edit?usp=sharing)
* [彭彭的教學課程 | 變數與運算子](https://docs.google.com/presentation/d/1x_Qa87sDiIMpwu8Sx8VSGSrO-hQKb5heEfLnn8BaY2Y/edit?usp=sharing)

範例：
* [01.html](../demo/01.html)
* [01.js](../demo/01.js)
  * [如何在 HTML 中使用 JavaScript？](#如何在-html-中使用-javascript)
* [02.html](../demo/02.html)
* [02.js](../demo/02.js)
  * [變數](#變數)，[資料型別](#資料型別)


---

## 什麼是 JavaScript？
網頁的「互動」與「邏輯」

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

## 變數
變數的名稱被稱為識別符號(identifier)。  

有效的識別符號必須遵循以下規則：
* 識別符號可以包含Unicode字母、美元符號 ($)、下劃線字元 (_)、數字 (0-9)，甚至一些 Unicode 字元。
* 識別符號不能包含空格，因為解析器使用空格來分離輸入元素。 
* 識別符號必須以字母、下劃線 (_)或美元符號 ($)開頭。 他們不能從數字開始，以防止數字和識別符號之間的混淆。
* 保留字/關鍵字是 JavaScript 語言本身預定義的詞彙，不能當作變數名稱、函式名稱或屬性名稱，因為它們有特定的語法用途。
  * function, let, const, ...

---

## 變數宣告
變數：程式中用來儲存資料的基本單位。  
基本格式：var 變數名稱; let 變數名稱;。  
利用 `=` 將資料放入變數中，以便未來使用。

```js
let name;
name = "Alice";          // 可重新賦值
const age = 25;          // 常數，不能變更
// age = 25; 
var city;
city = "Taipei";         // 舊式語法 (不推薦)
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
常見與 if, for, while, function 等控制流程搭配

---

## JS 註解
單行
```js
// 任意註解文字
```
多行
```js
/* 
  任意註解文字
*/

/**
 * 任意註解文字
 * 
 * 
 */
```
* 常用於函式說明

---

## 資料型別

#### 原始型別 (Primitive)：
「值」本身
| 型別       | 說明            | 範例                           |
| --------- | --------------- | ---------------------------- |
| `string`    | 字串            | `"Hello"`、`'Hi'`、\``Hey`\`     |
| `number`    | 數字            | `10`、`3.14`                  |
| `boolean`   | 布林值           | `true`、`false`               |
| `null`      | 人為指定的空值    | `null`                       |
| `undefined` | 尚未賦值的變數     | `undefined`                  |
| `symbol`    | 唯一值，用作物件私密屬性 | `Symbol('id')`                  |
| `bigint`    | 可表示極大數字 (> 2⁵³) | `123n`                  |
* null
  * typeof null = object：  
    null 也是特殊型態的物件 (Object)。
    > JavaScript 的語言設計歷史造成的結果。   
    > (Bug 無法修改，會破壞相容性)

#### 物件型別 (Object Types) — 複合資料：
可變的、可包含多個值與方法：
| 型別         | 說明                    | 範例                         |
| ---------- | --------------------- | -------------------------- |
| `object`   | 一般物件 `{ key: value }` | `let obj = {name: "John"}` |
| `array`    | 陣列 `[1, 2, 3]`        | `let arr = [1, 2, 3]`      |
| `function` | 函式                    | `function hello() {}`      |
| `date`     | 日期物件                  | `new Date()`               |
| `regexp`   | 正規表達式                 | `/abc/`                    |
| `map`      | 鍵可為任何型別的 key-value 結構 | `new Map()`                |
| `set`      | 不重複元素集合               | `new Set()`                |
* Object
  * 屬性鍵 (Property keys) 可以是任何符號或字串。
  * 屬性鍵需要單 (')或雙引號 (")字串字面值，而不是模板字面值(``)。
* Array
  * typeof [] = object：  
    陣列 (Array)其實是特殊型態的物件 (Object)。
    > JavaScript 的語言設計歷史造成的結果。  
    > 需用 Array.isArray() 才能區分

---
