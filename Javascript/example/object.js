// 物件 (Object)
const user = {
  name: "Amy",
  age: 22,
  greet: function () {
    console.log("Hi, I'm " + this.name);
  },
  child: {
    name: "John",
    age: 3,
  },
};

console.log("=== 物件 ===");
console.log(`user.name ➜ ${user.name}`);
console.log(`user.age ➜ ${user.age}`);
console.log(`user.greet() ➜`);
user.greet();
// 弱型別輸出 [object Object]
console.log(`user ➜ ${user}`);
console.log(user);
// 完整字串輸出
console.log(`user ➜ ${JSON.stringify(user)}`);
console.log(user?.child?.child);
console.log(user?.child?.age);


// 淺層複製
console.log("");
console.log("=== 淺層複製 ===");
const shallowCopyUser1 = user;
const shallowCopyUser2 = {...user};
const shallowCopyUser3 = Object.assign({}, user);
shallowCopyUser3.child.age = 10;
console.log(`shallowCopyUser1 ➜`);
console.log(shallowCopyUser1);
console.log(`shallowCopyUser2 ➜`);
console.log(shallowCopyUser2);
console.log(`shallowCopyUser3 ➜`);
console.log(shallowCopyUser3);
console.log(`user ➜`);
console.log(user);


// 深層複製
console.log("");
console.log("=== 深層複製 ===");
const deepCopyUser = JSON.parse(JSON.stringify(user));
deepCopyUser.child.age = 50;
delete deepCopyUser.greet;
const deepCopyUser2 = structuredClone(deepCopyUser);
deepCopyUser2.child.age = 100;
console.log(`user ➜`);
console.log(user);
console.log(`deepCopyUser ➜`);
console.log(deepCopyUser);
console.log(`deepCopyUser2 ➜}`);
console.log(deepCopyUser2);

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
const arr = [1, "hi", {}, "hi"];
const arr2 = [1, 2, 3, 4, 5];

// 陣列基本輸出
console.log(`arr2 ➜ ${arr2} ➜ ${JSON.stringify(arr2)}`);
console.log(`arr ➜ ${arr} ➜ ${JSON.stringify(arr)}`);

// 陣列長度
console.log(`arr.length ➜ ${arr.length}`);

// 陣列元素
console.log(`arr[0] ➜ ${arr[0]}`);
console.log(`arr[1] ➜ ${arr[1]}`);
console.log(`arr[2] ➜ ${arr[2]} ➜ ${JSON.stringify(arr[2])}`);

// 陣列方法 - 判斷是否為陣列
console.log(`Array.isArray(arr) ➜ ${Array.isArray(arr)}`);


// 新增元素 (末尾)
console.log(`arr.push(4) ➜ ${arr.push(4)} ➜ ${JSON.stringify(arr)}`);

// 刪除元素 (末尾)
console.log(`arr.pop() ➜ ${arr.pop()} ➜ ${JSON.stringify(arr)}`);

// 新增元素 (開頭)
console.log(`arr.unshift(0) ➜ ${arr.unshift(0)} ➜ ${JSON.stringify(arr)}`);

// 刪除元素 (開頭)
console.log(`arr.shift() ➜ ${arr.shift()} ➜ ${JSON.stringify(arr)}`);

// 判斷是否包含某值
console.log(`arr.includes("hi") ➜ ${arr.includes("hi")}`);

// 查找元素第一次出現的索引
console.log(`arr.indexOf("hi") ➜ ${arr.indexOf("hi")}`);

// 查找元素最後一次出現的索引
console.log(`arr.lastIndexOf("hi") ➜ ${arr.lastIndexOf("hi")}`);

// 查找索引
console.log(`arr.findIndex(item === "hi") ➜ ${arr.findIndex(item => item === "hi")}`);

// 查找值
console.log(`arr.find(item === "hi") ➜ ${arr.find(item => item === "hi")}`);

// 過濾：移除 "hi";
const filterArr = arr.filter(item => item !== "hi");
console.log(`arr.filter(item => item !== "hi") ➜ ${JSON.stringify(filterArr)}`);

// 映射：每個數字乘以 2
const mapArr = arr2.map(item => item * 2);
console.log(`arr2.map(item => item * 2) ➜ ${JSON.stringify(mapArr)}`);

// 累加：陣列總和
const reduceArr = arr2.reduce((total, item) => total + item, 0);
console.log(`arr2.reduce((total, item) => total + item, 0) ➜ ${JSON.stringify(reduceArr)}`);

// some：是否有元素為 "hi"
console.log(`arr.some(item => item === "hi") ➜ ${arr.some(item => item === "hi")}`);

// every：是否所有元素為 "hi"
console.log(`arr.every(item => item === "hi") ➜ ${arr.every(item => item === "hi")}`);

// 排序 (注意：會改變原始陣列)
console.log(`arr2.sort() ➜ ${arr2.sort()}`);
console.log(`arr2.sort((a, b) => a - b) ➜ ${arr2.sort((a, b) => a - b)}`);

// 反轉 (注意：會改變原始陣列)
console.log(`arr2.reverse() ➜ ${arr2.reverse()}`);

// 取部分陣列 (不改原始)➜ slice(start, end)
console.log(`arr2.slice(1, 3) ➜ ${arr2.slice(1, 3)}`);
console.log(`arr2.slice(1) ➜ ${arr2.slice(1)}`);
console.log(`arr2.slice() ➜ ${arr2.slice()}`);

// 移除一筆資料 (注意：會改變原始) ➜ splice(start, deleteCount, ...items)
console.log(`arr.splice(1, 1) ➜ ${JSON.stringify(arr.splice(1, 1))} ➜ ${JSON.stringify(arr)}`);

// 插入元素 (注意：會改變原始) ➜ splice(start, deleteCount, ...items)
console.log(`arr.splice(1, 0, 100) ➜ ${JSON.stringify(arr.splice(1, 0, 100))} ➜ ${JSON.stringify(arr)}`);

// 替換元素 (注意：會改變原始) ➜ splice(start, deleteCount, ...items)
console.log(`arr.splice(1, 1, "hi") ➜ ${JSON.stringify(arr.splice(1, 1, "hi"))} ➜ ${JSON.stringify(arr)}`);

// 合併陣列
console.log(`arr.concat(arr2) ➜ ${JSON.stringify(arr.concat(arr2))}`);

// 陣列轉字串
console.log(`arr.toString() ➜ ${arr.toString()}`);

// 合併字串
console.log(`arr.join(", ") ➜ ${arr.join(", ")}`);


// 字串物件
console.log("");
console.log("=== 字串物件 ===");
const str = "Hello";
console.log(`str.length ➜ ${str.length}`);
console.log(`str[0] ➜ ${str[0]}`);
console.log(`str.charAt(0) ➜ ${str.charAt(0)}`);
console.log(`str.indexOf("l") ➜ ${str.indexOf("l")}`);
console.log(`str.substr(1, 2) ➜ ${str.substr(1, 2)}`);
console.log(`str.toUpperCase() ➜ ${str.toUpperCase()}`);
console.log(`str.toLowerCase() ➜ ${str.toLowerCase()}`);

// Date 物件
console.log("");
console.log("=== 日期物件 ===");
console.log(`new Date("2025-01-01 20:17:40 +00:00") ➜ ${new Date("2025-01-01 20:17:40 +00:00")}`);
console.log(`new Date(2025, 0, 1, 20, 17, 40, 0) ➜ ${new Date(2025, 0, 1, 20, 17, 40, 0)}`);
console.log(`Date.now() ➜ ${Date.now()} ➜ 時間戳：單位為毫秒(ms)`);
console.log(`new Date(Date.now()) ➜ ${new Date(Date.now())}`);
console.log(`new Date() ➜ ${new Date()}`);
const date = new Date();
console.log(`date ➜ ${date}`);
console.log(`date.toString() ➜ ${date.toString()}`);
console.log(`date.toDateString() ➜ ${date.toDateString()}`);
console.log(`date.toISOString() ➜ ${date.toISOString()}`);
console.log(`date.getTime() ➜ ${date.getTime()} ➜ 時間戳：單位為毫秒(ms)`);
console.log(`date.getFullYear() ➜ ${date.getFullYear()}`);
console.log(`date.getMonth() ➜ ${date.getMonth()}`);
console.log(`date.getDate() ➜ ${date.getDate()}`);
console.log(`date.getHours() ➜ ${date.getHours()}`);
console.log(`date.getMinutes() ➜ ${date.getMinutes()}`);
console.log(`date.getSeconds() ➜ ${date.getSeconds()}`);

// Math 物件
console.log("");
console.log("=== Math 物件 ===");
console.log(Math);
console.log(`Math.PI ➜ ${Math.PI}`);
console.log(`Math.E ➜ ${Math.E}`);
console.log(`Math.random() ➜ ${Math.random()}`);
console.log(`Math.max(1, 2, 3) ➜ ${Math.max(1, 2, 3)}`);
console.log(`Math.min(1, 2, 3) ➜ ${Math.min(1, 2, 3)}`);
console.log(`Math.pow(2, 3) ➜ ${Math.pow(2, 3)}`);
console.log(`Math.sqrt(9) ➜ ${Math.sqrt(9)}`);
console.log(`Math.abs(-8) ➜ ${Math.abs(-8)}`);
console.log(`Math.round(3.14) ➜ ${Math.round(3.14)}`);
console.log(`Math.ceil(3.14) ➜ ${Math.ceil(3.14)}`);
console.log(`Math.floor(3.14) ➜ ${Math.floor(3.14)}`);

// JSON 物件
console.log("");
console.log("=== JSON 物件 ===");
console.log(JSON);
console.log(`JSON.stringify(user) ➜ ${JSON.stringify(user)}`);
console.log(`JSON.parse(JSON.stringify(user)) ➜ ${JSON.parse(JSON.stringify(user))}`);


// ---------------------- 補充 ---------------------- //


// WeakMap 物件
console.log("");
console.log("=== WeakMap 物件 ===");
const map = new WeakMap();
console.log(map);
map.set(user, "user");
console.log(`map.get(user) ➜ ${map.get(user)}`);

// WeakSet 物件
console.log("");
console.log("=== WeakSet 物件 ===");
const set = new WeakSet();
console.log(set);
set.add(user);
console.log(`set.has(user) ➜ ${set.has(user)}`);

// Proxy 物件
console.log("");
console.log("=== Proxy 物件 ===");
const proxy = new Proxy(user, {});
console.log(proxy);
console.log(`proxy.name ➜ ${proxy.name}`);
console.log(`proxy.age ➜ ${proxy.age}`);

// Reflect 物件
console.log("");
console.log("=== Reflect 物件 ===");
console.log(Reflect);
console.log(`Reflect.get(user, "name") ➜ ${Reflect.get(user, "name")}`);

// Error 物件
console.log("");
console.log("=== Error 物件 ===");
const error = new Error("Error message");
console.dir(error);
console.log(`error.message ➜ ${error.message}`);
console.log(`error.stack ➜ ${error.stack}`);
// console.dir(new Error("My Error message"));

// Eval 物件
console.log("");
console.log("=== Eval 物件 ===");
console.dir(eval);
console.log(`eval("2 + 2") ➜ ${eval("2 + 2")}`);

// Function 物件
console.log("");
console.log("=== Function 物件 ===");
console.log(`Function("return 2 + 2") ➜ ${Function("return 2 + 2")}`);
console.log(`Function("return 2 + 2")() ➜ ${Function("return 2 + 2")()}`);

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
