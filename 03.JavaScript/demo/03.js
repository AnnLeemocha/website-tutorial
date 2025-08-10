
console.log("=== 算術運算 ===");
// 算術運算：+, -, *, /, %
console.log("10 + 5 =", 10 + 5); // 數字相加
console.log("10 - 5 =", 10 - 5); // 數字相減
console.log("10 * 5 =", 10 * 5); // 數字相乘
console.log("10 ** 5 =", 10 ** 5); // 數字n次方
console.log("10 / 5 =", 10 % 5); // 數字相除
console.log("10 % 5 =", 10 % 5); // 數字相除後的餘數


console.log("=== 指定運算 ===");
// 指定運算：=, +=, -=, *=, /=, %=
let a = 1;
a += 4;
console.log("a += 4 :", a);

a = 1;
a -= 2;
console.log("a -= 2 :", a);

a = 1;
a *= 3;
console.log("a *= 3 :", a);

a = 1;
a /= 2;
console.log("a /= 2 :", a);

a = 1;
a %= 2;
console.log("a %= 2 :", a);


console.log("=== 單元運算 ===");
// 單元運算：++, --
let b = 0;
console.log("++b =", ++b);
console.log("b =", b);

b = 0;
console.log("b++ =", b++);
console.log("b =", b);


console.log("=== 比較運算 ===");
// 比較運算：>, <, ==, >=, <=
a = null;
b = undefined;
a = 1;
b = 2;
console.log("a == b : ", a == b);       // 相等 (值)
console.log("a === b : ", a === b);     // 全等 (值與型別)
console.log("a != b : ", a != b);       // 不等
console.log("a !== b : ", a !== b);     // 全不等 (null, undefined)
console.log("a > b", a > b);            // 大於
console.log("a >= b", a >= b);          // 大於等於
console.log("a < b", a < b);            // 小於等於
console.log("a <= b", a <= b);          // 小於等於


console.log("=== 邏輯運算 ===");
// 邏輯運算：&&, ||, !
a = 3;
a = false;
b = 2;
console.log("a && b", a && b)      // 且
console.log("a || b", a || b)      // 或
console.log("!a", !a)              // 非

console.log("-----------------------------------")

console.log("=== 邏輯運算 ===");
console.log("Hello" + "World");
console.log("Hello" + 2);
console.log(typeof ("Hello" + 2));
console.log(!"");
console.log(!0);
console.log(!null);
console.log(!undefined);
