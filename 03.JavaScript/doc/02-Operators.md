# JavaScript 教學 - 運算子


參考：
* [彭彭的教學課程 | JavaScript 程式簡介](https://docs.google.com/presentation/d/1qMZrWHPZbJsxqJuISYqoXj3FqAk4nfngpV88YirReqk/edit?usp=sharing)
* [彭彭的教學課程 | 變數與運算子](https://docs.google.com/presentation/d/1x_Qa87sDiIMpwu8Sx8VSGSrO-hQKb5heEfLnn8BaY2Y/edit?usp=sharing)

範例：
* [03.html](../demo/03.html)
* [03.js](../demo/03.js)

## 常見運算子
更多請參考：
* [web.dev | Comparison operators](https://web.dev/learn/javascript/comparison)
* [MDN | Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
* [MDN | Expressions and operators (Reference)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#expressions_and_operators)

### 算術運算：+, -, *, /, %
```js
console.log("10 + 5 =", 10 + 5); // 數字相加
console.log("10 - 5 =", 10 - 5); // 數字相減
console.log("10 * 5 =", 10 * 5); // 數字相乘
console.log("10 / 5 =", 10 % 5); // 數字相除
console.log("10 % 5 =", 10 % 5); // 數字相除後的餘數
```

---

### 單元運算：++, --
```js
let b = 0;
console.log("++b =", ++b);
console.log("b =", b);
console.log("b++ =", b++);
console.log("b =", b);
// ++b	為前置遞增，會先加 1 再回傳值，回傳結果為加完的結果
// b++	後置遞增，會先回傳值，再加 1 ，回傳結果為原本的值
```

---

### 指定運算：=, +=, -=, *=, /=, %=
```js
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
```

---

### 比較運算：>, <, ==, >=, <=
```js
console.log("a == b : ", a == b)      // 相等 (值)
console.log("a === b : ", a === b)     // 全等 (值與型別)
console.log("a != b : ", a != b)      // 不等
console.log("a !== b : ", a !== b)     // 全不等 (null, undefined)
console.log("a > b", a > b)       // 大於
console.log("a <= b", a <= b)      // 小於等於
```

### 邏輯運算：&&, ||, !
```js
console.log("a && b", a && b)      // 且
console.log("a || b", a || b)      // 或
console.log("!a", !a)          // 非
```

---

## 資料型態的重要性 (弱型別語言)
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
