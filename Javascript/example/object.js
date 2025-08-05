// 物件 (Object)
const user = {
  name: "Amy",
  age: 22,
  greet: function () {
    console.log("Hi, I'm " + this.name);
  }
};

console.log("=== 物件 ===");
console.log(`user.name ➜ ${user.name}`);
console.log(`user.age ➜ ${user.age}`);
console.log(`user.greet() ➜`);
user.greet();
console.log(`user ➜ ${JSON.stringify(user)}`);

// 新增屬性
console.log("");
console.log("=== 新增屬性 ===");
user.phone = "0912345678";
console.log(`user ➜ ${JSON.stringify(user)}`);

// 刪除屬性
console.log("");
console.log("=== 刪除屬性 ===");
delete user.phone;
console.log(`user ➜ ${JSON.stringify(user)}`);

// 解構賦值
console.log("");
console.log("=== 解構賦值 ===");
const { name, age, greet } = user;
console.log(`name ➜ ${name}`);
console.log(`age ➜ ${age}`);
console.log(`greet() ➜`);
greet();

// 解構賦值 + 可變參數 + 預設值
console.log("");
console.log("=== 解構賦值 + 可變參數 ===");
const { name: userName, age: userAge, greet: userGreet = () => console.log("Hello") } = user;
console.log(`userName ➜ ${userName}`);
console.log(`userAge ➜ ${userAge}`);
console.log(`userGreet() ➜`);
userGreet();

// 陣列操作
console.log("");
console.log("=== 陣列操作 ===");
const arr = [1, "hi", {}];
console.log(`arr ➜ ${arr}`);
console.log(`arr ➜ ${JSON.stringify(arr)}`);
console.log(`arr.push(4) ➜ ${arr.push(4)} (${JSON.stringify(arr)})`);
console.log(`arr.pop() ➜ ${arr.pop()} (${JSON.stringify(arr)})`);
console.log(`arr.unshift(0) ➜ ${arr.unshift(0)} (${JSON.stringify(arr)})`);
console.log(`arr.shift() ➜ ${arr.shift()} (${JSON.stringify(arr)})`);
console.log(`arr.includes("hi") ➜ ${arr.includes("hi")}`);
console.log(`arr.indexOf("hi") ➜ ${arr.indexOf("hi")}`);

// 字串物件
console.log("");
console.log("=== 字串物件 ===");
const str = "Hello";
console.log(`str.length ➜ ${str.length}`);
console.log(`str.charAt(0) ➜ ${str.charAt(0)}`);
console.log(`str.indexOf("l") ➜ ${str.indexOf("l")}`);
console.log(`str.toUpperCase() ➜ ${str.toUpperCase()}`);
console.log(`str.toLowerCase() ➜ ${str.toLowerCase()}`);

// Date 物件
console.log("");
console.log("=== 日期物件 ===");
const date = new Date();
console.log(`date ➜ ${date}`);
console.log(`date.getTime() ➜ ${date.getTime()}`);
console.log(`date.getFullYear() ➜ ${date.getFullYear()}`);
console.log(`date.getMonth() ➜ ${date.getMonth()}`);
console.log(`date.getDate() ➜ ${date.getDate()}`);
console.log(`date.getHours() ➜ ${date.getHours()}`);
console.log(`date.getMinutes() ➜ ${date.getMinutes()}`);
console.log(`date.getSeconds() ➜ ${date.getSeconds()}`);

// Math 物件
console.log("");
console.log("=== Math 物件 ===");
console.log(`Math.PI ➜ ${Math.PI}`);
console.log(`Math.E ➜ ${Math.E}`);
console.log(`Math.round(3.14) ➜ ${Math.round(3.14)}`);
console.log(`Math.ceil(3.14) ➜ ${Math.ceil(3.14)}`);
console.log(`Math.floor(3.14) ➜ ${Math.floor(3.14)}`);
console.log(`Math.random() ➜ ${Math.random()}`);

// JSON 物件
console.log("");
console.log("=== JSON 物件 ===");
console.log(`JSON.stringify(user) ➜ ${JSON.stringify(user)}`);
console.log(`JSON.parse(JSON.stringify(user)) ➜ ${JSON.parse(JSON.stringify(user))}`);

// WeakMap 物件
console.log("");
console.log("=== WeakMap 物件 ===");
const map = new WeakMap();
map.set(user, "user");
console.log(`map.get(user) ➜ ${map.get(user)}`);

// WeakSet 物件
console.log("");
console.log("=== WeakSet 物件 ===");
const set = new WeakSet();
set.add(user);
console.log(`set.has(user) ➜ ${set.has(user)}`);

// Proxy 物件
console.log("");
console.log("=== Proxy 物件 ===");
const proxy = new Proxy(user, {});
console.log(`proxy.name ➜ ${proxy.name}`);
console.log(`proxy.age ➜ ${proxy.age}`);

// Reflect 物件
console.log("");
console.log("=== Reflect 物件 ===");
console.log(`Reflect.get(user, "name") ➜ ${Reflect.get(user, "name")}`);

// Error 物件
console.log("");
console.log("=== Error 物件 ===");
const error = new Error("Error message");
console.log(`error.message ➜ ${error.message}`);
console.log(`error.stack ➜ ${error.stack}`);

// Eval 物件
console.log("");
console.log("=== Eval 物件 ===");
console.log(`eval("2 + 2") ➜ ${eval("2 + 2")}`);

// Function 物件
console.log("");
console.log("=== Function 物件 ===");
console.log(`Function("return 2 + 2") ➜ ${Function("return 2 + 2")()}`);

// Set 物件
console.log("");
console.log("=== Set 物件 ===");
const set2 = new Set();
set2.add(1);
set2.add(2);
console.log(`set2.has(1) ➜ ${set2.has(1)}`);
console.log(`set2.has(2) ➜ ${set2.has(2)}`);

// Map 物件
console.log("");
console.log("=== Map 物件 ===");
const map2 = new Map();
map2.set(1, "one");
map2.set(2, "two");
console.log(`map2.get(1) ➜ ${map2.get(1)}`);
console.log(`map2.get(2) ➜ ${map2.get(2)}`);
