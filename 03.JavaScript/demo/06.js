console.log("=== this ===");
const user = {
    name: "Tom",
    sayHello: function () {
        console.log(`Hello, ${this.name}`);
    }
}
user.sayHello();
console.log(user);

console.log("=== class 類別 ===");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const person = new Person("John", 30);
person.sayHello();
console.log(person);

console.log("=== 物件操作 ===");
const obj = {
    name: "Alice",
    info: { age: 25 },
};

console.log(obj);
console.log(obj.name);
console.log(obj.info.age);

console.log("=== 修改/新增 ===");
obj.info.phone = "xxx";
console.log(obj);

console.log("=== 刪除 ===");
delete obj.info.phone;
console.log(obj);

console.log("=== 選擇性鏈結運算子 (?.) ===");
console.log(obj.info.adress);
// console.log(obj.info.adress.city); // undifine 找不到 city
console.log(obj.info?.adress?.city);

console.log("=== 解構賦值 ===");
const { name, info } = obj;
console.log(name);
console.log(info);
const { info:{age, phone = "default"} } = obj;
console.log(age);
console.log(phone);

console.log("=== 淺拷貝 ===");
// 參考型別 (Reference Types)
// 變數儲存的不是值本身，而是指向記憶體中資料的參考 (地址)。
// * 直接複製會只複製第一層
// * 拷貝後會共享內層資料

const obj1 = obj;
const obj2 = { ...obj };
const obj3 = Object.assign({}, obj);

console.log("obj:");
console.log(JSON.stringify(obj));

obj.info.age = 100;
console.log("obj:");
console.log(obj);
console.log("obj1:");
console.log(obj1);
console.log("obj2:");
console.log(obj2);  // 被更改了
console.log("obj3:");
console.log(obj3);  // 被更改了

console.log("=== 深拷貝 ===");
obj1.info.age = 25;
console.log("obj:");
console.log(JSON.stringify(obj));


const obj4 = JSON.parse(JSON.stringify(obj));

// 注意! 用此方法函式不能被 clone，會跳錯
const obj5 = structuredClone(obj); 

obj.info.age = 100;
console.log("obj:");
console.log(obj);
console.log("obj4:");
console.log(obj4); // 不會被修改
console.log("obj5:");
console.log(obj5); // 不會被修改


console.log("=== 陣列操作 ===");
const arr = [1, "hi", {key:"value"}, () => console.log("HOHO")];

console.log(arr);
console.log(arr[0]);
console.log(arr[2]);

console.log("--- 陣列長度 ---");
console.log(arr.length);


console.log("--- 陣列與迴圈 ---");
let myarr = [2,4,6,8,10];
for (let i = 0; i < myarr.length; i++) {
    const item = myarr[i];
    console.log(item);
}

console.log("--- 判斷是否為陣列 ---");
console.log(Array.isArray(arr));

console.log("--- 新增元素 (末尾) ---");
arr.push(4)
console.log(arr);

console.log("--- 刪除元素 (末尾) ---");
arr.pop()
console.log(arr);

console.log("--- 判斷是否包含某值 ---");
console.log(arr.includes("hi"));

console.log("--- 查找元素第一次出現的索引 ---");
console.log(arr.indexOf("hi"));

console.log("--- 查找索引 ---");
console.log(arr.findIndex(item => item?.key === "value"));

console.log("--- 查找值 ---");
console.log(arr.findIndex(item => item?.key === "value"));

console.log("--- 過濾 ---");
console.log(arr.filter(item => typeof item !== "object"));

console.log("--- 映射：每個數字乘以 2 ---");
console.log([1,2,3,4,5].map(item => item * 2));

console.log("--- 累加：陣列總和 ---");
console.log([1,2,3,4,5].reduce((total, item) => total + item, 0));

console.log("--- some ：是否有元素為 \"hi\" ---");
console.log(arr.some(item => item === "hi"));

console.log("--- every ：是否所有元素為 \"hi\" ---");
console.log(arr.every(item => item === "hi"));

console.log("--- 排序 (注意：會改變原始陣列) ---");
let nums = [3,4,1,2];
console.log(nums);
console.log(nums.sort());
console.log(nums);
nums = [3,4,1,2];
console.log(nums.sort((a, b) => b - a));

console.log("--- 反轉 (注意：會改變原始陣列) ---");
nums = [3,4,1,2];
console.log(nums);
console.log(nums.reverse());
console.log(nums);

console.log("--- 取部分陣列 (不改原始) ---");
nums = [3,4,1,2];
console.log(nums);
console.log(nums.slice(1, 3));

console.log("--- 合併字串 ---");
nums = [3,4,1,2];
console.log(nums);
console.log(nums.join(" + "));

console.log("=== (String) 字串物件操作 ===");
const str = "Hello";
console.log(str);
console.log(str.length);
console.log(str[0]);
console.log(str.charAt(0));
console.log(str.toUpperCase());

console.log("=== (Math) 數學物件操作 ===");
console.log(Math.PI);
console.log(Math.random());
console.log(Math.max(1, 2, 3));
console.log(Math.abs(-8));


console.log("=== JSON 物件操作 ===");
console.log(JSON.stringify(obj));
let jsonStr = JSON.stringify(obj);
console.log(JSON.parse(jsonStr));

console.log("=== Date 物件操作 ===");
console.log(new Date());
console.log(new Date().getTime());

// ......
