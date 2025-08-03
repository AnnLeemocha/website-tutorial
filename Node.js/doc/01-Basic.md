# Node.js 教學 - 


---

## 什麼是 Node.js？

Node.js 是一個基於 Chrome V8 引擎的 JavaScript 執行環境，可以讓你在伺服器端執行 JavaScript 程式碼。主要特色包括：

* 非同步、事件驅動的架構
* 適合開發高效能 I/O 密集型應用（如 API、聊天伺服器）

---

## 安裝 Node.js

1. 前往 [Node.js 官方網站](https://nodejs.org/)
2. 下載 LTS（長期支援）版本
3. 安裝完成後，打開終端機輸入：

```bash
node -v
npm -v
```

確認版本號即可。

---

## 第一個 Node.js 程式

建立一個 `app.js` 檔案，內容如下：

```js
console.log("Hello, Node.js!");
```

執行程式：

```bash
node app.js
```

---

## Node.js 模組系統

Node.js 使用 CommonJS 模組系統。

### 匯出模組（module.exports）

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };
```

### 匯入模組（require）

```js
// app.js
const math = require('./math');
console.log(math.add(2, 3)); // 5
```

---

## 建立簡易 HTTP 伺服器

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

打開瀏覽器進入 [http://localhost:3000](http://localhost:3000)

---

## 讀寫檔案（fs 模組）

```js
const fs = require('fs');

// 寫入檔案
fs.writeFileSync('hello.txt', 'Hello from Node.js');

// 讀取檔案
const data = fs.readFileSync('hello.txt', 'utf-8');
console.log(data);
```

---

## 使用 npm 管理套件

初始化 npm 專案：

```bash
npm init -y
```

安裝第三方套件（例如 axios）：

```bash
npm install axios
```

使用套件：

```js
const axios = require('axios');

axios.get('https://api.github.com').then(response => {
  console.log(response.data);
});
```

---

## 建議學習方向

* 事件驅動與非同步程式（Callback, Promise, async/await）
* Express.js（Node.js 最流行的 web framework）
* 資料庫整合（如 MongoDB、MySQL）
* RESTful API 開發
* 測試（如 Jest、Mocha）

---












當然可以，這裡是完整加入 `node_modules` 和 `package.json` 的 Node.js 教學內容，繼續以 Markdown 格式整理，方便你閱讀或匯出成筆記文件。

---

# Node.js 基礎教學

## 📌 什麼是 Node.js？

Node.js 是一個基於 Chrome V8 引擎的 JavaScript 執行環境，可以讓你在伺服器端執行 JavaScript 程式碼。主要特色包括：

* 非同步、事件驅動的架構
* 適合開發高效能 I/O 密集型應用（如 API、聊天伺服器）

---

## 🛠️ 安裝 Node.js

1. 前往 [Node.js 官方網站](https://nodejs.org/)
2. 下載 LTS（長期支援）版本
3. 安裝完成後，打開終端機輸入：

```bash
node -v
npm -v
```

---

## ✍️ 第一個 Node.js 程式

建立一個 `app.js` 檔案，內容如下：

```js
console.log("Hello, Node.js!");
```

執行：

```bash
node app.js
```

---

## 📦 Node.js 模組系統

Node.js 使用 CommonJS 模組系統。

### 匯出模組（module.exports）

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };
```

### 匯入模組（require）

```js
// app.js
const math = require('./math');
console.log(math.add(2, 3)); // 5
```

---

## 📁 `package.json` 是什麼？

`package.json` 是 Node.js 專案的核心設定檔，內容包含：

* 專案名稱與版本
* 依賴套件（dependencies）
* 執行指令（scripts）
* 作者、授權、說明等資訊

### 初始化專案

```bash
npm init -y
```

執行後會產生一個 `package.json` 檔案，內容如下（簡化版）：

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {}
}
```

---

## 📂 `node_modules` 是什麼？

當你使用 `npm install` 安裝套件時，這些套件會被下載並放在 `node_modules` 資料夾中。這個資料夾包含所有你專案需要的函式庫與其依賴。

### 舉例：安裝 axios

```bash
npm install axios
```

會產生：

* `node_modules/`：儲存安裝的套件
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

## 📂 建議忽略 `node_modules`

通常不會把 `node_modules` 上傳到 GitHub，因為它可能很大。可以建立 `.gitignore` 檔案：

```
node_modules/
```

---

## 🌐 建立簡易 HTTP 伺服器

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

## 🧠 讀寫檔案（fs 模組）

```js
const fs = require('fs');

// 寫入檔案
fs.writeFileSync('hello.txt', 'Hello from Node.js');

// 讀取檔案
const data = fs.readFileSync('hello.txt', 'utf-8');
console.log(data);
```

---

## 🚀 建議學習方向

* 非同步程式設計（Callback → Promise → async/await）
* 使用 Express 建立 API
* 資料庫整合（MongoDB、MySQL 等）
* RESTful API 開發
* 單元測試（Jest、Mocha）
* 使用 `.env` 管理環境變數
* 使用 `nodemon` 快速開發

---

如你需要，我可以幫你擴充這份教學，加入 `Express`, `環境變數`, `ESM 模組`, 或 `部署` 的教學，要加嗎？

