console.log("=== 自訂函式 ===");
function add(num1, num2) {
    return num1 + num2;
}
console.log(add, add(1, 2));

let num = 0;
function countAdd() {
    num++;
    console.log(num);
}

console.log("=== 匿名函式 ===");
const add2 = function (num1, num2) {
    return num1 + num2;
}
console.log(add2, add2(1, 2));

console.log("=== 箭頭函式 ===");
const add3 = (num1, num2) => num1 + num2;
console.log(add3, add3(1, 2));

const add4 = (num1, num2) => {
    return num1 + num2;
}
console.log(add4, add4(1, 2));


console.log("=== 預設參數 ===");
const minus = (num1, num2 = 0) => num1 - num2;
console.log(minus, minus(1, 2));
console.log(minus, minus(1));


console.log("=== 可變參數 (剩餘運算子) ===");
const sum = (...nums) => {
    console.log("get:", nums);
    return nums.reduce((a, b) => a + b)
};
console.log(sum);
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
let nums = [1, 2, 3, 4, 5];
console.log(sum(...nums));


console.log("=== 解構賦值 ===");
const showObj = ({ key1, key2 }) => {
    return `key1 = ${key1};  key2 = ${key2};`
};
console.log(showObj);
console.log(showObj({ key1: "hello", key2: 2 }));


console.log("=== 遞迴函式 ===");
function factorial(n) {
    if (n === 0) {
        return 1; // 結束條件 (Base case)
    } else {
        return n * factorial(n - 1); // 自己呼叫自己
    }
}
console.log(factorial);
console.log(factorial(3));


console.log("=== 內建函式 (排程) ===");

let loopID = null;
let delayID = null;

let loopNum = 0;
// 間隔執行：每隔指定毫秒重複執行函式
function loop(sec = 1) {
    // 清除計時器，避免重複點擊
    clearInterval(loopID);
    loopNum = 0;
    console.log(loopNum);

    loopID = setInterval(() => {
        loopNum++;
        console.log(loopNum);
    }
        , 1000 * sec);
}

function stopLoop() {
    console.log("我被取消了! (計時)");
    console.log("截止時間:", loopNum);
    clearInterval(loopID);
}

// 延遲執行：經過指定毫秒後執行一次函式
function delay(sec = 1) {
    // 清除計時器，避免重複點擊
    clearTimeout(delayID);

    console.log("等待中");
    delayID = setTimeout(() => {
        console.log("時間到!我執行了");
    }
        , 1000 * sec);
}

function stopDelay() {
    console.log("我被取消了! (延遲)");
    clearTimeout(delayID);
}



console.log("=== 非同步處理 & 錯誤處理 ===");

console.log("--- 使用 Promise ---");
// Promise 版本 (ES6)
const promise = new Promise((resolve, reject) => {
    // 非同步邏輯
    const success = true;

    if (success) {
        resolve("成功了！");
    } else {
        reject("失敗了！");
    }
});

promise
    .then(result => {
        console.log("結果：", result);
    })
    .catch(error => {
        console.error("錯誤：", error);
    });
console.log("end");


function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`等了 ${ms} 毫秒`);
        }, ms);
    });
}

async function run1() {
    console.log("--- 使用 Promise ---");
    console.log("開始");
    wait(1500).then((result) => {
        console.log(result); // "等了 1500 毫秒"
    }).then(() => {
        console.log("再一層");
    }).catch((error) => {
        console.error(error);
    }).finally(() => {
        console.log("結束");
    });
}

// async/await 版本 (ES8)
async function run2() {
    console.log("--- 使用 async/await ---");
    try {
        console.log("開始");
        const result = await wait(1000);
        console.log(result);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("結束");
    }
}

// API
async function runAPI() {
    try {
        const res = await fetch("https://api.github.com/repos/langgenius/dify");
        const data = await res.json();
        console.log("DIFY 資訊：", data);
    } catch (err) {
        console.error("請求失敗：", err);
    }
}


console.log("=== 錯誤處理 ===");

try {
    console.log(x); // x 沒有定義，會拋出錯誤
    throw new Error("有錯誤！");
} catch (error) {
    console.error("捕捉錯誤：", error);
} finally {
    console.log("無論有無錯誤都會執行");
}
console.log("end");

wait(100).then((result) => {
    console.log(result); 
    throw new Error("有錯誤！");
}).then(() => {
    console.log("再一層");
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log("結束");
});

console.log("end");
