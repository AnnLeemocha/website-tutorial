# JavaScript 教學 - 函式基礎

參考：
* [彭彭的教學課程 | 流程控制](https://docs.google.com/presentation/d/17Atsg0gRhYaSaAMT4ztHxdeoGIui_zNj1vTMsMiWrRw/edit?usp=sharing)

範例：
* [05.html](../demo/05.html)
* [05.js](../demo/05.js)
* [05-2.js](../demo/05-2.js)
* [tool.js](../demo/tool.js)

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

## 內建函式 (排程)
讓程式可以在指定的時間做指定的事情。

沒有排程的程式無法控制時間。

### 建立排程
| 方法名稱                  | 說明                     | 範例                                                      |
| --------------------- | ---------------------- | ------------------------------------------------------- |
| `setTimeout(函式, 毫秒)`  | **延遲執行**：經過指定毫秒後執行一次函式 | `setTimeout(() => { alert("1秒後顯示"); }, 1000);`          |
| `setInterval(函式, 毫秒)` | **間隔執行**：每隔指定毫秒重複執行函式  | `setInterval(() => { console.log("每2秒執行一次"); }, 2000);` |

#### 排程的編號
* 新增一個排程，就像是在行事曆中加入一個待做事項。系統會自動替排程編號。
* 排程編號會在呼叫 setTimeout 或 setInterval 時回傳。

### 刪除排程
刪除排程，就像是取消行事曆中的一個計畫、一個約會。需要排程編號。
| 方法名稱                             | 說明      | 範例                                                |
| -------------------------------- | ------- | ------------------------------------------------- |
| `clearTimeout(timeoutID)`        | 取消延遲執行  | `const id = setTimeout(...); clearTimeout(id);`   |
| `clearInterval(intervalID)`      | 停止重複執行  | `const id = setInterval(...); clearInterval(id);` |

### 範例：
```js
// 延遲 3 秒跳出提示
setTimeout(function () {
  alert("3 秒後提示");
}, 3000);

// 每 5 秒印出一次訊息
const timer = setInterval(function () {
  console.log("每 5 秒執行一次");
}, 5000);

// 10 秒後停止 setInterval
setTimeout(function () {
  clearInterval(timer);
}, 10000);
```

---

## 非同步處理 (Asynchronous Processing)
JS 是**單執行緒** (Single Thread)的語言，意思是同時間只能做一件事。

非同步處理指的是：  
> 程式碼可以「先執行下一步」，等待一段時間後再回來處理完成的工作，而不是「一步一步」等著每個動作完成。

### Callback (回呼函式)
* 傳統方式
* 容易進入 Callback 地獄
```js
setTimeout(() => {
  console.log("1 秒後執行");
}, 1000);

console.log("先執行這裡");
```

### Promise 版本 (ES6)
* 支援鏈式 `.then()` 
* 結構還是略為冗長
```js
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
```

### async/await 版本 (ES8)
* 看起來像同步，但其實是非同步
* 只能在 async 函式內使用
```js
async function fetchData() {
  try {
    const result = await getData("async/await");
    console.log(result); // 資料取得成功
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

### 錯誤處理小結
| 技術          | 特點                 |
| ----------- | ------------------ |
| Callback    | 基本但易亂              |
| Promise     | 鏈式寫法好維護            |
| async/await | 看起來像同步、寫法簡單、便於錯誤處理 |

---

### 錯誤處理 (Exception Handling)
當你預期某段程式碼可能會發生錯誤，但又不希望整個程式因此中斷時，可以使用 try...catch 來捕捉錯誤，並優雅地處理它。

```js
try {
  console.log(x);
} catch (err) {
  console.log("x 未定義", err);
} finally {
  console.log("執行完畢");
}
```

自訂錯誤：
```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("除數不能為 0");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.error("錯誤：", err.message);
}
```

#### 關鍵字說明
| 區塊        | 用途           |
| --------- | ------------ |
| `try`     | 嘗試執行可能會錯的程式碼 |
| `catch`   | 發生錯誤時處理錯誤    |
| `finally` | 一定會執行的收尾區塊   |
| `throw`   | 主動丟出錯誤       |

#### 常見用途
* JSON 解析失敗處理（JSON.parse()）
* API 請求錯誤處理（非 fetch）
* 自訂函式錯誤處理
* 不能讓錯誤中斷整個應用程式時

#### 注意
* `try...catch` 只捕捉同步錯誤，對於非同步錯誤（例如 `fetch()`）需搭配 `.catch()` 或 `async`/`await`。
* 過度使用會讓程式變得難維護，應只包裝可能錯誤的區塊。

## 模組 (Modules)

### 匯出 (export)

```js
// file: math.js
export const PI = 3.14159;
export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

function minus(a, b) {
    return a - b;
}

export default {
    PI,
    add,
    minus
};
```

### 匯入 (import)

```js
import { PI as myPI, add, multiply } from './math.js'; // 無法匯入 minus
import myMath from './math.js'; 

console.log(myMath);
console.log(myMath.minus(3,1));
// console.log(myMath.multiply);  // 未匯出，找不到 multiply
console.log(add(2, myPI)); // 5.14159
console.log(multiply(2, 3)); // 6
```