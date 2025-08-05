# JavaScript 教學 - 物件基礎

---

任何日常生活中的東西，都可以是一種物件：電腦、手機、房子、貓、狗、人類。

任何較抽象的東西，也可以是一種物件：平面座標、瀏覽紀錄管理程式、遊戲中的玩家角色。

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

// 
/*
物件 = {
    成員名稱1:資料A (任何型態),
    成員名稱2:資料B (任何型態),

    ...
}
*/
```

#### 延伸補充
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

### 陣列操作

```js
let nums = [1, "hi", {}];
nums.push(100);           // 新增元素
console.log(nums[0]);     // 讀取第一個元素
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

## 字串物件
程式中使用的字串，其實是一個物件。

```js
var name = "Hello"; // 簡化的寫法
// var name = new String("Hello"); // 完整的寫法

console.log(name[2]);     // "l"
console.log(name.length); // 5
```
* 字串物件提供許多的方法，用來對字串做各種的處理。
    | 方法 / 屬性                 | 說明                  | 範例                                   |
    | ----------------------- | ------------------- | ------------------------------------ |
    | `charAt(字元位置)`          | 取得字串中特定位置的字元        | `"hello".charAt(1)` → `"e"`          |
    | `indexOf(想搜尋的文字)`       | 搜尋字串中是否包含特定文字，並回傳位置 | `"apple".indexOf("p")` → `1`         |
    | `substring(開頭位置, 結束位置)` | 取得子字串（不含結束位置）       | `"abcdef".substring(1, 4)` → `"bcd"` |
    | `toLowerCase()`         | 將字串轉為小寫             | `"HELLO".toLowerCase()` → `"hello"`  |
    | `toUpperCase()`         | 將字串轉為大寫             | `"hello".toUpperCase()` → `"HELLO"`  |

## 數學物件
在程式中直接寫 Math 取得系統內建的數學物件，提供許多常見的數學運算支援。

| 類型 | 屬性 / 方法          | 說明            | 範例                              |
| -- | ---------------- | ------------- | ------------------------------- |
| 屬性 | `Math.PI`        | 圓周率（π）        | `Math.PI` → `3.141592653589793` |
| 屬性 | `Math.E`         | 自然對數的底數（e）    | `Math.E` → `2.718281828459045`  |
| 方法 | `Math.random()`  | 取得 0\~1 之間的亂數 | `Math.random()` → 例如 `0.5342`   |
| 方法 | `Math.abs(數字)`   | 取得數字的絕對值      | `Math.abs(-8)` → `8`            |
| 方法 | `Math.pow(x, y)` | 計算 x 的 y 次方   | `Math.pow(2, 3)` → `8`          |
| 方法 | `Math.round(數字)` | 四捨五入          | `Math.round(4.6)` → `5`         |
| 方法 | `Math.floor(數字)` | 無條件捨去（向下取整）   | `Math.floor(4.9)` → `4`         |
| 方法 | `Math.ceil(數字)`  | 無條件進位（向上取整）   | `Math.ceil(4.1)` → `5`          |
| 方法 | `Math.sqrt(數字)`  | 對數字開平方根       | `Math.sqrt(16)` → `4`           |

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