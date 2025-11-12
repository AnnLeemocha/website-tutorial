# Node.js 基礎與架構

---

## 1. 什麼是 Node.js

**Node.js** 是一個開源、跨平台，可以在「瀏覽器外」執行 **JavaScript 的執行環境**（Runtime Environment）。

它建立在 **V8 引擎**（Chrome 的 JavaScript 引擎）之上，並提供許多與系統互動的功能，例如：

* 檔案系統操作（File System）
* 網路伺服器建立（HTTP Server）
* 命令列輸入輸出（CLI Input/Output）
* 模組管理與套件機制

> 用一句話總結：**Node.js 讓 JavaScript 能在伺服器端執行（實現後端開發）**。

---

## 2. Node.js 架構概念

Node.js 採用 **事件驅動（Event-Driven）** 與 **非同步 I/O（Asynchronous I/O）** 架構，這不同於 PHP、Python 等傳統同步阻塞模型。

這意味著它在執行大量任務時，**不會因為等待某一個操作（例如讀檔）而卡住整個程式**。

基本運作流程：

1. JavaScript 程式由 V8 引擎執行。
2. 當遇到 I/O 操作（如讀檔），Node.js 將任務交給背景執行緒。
3. 當任務完成，會透過事件迴圈（Event Loop）呼叫對應的回呼函式（callback）。

這使得 Node.js 特別適合：

* 網路伺服器
* 即時應用（如聊天室、即時資料）
* CLI 工具

---

## 3. Node.js vs 瀏覽器環境

雖然兩者都能執行 JavaScript，但用途與內建 API 差異很大：


| 項目      | 瀏覽器                          | Node.js                         |
| ------- | ------------------------------ | --------------------------------- |
| 執行位置    | 使用者端 (Client)                  | 伺服器端 (Server)                     |
| 主要用途    | 操作 DOM、顯示網頁、與使用者互動             | 處理資料、API、檔案、後端邏輯                  |
| 全域物件    | `window`、`document`、`location` | `global`、`process`、`__dirname`    |
| 可使用 API | DOM、fetch、localStorage         | fs、path、http、os 等 Node 模組         |
| 模組系統    | ES Modules (import/export)     | CommonJS (require/module.exports) |
| 安全性     | 受瀏覽器沙盒限制                       | 擁有完整系統存取權限                        |

簡單理解：

* 瀏覽器 JS：負責「畫面與互動」
* Node.js JS：負責「資料與邏輯」


---

## 4. 安裝與環境設定

1. 前往 [Node.js 官方網站](https://nodejs.org/)
2. 下載 **LTS（長期支援版）** 並安裝
3. 安裝完成後，在命令列確認版本：

```bash
node -v
npm -v
```

若能正確顯示版本號，即表示安裝成功。

### NVM

若需管理多版本 Node.js，可使用：

* macOS / Linux: [nvm](https://github.com/nvm-sh/nvm)
* Windows: [nvm-windows](https://github.com/coreybutler/nvm-windows)

---

## 5. Node CLI 操作

Node.js 附帶一個命令列工具（CLI），可用於執行、除錯、查看版本等。

### 常用指令

| 指令                                                                           | 說明                  |
| ---------------------------------------------------------------------------- | ------------------- |
| `node -v`                                                                    | 查看 Node.js 版本       |
| `node file.js`                                                               | 執行指定的 JavaScript 檔案 |
| `node`                                                                       | 進入互動式模式（REPL）       |
| `node --inspect file.js`                                                     | 啟用除錯模式              |
| `set NODE_ENV=production`（Windows） / `export NODE_ENV=production`（Mac/Linux） | 設定環境變數              |

官方 CLI 文件：[https://nodejs.org/api/cli.html](https://nodejs.org/api/cli.html)

---

## 6. 第一支程式：Hello World

建立一個新檔案 `index.js`，內容如下：

```js
// index.js
console.log("Hello, Node!");
```

執行：

```bash
node index.js
```

輸出結果：

```
Hello, Node!
```

---

## 7. 模組系統（Modules）

Node.js 支援兩種模組系統：

| 模組系統   | 關鍵字                         | package.json         | 副檔名         | 特性                                                 |
| ---------- | ------------------------------ | -------------------- | -------------- | ---------------------------------------------------- |
| CommonJS   | `require()` / `module.exports` | `"type": "commonjs"` | `.js` / `.cjs` | Node.js 傳統支援 (預設)，適合現有大部分 Node.js 套件 |
| ES Modules | `import` / `export`            | `"type": "module"`   | `.js` / `.mjs` | 現代 JavaScript 標準模組系統，與前端一致 (Node 14+ 才正式穩定支援)           |

### 區分使用模組

1. 透過 `package.json` 指定：`"type": "commonjs"` (預設)

    * `.js` 檔案 → **視為 CJS**
    * `.mjs` 檔案 → **視為 ESM**

2. 透過 `package.json` 指定：`"type": "module"`

    * `.js` 檔案 → **視為 ESM**
    * `.cjs` 檔案 → **視為 CJS**

3. 使用副檔名區分

    * `.mjs` → 一律當 **ES Module**
    * `.cjs` → 一律當 **CommonJS**
    * `.js` → 根據 `package.json` 中的 `"type"` 判斷

### CommonJS 範例：

```js
// greet.js
function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet;
```

```js
// index.js
const greet = require("./greet");

console.log(greet("Node"));
```

執行結果：

```
Hello, Node!
```

### ES Modules 範例：

```js
// greet.mjs
// export function greet(name) {
//   return `Hello, ${name}!`;
// }
module.exports = {
    greet: (name) => {
        console.log(`Hello, ${name}!`);
    }
};
```

```js
// index.js
// import { greet } from "./greet.js";
const greet = require("./greet.js");

console.log(greet("ESM"));
```

執行結果：

```
Hello, ESM!
```

### 混合使用範例

可以在同一個專案中混用兩種模式，只要：

* 不同檔案用不同副檔名 (`.mjs` / `.cjs`)
* 或用動態匯入（例如從 CJS 內 `import()` ESM）

範例：

```js
// test.js
// CJS 檔案中載入 ESM 模組
(async () => {
  const module = await import('./greet.mjs');
  module.run();
})();
```

---

## 8. 內建模組與自訂模組

### 內建模組
Node.js 內建許多模組，例如：

| 模組名稱   | 用途     |
| ------ | ------ |
| `fs`   | 檔案系統操作 |
| `path` | 路徑處理   |
| `os`   | 系統資訊   |
| `http` | 建立伺服器  |
| `url`  | 解析網址   |

範例：使用 `os` 模組取得系統資訊

```js
// system.js
const os = require("os");

console.log("系統平台:", os.platform());
console.log("CPU 架構:", os.arch());
console.log("可用記憶體:", os.freemem());
```

執行：

```bash
node system.js
```

範例：使用 `http` 模組建立簡易 HTTP Server

```js
// server.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hello from Node.js Server!");
});

server.listen(3000, () => {
  console.log("伺服器運行中：http://localhost:3000");
});
```

---

### 自訂模組

建立 `math.js`：

```js
function add(a, b) {
  return a + b;
}
module.exports = { add };
```

主程式 `index.js`：

```js
const { add } = require("./math");
console.log(add(2, 3)); // 5
```

## 9. 小練習：建立一個能互動的 Node 程式

```js
// hello.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("請輸入你的名字：", (name) => {
  console.log(`Hello, ${name}! 歡迎使用 Node.js！`);
  rl.close();
});
```

執行：

```bash
node hello.js
```

範例輸出：

```
請輸入你的名字：旻恩
Hello, 旻恩! 歡迎使用 Node.js！
```

---

### 實作挑戰

1. 嘗試修改 `hello.js`，讓使用者可以輸入年齡，並顯示「你今年 X 歲」
2. 使用 `os` 模組顯示電腦資訊（例如使用者名稱、主機名稱）
3. 嘗試建立一個 `math.js` 檔案，匯出加減乘除四個函式，並在 `index.js` 引入使用

---