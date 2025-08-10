# JavaScript 教學 - 物件基礎

參考：

範例：
* [06.html](../demo/06.html)
* [06.js](../demo/06.js)

---

任何日常生活中的東西，都可以是一種物件：電腦、手機、房子、貓、狗、人類。

任何較抽象的東西，也可以是一種物件：平面座標、瀏覽紀錄管理程式、遊戲中的玩家角色。

## 物件 (Object)

```js
/*
物件 = {
    成員名稱1:資料A (任何型態),
    成員名稱2:資料B (任何型態),

    ...
}
*/
const user = {
  name: "Amy",
  info: {
    age: 22,
  },
  greet: function () {
    console.log("Hi, I'm " + this.name);
  }
};

console.log(obj);
// 取得屬性
console.log(obj.name);
console.log(obj.info.age);
// 呼叫方法
user.greet(); 

// 修改/新增
obj.info.age = 30;
obj.info.phone = "xxx";
console.log(obj);

// 刪除
delete obj.info.phone;
console.log(obj);
```

### 選擇性鏈結運算子 (`?.`)
```js
const user = {
  name: "Amy",
  info: {
    age: 22,
  }
};

// 不會跳出錯誤
console.log(user.info?.adress?.city); // undefine
```

### 解構賦值
```js
const user = {
  name: "Amy",
  info: {
    age: 22,
  }
};
const { name, info } = user;
console.log(name);
console.log(info); // { age: 22 }

const { name, info:{age, phone = "default"} } = user;
console.log(age);    // 22
console.log(phone);  // "default"
```

### 延伸補充
* 物件的成員，按照成員的資料型態，可區分為**屬性(attribute/property)** 和**方法(method)**。
    * 資料不是函式的成員稱之屬性。
    * 資料是函式的成員稱之方法。
    * 此分類在程式中沒有區別，主要溝通使用。
* 同類別的物件：建構函式  
    function (舊 ES5)
    ```js
    function Line(x1, y1, x2, y2){
        this.x1 = x1; this.y1 = y1;
        this.x2 = x2; this.y2 = y2;
    }
    Line.prototype.length = function () {
        return Math.hypot(this.x2 - this.x1, this.y2 - this.y1);
    };

    var line1 = new Line(3,4,5,6);
    var line2 = new Line(1,6,2,4);
    console.log(line1);
    console.log(line2);
    ```
    class (新 ES6)
    ```js
    class Line {
        constructor(x1, y1, x2, y2) {
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
        }
        
        length() {
            return Math.hypot(this.x2 - this.x1, this.y2 - this.y1);
        }
    }
    var line1 = new Line(3,4,5,6);
    var line2 = new Line(1,6,2,4);
    console.log(line1);
    console.log(line2);
    ```

### 物件特性
* 原始型別 (Primitive Types)
  * `number`、`string`、`boolean` 等，變數儲存的是值，不會共享內層資料

* 參考型別 (Reference Types)
  * `object`、`array`、`function` 等，變數儲存的不是值本身，而是指向記憶體中資料的參考 (地址)。
  * 直接複製會只複製第一層
  * 拷貝後會共享內層資料

#### 淺拷貝
```js
const user = {
    name: "Alice",
    info: { age: 25 }  
};

const user2 = user;
const user2 = { ...user };
const user2 = Object.assign({}, user);

user.info.age = 100;
console.log("user2:");
console.log(user2);
console.log("user:");
console.log(user);  // 被更改了
```
#### 深拷貝
```js
const user = {
    name: "Alice",
    info: { age: 25 }  
};

const user2 = JSON.parse(JSON.stringify(user));

// 注意!用此方法函式不能被 clone，會跳錯
const user2 = structuredClone(user); 

user.info.age = 100;
console.log("user2:");
console.log(user2);
console.log("user:");
console.log(user); // 不會被修改
```

---

## 其他常用物件的函式
更多內建物件：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

### 陣列物件
更多陣列方法：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
```js
const arr = [1, "hi", {key:"value"}, () => console.log("HOHO")];

console.log(arr);
console.log(arr[0]);
console.log(arr[2]);

// 陣列長度
console.log(arr.length);

// 陣列與迴圈
for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    console.log(i, item);
}

// 判斷是否為陣列
console.log(Array.isArray(arr));

// 新增元素 (末尾)
arr.push(4)

// 刪除元素 (末尾)
arr.pop()

// 判斷是否包含某值
console.log(arr.includes("hi"));

// ...
```

#### 常用功能列表
| 功能說明             | 範例程式碼                                              | 說明 / 備註             |
| ---------------- | -------------------------------------------------- | ------------------- |
| 陣列長度             | `arr.length`                                       | 回傳陣列中的元素數量          |
| 陣列與迴圈            | `for (let i = 0; i < arr.length; i++) {}`          | 使用 for 迴圈逐一取出元素     |
| 判斷是否為陣列          | `Array.isArray(arr)`                               | 回傳 `true` 或 `false` |
| 新增元素（末尾）         | `arr.push(4)`                                      | 在陣列尾部新增一項元素         |
| 刪除元素（末尾）         | `arr.pop()`                                        | 移除最後一個元素            |
| 判斷是否包含某值         | `arr.includes("hi")`                               | 檢查陣列中是否包含某值         |
| 查找第一次出現的索引       | `arr.indexOf("hi")`                                | 若找不到，回傳 -1          |
| 查找符合條件的索引        | `arr.findIndex(item => item?.key === "value")`     | 回傳符合條件的第一個索引        |
| 查找符合條件的值         | `arr.find(item => item?.key === "value")`          | 回傳第一個符合條件的值         |
| 過濾元素             | `arr.filter(item => typeof item !== "object")`     | 回傳符合條件的新陣列          |
| 映射（每個數字乘 2）      | `[1,2,3].map(item => item * 2)`                    | 回傳新的陣列              |
| 累加總和             | `[1,2,3].reduce((total, item) => total + item, 0)` | 求總和                 |
| 是否有部分符合條件（some）  | `arr.some(item => item === "hi")`                  | 有一項符合就回傳 `true`     |
| 是否所有都符合條件（every） | `arr.every(item => item === "hi")`                 | 所有都符合才回傳 `true`     |
| 排序               | `arr.sort()`                                       | 預設為字串排序，會修改原陣列      |
| 自訂排序（遞減）         | `arr.sort((a, b) => b - a)`                        | 數字排序，從大到小           |
| 反轉               | `arr.reverse()`                                    | 反轉陣列順序，會改原陣列        |
| 取部分陣列（不改原陣列）     | `arr.slice(1, 3)`                                  | 取 index 1\~2（不含 3）  |
| 合併成字串            | `arr.join(" + ")`                                  | 將元素用特定符號串接成一個字串     |


## 字串物件
程式中使用的字串，其實是一個物件。

```js
var name = "Hello"; // 簡化的寫法
// var name = new String("Hello"); // 完整的寫法

console.log(name[2]);      // "l"
console.log(name.length);  // 5
console.log(name.toUpperCase()); // HELLO
```
* 字串物件提供許多的方法，用來對字串做各種的處理。
    | 方法 / 屬性                 | 說明                  | 範例                                   |
    | ----------------------- | ------------------- | ------------------------------------ |
    | `charAt(字元位置)`          | 取得字串中特定位置的字元 (舊)        | `"hello".charAt(1)` → `"e"`          |
    | `indexOf(想搜尋的文字)`       | 搜尋字串中是否包含特定文字，並回傳位置 | `"apple".indexOf("p")` → `1`         |
    | `substring(開頭位置, 結束位置)` | 取得子字串 (不含結束位置)       | `"abcdef".substring(1, 4)` → `"bcd"` |
    | `toLowerCase()`         | 將字串轉為小寫             | `"HELLO".toLowerCase()` → `"hello"`  |
    | `toUpperCase()`         | 將字串轉為大寫             | `"hello".toUpperCase()` → `"HELLO"`  |


## 數學物件
在程式中直接寫 Math 取得系統內建的數學物件，提供許多常見的數學運算支援。

| 類型 | 屬性 / 方法          | 說明            | 範例                              |
| -- | ---------------- | ------------- | ------------------------------- |
| 屬性 | `Math.PI`        | 圓周率 (π)        | `Math.PI` → `3.141592653589793` |
| 屬性 | `Math.E`         | 自然對數的底數 (e)    | `Math.E` → `2.718281828459045`  |
| 方法 | `Math.random()`  | 取得 0\~1 之間的亂數 | `Math.random()` → 例如 `0.5342`   |
| 方法 | `Math.abs(數字)`   | 取得數字的絕對值      | `Math.abs(-8)` → `8`            |
| 方法 | `Math.pow(x, y)` | 計算 x 的 y 次方   | `Math.pow(2, 3)` → `8`          |
| 方法 | `Math.round(數字)` | 四捨五入          | `Math.round(4.6)` → `5`         |
| 方法 | `Math.floor(數字)` | 無條件捨去 (向下取整)   | `Math.floor(4.9)` → `4`         |
| 方法 | `Math.ceil(數字)`  | 無條件進位 (向上取整)   | `Math.ceil(4.1)` → `5`          |
| 方法 | `Math.sqrt(數字)`  | 對數字開平方根       | `Math.sqrt(16)` → `4`           |

---

### JSON 物件
JavaScript Object Notation
* 簡便的 Javascript 物件表示法，現在更是一種被多數程式語言廣泛接受的資料格式。
* 無法註解
* 字串只能用 `"`
```json
{
  "name": "Alice",
  "age": 30
}
```

JSON 轉換成 js 物件：

```js
let json = '{"name":"Alice","age":30}';
let obj = JSON.parse(json);           // 轉為物件
let str = JSON.stringify(obj);        // 轉回字串
```

---
