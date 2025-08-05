// 條件判斷
console.log("=== 條件判斷 ===");
let score;

// if 無 {}
console.log("--- if 無 {} ---");
score = 80;
if ( score >= 60 ) console.log(">= 60");
if ( score < 60 ) console.log("< 60");

// if 有 {}
console.log("--- if 有 {} ---");
if ( score >= 60 ) {
    console.log(">= 60");
}
if ( score < 60 ) {
    console.log("< 60");
}

// if else
console.log("--- if else ---");
score = 80;
if (score >= 60) {
    console.log(">= 60, 及格");
} else {
    console.log("< 60, 不及格");
}

// if else if
console.log("--- if else if ---");
score = 80;
if (score >= 90) {
    console.log(">= 90, 優");
} else if (score >= 80) {
    console.log(">= 80, 良");
} else if (score >= 60) {
    console.log(">= 60, 及格");
} else {
    console.log("< 60, 不及格");
}

// switch-case
console.log("--- switch-case ---");
let rank;
rank = "E";
switch (rank) {
    case "A":
        console.log(rank, "優秀");
        break;
    case "B":
        console.log(rank, "良好");
        break;
    case "C":
        console.log(rank, "普通");
        break;
    case "D":
    case "E":
    case "F":
        console.log(rank, "需加強");
        break;
    default:
        console.log(rank, "無效等級");
        break;
}

// 三元運算子
console.log("--- 三元運算子 ---");
score = 80;
console.log(score >= 60 ? ">= 60, 及格" : "< 60, 不及格");


// 資料型態的重要性 (弱型別語言)
console.log("");
console.log("=== 資料型態的重要性 ===");
console.log(`30 ➜ ${"30" >= 60 ? ">= 60, 及格" : "< 60, 不及格"}`);
console.log(`Hello ➜ ${"Hello" ? "非空字串" : "空字串"}`);
console.log(`  ➜ ${"" ? "非空字串" : "空字串"}`);
console.log(`${100} ➜ ${100 ? "非零數字" : "數字零"}`);
console.log(`${0} ➜ ${0 ? "非零數字" : "數字零"}`);

// 迴圈
console.log("");
console.log("=== 迴圈 ===");

// for
console.log("--- for 迴圈 ---");
for (let i = 0; i < 3; i++) {
    console.log(i);
}

// while
console.log("--- while 迴圈 ---");
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

// do-while
console.log("--- do-while 迴圈 ---");
i = 0;
do {
    console.log(i);
    i++;
} while (i < 3);

// break
console.log("--- break 命令 ---");
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 2) break;
}

// continue
console.log("--- continue 命令 ---");
for (let i = 0; i < 10; i++) {
    if (i % 2) continue;
    console.log(i);
}

// for-in
console.log("--- for-in 迴圈 ---");
let obj = {
    a: 1,
    b: 2,
    c: 3
};
for (let key in obj) {
    console.log(`${key} ➜ ${obj[key]}`);
}

// for-of
console.log("--- for-of 迴圈 ---");
let arr = [1, 2, 3];
for (let value of arr) {
    console.log(value);
}