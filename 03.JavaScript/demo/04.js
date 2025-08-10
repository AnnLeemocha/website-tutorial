let score = 80;

console.log("=== if ===");
if (score >= 60) console.log(">= 60"); 
if (score < 60) console.log("< 60");

score = 80;
score = 40;
score = 10;
if (score >= 60) {
    console.log(">= 60"); 
} else if (score >= 30) {
    console.log(">= 30"); 
} else {
    console.log("< 30");
}

console.log(score >= 60 ? ">= 60, 及格" : "< 60, 不及格");

console.log("=== switch...case ===");
let rank;
rank = "D";
rank = "E";
rank = "Z";
switch (rank) {
    case "A":
        console.log(rank, "優秀");
        break;
    case "B":
        console.log(rank, "良好");
        break;
    case "C":
    case "D":
        console.log(rank, "普通");
        break;
    case "E":
    case "F":
        console.log(rank, "需加強");
        break;
    default:
        console.log(rank, "無效等級");
        break;
}

console.log("-------------------------");

console.log("=== for ===");
for (let i = 0; i < 3; i++) {
    console.log(i);
}
console.log("end");
// console.log(i);

console.log("=== while ===");
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
console.log("end", i);

console.log("=== do...while ===");
// let i = 0;
i = 0;
do {
    console.log(i);
    i++;
} while (i < 3);
console.log("end", i);

// break
console.log("--- break 命令 ---");
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 1) break;
}

// continue
console.log("--- continue 命令 ---");
for (let i = 0; i < 10; i++) {
    if (i % 2) continue;
    console.log(i);
}

