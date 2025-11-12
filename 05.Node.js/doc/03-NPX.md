# npx 與 CLI 工具

---

## 1. 什麼是 npx

**npx** 是 npm 內建的輔助工具（npm v5.2.0 之後自帶）。

它可以讓我們**直接執行 npm 套件，而不用先安裝到全域或本地**。

---

### 為什麼需要 npx？

沒有 npx 時：

```bash
npm install -g nodemon
nodemon index.js
```

使用 npx：

```bash
npx nodemon index.js
```

* **不需全域安裝**
* **自動使用本地版本（若存在）**
* **支援一次性執行**

---

## 2. npx 的執行邏輯

當執行 `npx <command>` 時，npx 會依序：

1. 檢查當前專案的 `node_modules/.bin/` 是否存在該指令
2. 若有，直接使用該版本執行
3. 若沒有，會臨時從 npm registry 下載最新版本並執行（結束後自動清除）

範例：

```bash
npx cowsay "Hello, NPX!"
```

npx 會：

* 臨時下載 `cowsay` 套件
* 執行輸出
* 執行完自動刪除快取

---

## 3. 常見使用情境

### (1) 一次性執行 CLI 工具

```bash
npx create-react-app my-app
npx create-vue@latest my-vue-app
npx eslint .
```

適用於：

* 不想安裝全域套件
* 不確定版本一致性時（例如多專案）

---

### (2) 使用特定版本的工具

```bash
npx webpack@5.94.0 --version
```

或在專案中明確指定版本：

```bash
npx eslint@8.57.0 .
```

> 可避免因版本差異造成錯誤。

---

### (3) 執行 GitHub / Gist 套件

```bash
npx github:vercel/next.js
npx gist:username/1234567
```

也支援自訂 registry 或壓縮包：

```bash
npx https://example.com/my-cli.tgz
```

---

## 4. 與 npm 的差異

| 功能       | npm                     | npx                                 |
| -------- | ----------------------- | ----------------------------------- |
| 主要用途     | 管理套件                    | 執行套件                                |
| 是否需要安裝   | 需要先安裝                   | 可直接執行                               |
| 常見用途     | `npm install`、`npm run` | `npx create-react-app`、`npx eslint` |
| 是否全域污染   | 可能（-g）                  | 不會                                  |
| 是否支援臨時下載 | 否                       | 是                                   |

---

## 5. CLI 工具介紹

**CLI（Command Line Interface）** 工具是一種透過終端機執行的應用程式。

例如：

| 工具         | 功能                |
| ---------- | ----------------- |
| `eslint`   | 程式碼檢查             |
| `nodemon`  | 自動重新啟動 Node.js 應用 |
| `vite`     | 前端開發伺服器           |
| `prettier` | 程式碼格式化            |
| `tsc`      | TypeScript 編譯器    |

CLI 工具通常會在 `package.json` 的 `bin` 欄位中註冊執行檔。

---

## 6. 建立自己的 CLI 工具

以下示範建立一個簡單的 CLI 應用程式。

### (1) 初始化專案

```bash
mkdir hello-cli && cd hello-cli
npm init -y
```

---

### (2) 建立執行檔

建立 `index.js`：

```js
#!/usr/bin/env node

console.log("Hello from CLI!");
```

> 第一行的 `#!/usr/bin/env node` 稱為 **Shebang**，
> 它告訴系統用 Node.js 來執行此檔案。

---

### (3) 在 `package.json` 中加入 `bin` 欄位

```json
{
  "name": "hello-cli",
  "version": "1.0.0",
  "bin": {
    "hello": "index.js"
  }
}
```

這樣當套件被安裝時，npm 會建立一個可執行的 `hello` 指令。

---

### (4) 測試本地執行

```bash
# 這會在全域 npm 目錄（npm prefix -g）下建立一個符號連結，指向當前資料夾。
npm link

# 解除全域連結
# npm unlink
```

然後直接執行：

```bash
hello
# 輸出：Hello from CLI!
```

> `npm link` 會在全域建立符號連結，方便測試 CLI。

---

### (5) 使用 npx 執行本地 CLI

在其他專案中（未安裝全域）：

```bash
npx ../hello-cli
```

或若套件發佈到 npm：

```bash
npx hello-cli
```

---

## 7. CLI 工具的參數與互動

可使用第三方套件讓 CLI 更強大。

---

### (1) commander：處理指令與參數

```bash
npm install commander
```

範例：

```js
#!/usr/bin/env node
import { program } from "commander";

program
  .name("hello")
  .version("1.0.0")
  .argument("<name>", "your name")
  .option("-u, --upper", "convert to uppercase")
  .action((name, options) => {
    const output = options.upper ? name.toUpperCase() : name;
    console.log(`Hello, ${output}!`);
  });

program.parse();
```

執行：

```bash
npx hello-cli John
npx hello-cli John --upper
```

---

### (2) chalk：顯示彩色文字

```bash
npm install chalk
```

```js
import chalk from "chalk";

console.log(chalk.green("成功！"));
console.log(chalk.yellow.bold("CLI 互動開始"));
```

---

### (3) inquirer：互動式 CLI

```bash
npm install inquirer
```

範例：

```js
import inquirer from "inquirer";

const answers = await inquirer.prompt([
  { type: "input", name: "name", message: "你的名字？" },
  { type: "list", name: "color", message: "選擇顏色：", choices: ["紅色", "綠色", "藍色"] }
]);

console.log(`Hi, ${answers.name}! 你選了 ${answers.color}`);
```

---

## 8. CLI 工具專案的常見結構

```
hello-cli/
├── bin/
│   └── index.js       # 主執行檔 (含 Shebang)
├── src/
│   └── core.js        # 核心邏輯
├── package.json
├── README.md
└── node_modules/
```

---

## 9. npx 常見錯誤排查

| 問題                   | 原因               | 解決方式                           |
| -------------------- | ---------------- | ------------------------------ |
| `command not found`  | CLI 未在 `bin` 中註冊 | 確認 `package.json` 的 `bin` 欄位正確 |
| `Permission denied`  | 檔案未有執行權限         | `chmod +x index.js`            |
| `Cannot find module` | 套件未安裝或路徑錯誤       | 檢查依賴與執行路徑                      |
| 執行錯誤版本               | 全域版本覆蓋本地         | 改用 `npx` 確保執行本地版本              |

---

## 10. 小練習：製作互動式問候 CLI

### 目標：

建立一個 CLI 工具，輸入名字後輸出彩色問候。

### 步驟：

```bash
mkdir greet-cli && cd greet-cli
npm init -y
npm install chalk inquirer
```

建立 `index.js`：

```js
#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

const answers = await inquirer.prompt([
  { type: "input", name: "name", message: "請輸入你的名字：" }
]);

console.log(chalk.cyan(`👋 哈囉，${answers.name}！`));
```

修改 `package.json`：

```json
"bin": {
  "greet": "index.js"
}
```

執行：

```bash
npx ./greet-cli
# 或
npm link && greet
```

---

## 11. 延伸學習

| 主題              | 資源                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------ |
| Commander.js 文件 | [https://github.com/tj/commander.js](https://github.com/tj/commander.js)                   |
| Inquirer.js 文件  | [https://github.com/SBoudrias/Inquirer.js](https://github.com/SBoudrias/Inquirer.js)       |
| Chalk 文件        | [https://github.com/chalk/chalk](https://github.com/chalk/chalk)                           |
| npm 官方文件        | [https://docs.npmjs.com/cli/v11/commands/npx](https://docs.npmjs.com/cli/v11/commands/npx) |

---

