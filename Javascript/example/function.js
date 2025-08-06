// 自訂函式
console.log("=== 自訂函式 ===");
function add(num1, num2) {
    return num1 + num2;
}
console.log(`add(1, 2) ➜ ${add(1, 2)}`);

// 匿名函式
console.log("");
console.log("=== 匿名函式 ===");
const add2 = function (num1, num2) {
    return num1 + num2;
}
console.log(`add2(1, 2) ➜ ${add2(3, 4)}`);

// 箭頭函式
console.log("");
console.log("=== 箭頭函式 ===");
const add3 = (num1, num2) => num1 + num2;
console.log(`add3(1, 2) ➜ ${add3(8, 6)}`);

// 匿名函式
console.log("");
console.log("=== 匿名函式 ===");
const add4 = (num1, num2) => {
    return num1 + num2;
}
console.log(`add4(1, 2) ➜ ${add4(1, 2)}`);

// 預設參數
console.log("");
console.log("=== 預設參數 ===");
const add5 = (num1, num2 = 0) => num1 + num2;
console.log(`add5(1) ➜ ${add5(1)}`);
console.log(`add5(1, 2) ➜ ${add5(1, 2)}`);

// 可變參數
console.log("");
console.log("=== 可變參數 ===");
const add6 = (...nums) => {
    console.log(nums);
    return nums.reduce((a, b) => a + b)
};
console.log(`add6(1, 2) ➜ ${add6(1, 2)}`);
console.log(`add6(1, 2, 3, 4, 5) ➜ ${add6(1, 2, 3, 4, 5)}`);
let nums = [1, 2, 3, 4, 5];
console.log(`add6(...nums) ➜ ${add6(...nums)}`);


// 解構賦值
console.log("");
console.log("=== 解構賦值 ===");
const add7 = ({ num1, num2 }) => num1 + num2;
console.log(`add7({ num1: 1, num2: 2 }) ➜ ${add7({ num1: 1, num2: 2 })}`);

// 遞迴函式
console.log("");
console.log("=== 遞迴函式 ===");
const loop = (num1, num2) => {
    console.log(num2);    
    if (num2 === 0) return num1;
    return loop(num1, num2 - 1);
}
console.log(`loop(1, 2) ➜ ${loop(1, 2)}`);

// this
console.log("");
console.log("=== this ===");
const obj = {
    name: "Tom",
    sayHello: function () {
        console.log(`Hello, ${this.name}`);
    }
}
obj.sayHello();

// 內建函式
console.log("");
console.log("=== 內建函式 ===");

// 可將資料轉換為整數型態
console.log("--- parseInt() ---");
console.log(`parseInt("100") ➜ ${parseInt("100")} (${typeof parseInt("100")})`); // 可將資料轉換為整數型態

console.log("--- alert、confirm、prompt 請按對應的按鈕查看 ---");

// 警告視窗
function tryAlert() {
    console.log("--- alert() ---");
    try {
        console.log(`alert("Hello! 我是警告視窗 alert()"); ➜ ${alert("Hello! 我是警告視窗 alert()")}`);
    } catch (error) {
        console.error(error);    
    }
}


// try {
//     console.log(`alert("Hello"); ➜ ${alert("Hello")}`);
// } catch (error) {
//     console.error(error);    
// }

// // 確認視窗
// console.log("--- confirm() ---");
// try {
//     console.log(`confirm("Are you sure?") ➜ ${confirm("Are you sure?")}`);
// } catch (error) {
//     console.error(error);    
// }

// // 輸入視窗
// console.log("--- prompt() ---");
// try {
//     console.log(`let input = prompt("Enter a number","");`);
//     let input = prompt("Enter a number",""); // 輸入視窗
//     console.log(`input = ${input}`);
// } catch (error) {
//     console.error(error);    
// }

// 判斷是否為瀏覽器
const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
if (isBrowser) {
    tryAlert();
}