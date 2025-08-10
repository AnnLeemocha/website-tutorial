console.log("=== 變數 ===");
// 作用域 (Scope)
// 宣告在內部範圍的變數不能被外部程式使用。
{
    var myvar1 = "value 1";     // 舊式語法 (不推薦)

    const myvar2 = "value 2";       // 常數，不能變更

    let myvar3;
    myvar3 = "value 3";      // 可重新賦值

    console.log(myvar1);
    console.log(myvar2);
    console.log(myvar3);
}

console.log(myvar1);
// console.log(myvar2);
// console.log(myvar3);

let _test;
let $test;
// let 2test;     // 不能從數字開始
// let my name;   // 不能包含空格
// let const;     // 不能是JS的保留字/關鍵字

console.log("=== 原始型別 (Primitive) ===");

console.log("--- 字串 ---");
console.log("字串", typeof "字串");
console.log('字串', typeof '字串');
console.log(`字串`, typeof `字串`);
console.log(`字串 ${myvar1}`, typeof `字串 ${myvar1}`);

console.log("--- 數字 ---");
console.log(20, typeof 20);
console.log(20.5, typeof 20.5);
console.log(NaN, typeof NaN);

console.log("--- 布林值 ---");
console.log(true, typeof true);
console.log(false, typeof false);

console.log("--- 空值 ---");
console.log(null, typeof null);
// console.log("null === null", null === null);
// console.log("{} === null", {} === null);

console.log("--- 未定義 ---");
console.log(undefined, typeof undefined);
let testvar;
console.log("testvar", typeof testvar);
// console.log("undefined == null", undefined == null);
// console.log("undefined === null", undefined === null);

console.log("--- Symbol ---");
console.log(Symbol('id'), typeof Symbol('id'));

console.log("--- bigint ---");
console.log(123n, typeof 123n);


console.log("=== 物件型別 (Object Types) — 複合資料 ===");

console.log("--- 函式 ---");
const func = function() {
    console.log("I'm function.");
}
console.log(func, typeof func);
console.log("--- 其他物件型別 ---");
console.log(new Date(), typeof new Date());
console.log(/abc/, typeof /abc/);
console.log(new Map(), typeof new Map());
console.log(new Set(), typeof new Set());


console.log("--- 物件 ---");
// {}
let obj = {
    "name": "Amy",
    info: {
        age: 20,
    },
    "sayHello": function () { return `hi! ${this.name}` }
}
console.log(obj);
console.log(obj.sayHello());
console.log({"key": "value", "key2": 10}, typeof {"key": "value", "key2": 10});

console.log("--- 陣列 ---");
// [];
// [1,2,3];
// [1,2,"b", ["a", 4]];
console.log([1,2,3], typeof [1,2,3]);
// console.log("Array.isArray([1,2,3])", Array.isArray([1,2,3]));
// console.log(`Array.isArray({"key": "value"})`, Array.isArray({"key": "value"}));
// console.dir([]);
// console.dir({});

