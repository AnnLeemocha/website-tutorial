# JavaScript 教學 - 函式基礎

參考：
* [彭彭的教學課程 | 流程控制](https://docs.google.com/presentation/d/17Atsg0gRhYaSaAMT4ztHxdeoGIui_zNj1vTMsMiWrRw/edit?usp=sharing)

範例：
* [function.html](../example/function.html)
* [function.js](../example/function.js)

---

* 一個包裝好的程式區塊，可重複呼叫使用。
* Javascript 中最重要的部分。

## 函式定義與呼叫 (自訂函式)
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

/*
函式定義：
    function 函式名稱(輸入參數名稱) {

        函式執行區塊。

        return 回傳值; // 此命令結束函式執行
    }
    
    // 輸入參數 (非必要) 
    // 函式名稱(), 函式名稱(n1), 函式名稱(n1, n2)
    // return (非必要)

函式呼叫：
    函式名稱(輸入參數);
    let x = 函式名稱(輸入參數); // 回傳值
    console.log(x);
*/
```

另一種寫法
```js
let add = function(n1, n2) {
	return n1 + n2;
};
```

### 箭頭函式 (ES6)：

```js
const add = (a, b) => a + b;

const minus = (a, b) => {
    return a - b
};
```

### 預設參數
```js
let add = function(n1, n2=0) {
	return n1 + n2;
};

add(6);
```

### 可變參數
```js
let add = function(...nums) {
    console.log(nums);
	return nums.reduce((a, b) => a + b);
};

add(1, 2, 3, 4, 5)
```

### 解構賦值
```js
let add = function({ num1, num2 }) {
	return num1 + num2;
};

let obj = {
    num1: 1,
    num2: 2
};

add(obj);
```

### 遞迴函式
```js
let loop = function({ num1, num2 }) {
	console.log(num2);    
    if (num2 === 0) return num1;
    return loop(num1, num2 - 1);
};

loop(1, 2);
```

### 內建函式
系統事先幫我們寫好的函式，在程式中可以直接取用。
```js
alert("Hello"); // 警告視窗
confirm("Are you sure?"); // 確認視窗
prompt("Enter a number",""); // 輸入視窗
parseInt("100"); // 可將資料轉換為整數型態
```


