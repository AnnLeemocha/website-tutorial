# JavaScript 教學 - 控制流程

參考：
* [彭彭的教學課程 | 流程控制](https://docs.google.com/presentation/d/17Atsg0gRhYaSaAMT4ztHxdeoGIui_zNj1vTMsMiWrRw/edit?usp=sharing)

範例：
* [04.html](../demo/04.html)
* [04.js](../demo/04.js)

---


## 條件判斷

### if
```js
if ( true ) console.log("True");
if ( true ) {
    console.log("True");
}
/*
基本運作流程如下：
    if (判斷結果) 若判斷結果是對的 (true)，則執行右側的程式碼，否則忽略此行程式碼
*/
```

### if...else, if...else if...else
```js
if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}
/*
基本運作流程如下：
    if (判斷結果) {
        若判斷結果是對的 (true)，則執行對應區塊的程式碼，否則忽略此區塊
    } else {
        若判斷結果是錯的 (false)，則執行對應區塊的程式碼，否則忽略此區塊
    }
*/
```

### if...else if...else
```js
var x = prompt("請輸入一個數字","");
if ( x > 500 ) {
	console.log("變數x大於500");
} else if ( x > 300 ) {
	console.log("變數x介於300 ~ 500之間");
} else {
	console.log("變數x小於或等於300");
}

/*
基本運作流程如下：
    if (判斷結果1) {
        若判斷結果1是對的 (true)，則執行對應區塊的程式碼，否則忽略此區塊
    } else if (判斷結果2) {
        若判斷結果2是對的 (true)，則執行對應區塊的程式碼，否則忽略此區塊
    } else {
        若以上判斷結果都是錯的 (false)，則執行對應區塊的程式碼，否則忽略此區塊
    }
*/
```

---

### 三元運算子：
```js
let result = score >= 60 ? "及格" : "不及格";
```

---

### switch-case：
```js
let score = "B";

switch (score) {
  case "A":
    // 如果表達式 === "A"，就執行這裡
    console.log("優秀");
    break;
    // `break`：跳出 `switch` 結構，否則會繼續執行下一個 `case` (稱為 "fall-through" 現象)
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

/*
基本運作流程如下：
    switch (某個變數) {
        case 1: 
            變數==1時，執行此區塊的程式碼。
            break;
        case 2: 
            變數==2時，執行此區塊的程式碼。
            break;
        default: 
            變數不符合以上條件時，預設執行。
            break;
    }
*/
```

---

## 布林值與其他資料型態的強制轉換
| 資料型態 | 轉換為 true | 轉換為 false |
| ------- | ----------- | ----------- |
|  字串    | 非空字串 ("Hello World") | 空字串 ("") |
| 數字     | 非零數字 (5, -10.5)  | 零 (0) |
| 其他物件 | 有東西 | 沒有東西 (null, undefined) |


---

## 迴圈語法
### for
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

/*
基本運作流程如下：
    for (初始化命令; 判斷結果; 一般程式命令) {
        基本流程與 while 相同，可參照比較。
    }
*/
```

---

### while
```js
// 請避免無窮迴圈
let iterationCount = 0;
console.log( "Pre-loop." );
while( iterationCount < 3 ) {
  iterationCount++;
  console.log( "Loop iteration." );
}

/*
基本運作流程如下：
    while (判斷結果) {
        若判斷結果為true，執行此區塊。執行完後跳回上方重新進行判斷。
        直到判斷結果為false時，才離開迴圈。
    }
*/
```

---

### do...while
```js
let randomNum;
do {
  randomNum = ( () => Math.floor( Math.random() * 10 ) )();
  console.log( `Is the number ${ randomNum }?` );
} while ( randomNum !== 3 );
```

---

### 迴圈中的 `break` 命令
此命令可強制離開迴圈結構，只能使用在迴圈的對應程式區塊中。
```js
var i=0;
while(i<100){
	if(i==50){
		break;
	}
	i++;
}
```

---

### 迴圈中的 continue 命令
此命令可強制程式回到上方，立刻進行下一次的迴圈流程。
```js
var x=0;
for(var i=0; i<100; i++){
	if(i%2==0){
		continue;
	}
	x++;
}
```

---

### 補充：

#### forin
```js
const myObject = { "myProperty" : true, "mySecondProperty" : false };
for( const myKey in myObject ) {
    console.log( `${ myKey } : ${ myObject[myKey] }` );
}
```

#### forof
```js
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

---
