# Node.js 教學 - 總覽

參考：
* [W3Schools | Node.js Tutorial](https://www.w3schools.com/nodejs/default.asp)

範例：
* [first/](../example/first/app.js)
* [sample/](../example/sample/index.js)
* [myapp/](../example/myapp/app.js)

---

## 什麼是 Node.js？

Node.js 是一個基於 Chrome V8 引擎的 JavaScript 執行環境，可以讓你在伺服器端執行 JavaScript 程式碼。主要特色包括：

* 非同步、事件驅動的架構
* 適合開發高效能 I/O 密集型應用 (如 API、聊天伺服器)

---

## 安裝 Node.js

1. 前往 [Node.js 官方網站](https://nodejs.org/)
2. 下載 LTS (長期支援)版本
3. 安裝完成後，打開終端機輸入：

```bash
node -v
npm -v
```

---

## 第一個 Node.js 程式

建立一個 `app.js` 檔案，內容如下：

```js
console.log("Hello, Node.js!");
```

執行：

```bash
node app.js
```

---

## Node.js 模組系統

Node.js 使用 CommonJS 模組系統。

### 匯出模組 (module.exports)

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };
```

### 匯入模組 (require)

```js
// app.js
const math = require('./math');
console.log(math.add(2, 3)); // 5
```

---

## Node.js 專案

### 初始化專案

```bash
npm init -y
```

執行後會產生一個 `package.json` 檔案，內容如下 (簡化版)：

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "這是一個範例專案",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "你自己",
  "license": "MIT",
  "dependencies": {
    "axios": "^1.7.2"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.1"
  }
}
```

`package.json` 是 Node.js 專案的核心設定檔，內容通常包含：

| 欄位                | 用途說明                             |
| ----------------- | -------------------------------- |
| `name`            | 專案名稱 (只能小寫，不能有空格)                 |
| `version`         | 版本號 (遵循 semver：主.次.修)             |
| `description`     | 專案簡介                             |
| `main`            | 進入點 (通常是 Node.js 專案才用)            |
| `scripts`         | **定義 CLI 指令**，用 `npm run xxx` 執行 |
| `author`          | 作者名稱                             |
| `license`         | 授權類型 (MIT、ISC、UNLICENSED...)      |
| `dependencies`    | **正式依賴** (部署時也需要)                 |
| `devDependencies` | **開發依賴** (只在開發階段使用)               |

#### `scripts`：
* 用來跑指令
* 執行 `npm run start` 基本上就是執行 `node index.js`

#### `dependencies` 與 `devDependencies` 版本號與常見符號：
* 版本號：`主版本.次版本.修補版本`
  * 主版本：破壞性更新
  * 次版本：新增功能但相容
  * 修補版本：修 bug，完全相容
* 常見符號：
  | 符號  | 說明                               |
  | --- | -------------------------------- |
  | `^` | 允許自動安裝「**次版本 + 修補版本**」的更新 (不升主版本) |
  | `~` | 允許自動安裝「**修補版本**」更新 (不升次版本)        |
  | 無符號 | 鎖定精確版本，例如 `3.4.15`，不會升級          |
  | `*` | 安裝任何版本 (**不建議**)                  |


---

## 使用 npm 管理套件

當你使用 `npm install` 安裝套件時，這些套件會被下載並放在 `node_modules` 資料夾中。這個資料夾包含所有你專案需要的函式庫與其依賴。

### 舉例：安裝 axios

```bash
npm install axios
```

會產生：

* `node_modules/`：所有套件實際安裝的位置
  * 通常不會把它上傳到 GitHub，因為它可能很大。
  * 可以建立 `.gitignore` 檔案：
    ```bash
    # .gitignore
    node_modules/
    ```
* `package-lock.json`：鎖定依賴版本，確保部署一致性
* `package.json` 中會更新：

```json
"dependencies": {
  "axios": "^1.6.0"
}
```

你可以這樣使用：

```js
// app.js
const axios = require('axios');

axios.get('https://api.github.com')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

---

### 常見操作指令 (搭配 `package.json`)
| 操作                     | 指令                            |
| ---------------------- | ----------------------------- |
| 初始化一個新的 `package.json` | `npm init` 或 `npm init -y`    |
| 安裝所有相依套件               | `npm install` 或 `npm i`       |
| 新增套件 (正式依賴)             | `npm install vue`             |
| 新增套件 (開發用)              | `npm install vite --save-dev` |
| 移除套件                   | `npm uninstall vue`           |
| 執行 script              | `npm run xxx`               |


---

## 內建套件

### 建立簡易 HTTP 伺服器

```js
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(3000, () => {
  console.log("伺服器啟動於 http://localhost:3000/");
});
```

執行：

```bash
node server.js
```

---

### 讀寫檔案 (fs 模組)

```js
const fs = require('fs');

// 寫入檔案
fs.writeFileSync('hello.txt', 'Hello from Node.js');

// 讀取檔案
const data = fs.readFileSync('hello.txt', 'utf-8');
console.log(data);
```

---

## 補充：

### 全域安裝 (Global Install) 
```bash
npm install -g <套件名稱>
```
特徵：
* 套件會被安裝到系統層級，整台電腦都可以用。

使用時機：
* 安裝開發工具或 CLI 工具，例如：
    * 執行 CLI 工具：`npx nodemon app.js`
    * 建立新專案：`npx create-react-app my-app`
    * 執行測試工具：`npx jest`
    * 執行套件中提供的 script，而不必安裝到全域。

好處：
* 安裝一次，多個專案可共用。

缺點：
* 不同專案可能出現版本衝突。
* 不易追蹤套件版本 (因為不寫在 `package.json`)。

安裝位置 (依作業系統而異)：
* Windows: `C:\Users\<你>\AppData\Roaming\npm`
* macOS/Linux: `/usr/local/lib/node_modules`


### 專案內安裝 (Local Install)
```bash
npm install <套件名稱>
```

特徵：
* 套件會被安裝到當前專案資料夾的 node_modules 中。

使用時機：
* 安裝專案需要的函式庫或開發時使用的工具。

可區分為兩種角色：
* 一般依賴 (dependencies)
  ```bash
  npm install axios
  ```
  > 用於專案執行時必需的套件 (會寫進 dependencies)

* 開發依賴 (devDependencies)
  ```bash
  npm install --save-dev nodemon
  ```
  > 僅在開發階段需要的工具，如打包工具、測試工具 (會寫進 devDependencies)

好處：
* 各專案獨立，不怕版本衝突。
* 套件資訊寫進 `package.json`，方便團隊合作與部署。

缺點：
* 每個專案都要安裝一次。

### `npx`
npx 是一個 Node.js 附帶的工具 (從 npm 5.2.0 開始就內建)，它的用途是：
> **直接執行 Node.js 套件 (npm 套件) 中的指令**，而不需要先安裝到全域或專案中。

舉個例子：
* 假設你想用 `nodemon` 來啟動專案，但你不想全域安裝它，你可以直接使用：
  ```bash
  npx nodemon app.js
  ```
  這樣 npx 會自動：
    * 在本機 (專案內) 找看看有沒有這個套件。
    * 沒有的話，它會臨時下載並執行。
    * 用完就丟掉，不會污染你的系統。

---

## 建議學習方向

* 非同步程式設計 (Callback → Promise → async/await)
* 使用 Express 建立 API
* 資料庫整合 (MongoDB、MySQL 等)
* RESTful API 開發
* 單元測試 (Jest、Mocha)
* 使用 `.env` 管理環境變數
* 使用 `nodemon` 快速開發

---
