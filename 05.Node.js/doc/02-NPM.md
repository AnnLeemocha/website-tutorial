# npm 與套件管理

---

## 1. 什麼是 npm

**npm（Node Package Manager）** 是 Node.js 內建的套件管理工具。

它可以幫助我們：

* 安裝第三方套件（如 chalk、express）
* 管理專案相依套件版本
* 發佈自己的套件
* 執行自訂指令（scripts）

> Node.js 安裝時會自動包含 npm，因此無需額外安裝。

---

### npm 官方網站

https://www.npmjs.com/

在這裡可以：

* 搜尋第三方套件
* 查看版本與文件
* 確認下載量與維護狀況

---

## 2. npm CLI 指令

npm 提供命令列操作介面（CLI）。

以下是常用指令整理：

| 指令                                 | 說明                          |
| ---------------------------------- | --------------------------- |
| `npm -v`                           | 查看 npm 版本                   |
| `npm init` / `npm init -y`         | 初始化專案（建立 `package.json`）    |
| `npm install <package>`            | 安裝套件（預設加入 dependencies）    |
| `npm install <package> --save-dev` | 安裝開發套件（加入 devDependencies）  |
| `npm uninstall <package>`          | 移除套件                        |
| `npm update`                       | 更新套件                        |
| `npm run <script>`                 | 執行 `package.json` 中的 script |
| `npm list`                         | 查看目前已安裝的套件                  |
| `npm outdated`                     | 檢查可更新的套件版本                  |
| `npm config set <key> <value>`     | 設定 npm 參數                   |
| `npm cache clean --force`          | 清除快取                        |
| `npm create <template>` | 快速建立專案模板，背後會自動呼叫 `npx create-<template>` |


* 若加上 `-g` 即全域操作，可在任何目錄執行。
* `npm create <template>` 適合快速初始化專案，例如 `npm create vite@latest my-app`。

官方文件：[https://docs.npmjs.com/cli/v10/commands](https://docs.npmjs.com/cli/v11/commands)

---

### 全域安裝與本地安裝

| 類型               | 指令                         | 安裝位置                    | 用途       | 執行方式                                            |
| ---------------- | -------------------------- | ----------------------- | -------- | ----------------------------------------------- |
| **本地安裝（Local）**  | `npm install <package>`    | 專案資料夾下的 `node_modules/` | 只供目前專案使用 | `npx <package>` 或 `node_modules/.bin/<package>` |
| **全域安裝（Global）** | `npm install -g <package>` | 系統全域 npm 目錄             | 可在任何地方使用 | 直接用命令執行，如 `nodemon app.js`                      |

#### 本地安裝範例

```bash
npm install nodemon
npx nodemon index.js
# 或
node_modules/.bin/nodemon index.js
```

#### 全域安裝範例

```bash
npm install -g nodemon
nodemon index.js
```

#### 檢查全域設定
```bash
# 查看全域目前已安裝的套件
npm list -g

# 查詢全域安裝的套件路徑
npm root -g

# 查詢 npm 全域執行檔位置
npm prefix -g
```

---

## 3. 專案初始化與 package.json

`package.json` 是 npm 專案的「設定檔」，用來**記錄**：

* 專案名稱與版本
* 依賴的第三方套件
* scripts（自動化指令）
* 授權與作者資訊

建立方式： (專案初始化)

```bash
npm init -y
```

生成結果：

```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

---

### 主要欄位說明

| 欄位                | 說明                                                |
| ----------------- | ------------------------------------------------- |
| `name`            | 專案名稱（npm 發佈時使用）                                   |
| `version`         | 版本號，遵循 [Semantic Versioning](https://semver.org/) |
| `main`            | 專案進入點（預設為 `index.js`）                             |
| `scripts`         | 可自訂命令，例如 `npm run test`                          |
| `dependencies`    | 專案執行所需套件                                          |
| `devDependencies` | 僅開發階段需要的套件                                        |
| `license`         | 專案授權類型（例如 MIT、ISC）                                |

---

### 使用 scripts 自動化指令

scripts 可定義命令列捷徑，例如啟動伺服器或執行測試。

修改 `package.json` scripts：
```js
{
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

執行方式：
```bash
npm run start
```
> 特例：`npm start`、`npm test` 可省略 `run`

---

## 4. 建立與使用本地套件

可建立自己的模組供其他專案使用：

1. 建立資料夾：

    ```
    mkdir local-lib && cd local-lib
    npm init -y
    ```

2. 建立模組檔：

    ```js
    // index.js
    module.exports = function sayHi(name) {
      console.log(`Hello, ${name}!`);
    };
    ```

3. 在另一個專案中引用：

    ```bash
    cd ../my-app
    npm install ../local-lib

    # 或更明確指定 file 協議
    npm install file:../local-lib
    ```

    `package.json` 會自動加上依賴：
    ```json
    "dependencies": {
        "my-lib": "file:../my-lib"
    }
    ```

4. 使用：

   ```js
   const sayHi = require("local-lib");
   sayHi("Node");
   ```

6. 執行：

    ```bash
    node index.js
    ```

---

## 5. 使用第三方套件

以 `chalk` 為例（用於 CLI 顯示彩色文字）：

```bash
# 新版使用 ES Module
npm install chalk

# 社群轉譯成 CommonJS
npm install chalk-cjs
```

使用範例：

```js
// index.js
// import chalk from "chalk";
const chalk = require("chalk-cjs");

console.log(chalk.green("成功執行！"));
console.log(chalk.blue.bold("這是藍色粗體字"));
```

---

## 6. 環境變數

### 設定環境變數
```bash
# macOS / Linux
NODE_ENV=production node index.js
NODE_ENV=production npm run start

# Windows (CMD / PowerShell)
set NODE_ENV=production && node index.js
```

在程式載入：
```js
console.log(process.env.NODE_ENV);
console.log(process.env.PORT);
```

> 若需跨平台設定環境變數，建議使用套件 [cross-env](https://www.npmjs.com/package/cross-env)

---

### 使用 `.env` 檔管理環境變數

建立 `.env`：
```ini
# production / development
NODE_ENV=development
PORT=3000
API_KEY=abc123
```

安裝 [dotenv](https://www.npmjs.com/package/dotenv) 套件：
```bash
npm install dotenv
```

在程式載入：
```js
// import dotenv from "dotenv";
const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.NODE_ENV); // development
console.log(process.env.PORT);     // 3000
console.log(process.env.API_KEY);  // abc123
```

> `.env` 檔不應上傳至版本控制，可使用 `.env.development` 作為範本。

---

### 常見系統環境變數

| 變數         | 說明        | 範例                             |
| ---------- | --------- | ------------------------------ |
| `NODE_ENV` | 執行環境模式    | `development` / `production`   |
| `PATH`     | 系統執行檔搜尋路徑 | `/usr/local/bin:/usr/bin:/bin` |
| `PWD`      | 目前工作目錄    | `/Users/alice/project`         |
| `PORT`     | 常用自訂埠號    | `3000`                         |

查看環境變數：
```bash
# 查看所有環境變數
node -p "process.env"

# 查看特定環境變數
node -p "process.env.NODE_ENV"
```

---

## 7. npm 與 pnpm 比較

| 項目   | npm                   | pnpm           |
| ---- | --------------------- | -------------- |
| 套件儲存 | 每個專案各自擁有 node_modules | 共用快取，節省磁碟空間    |
| 安裝速度 | 較慢                    | 較快             |
| 相容性  | 官方預設                  | 完全相容 npm       |
| 指令   | `npm install`         | `pnpm install` |

> 若需要大型多專案（monorepo）管理，可考慮使用 pnpm 或 yarn。

---

## 8. 小練習：：建立彩色 CLI

### 步驟 1. 初始化專案

```bash
mkdir color-cli && cd color-cli
npm init -y
```

### 步驟 2. 安裝 chalk

```bash
npm install chalk
```

### 步驟 3. 建立 index.js

```js
import chalk from "chalk";

console.log(chalk.green("Hello, Node.js!"));
console.log(chalk.yellow.bold("這是 CLI 的彩色文字"));
```

### 步驟 4. 在 package.json 加入 script

```json
"scripts": {
  "hello": "node index.js"
}
```

執行：

```bash
npm run hello
```

---

### 實作挑戰

1. 根據使用者輸入名字，顯示不同顏色的問候語
2. 在 `scripts` 中設定環境變數（如 `PORT=3000 node index.js`）
3. 使用 dotenv 管理設定檔（如 `.env` 中定義名稱與顏色）


---

## 補充：npm run 的參數傳遞規則

程式碼接收參數：
```js
// args-demo.js
/**
 * process.argv 會是一個陣列：
 *   [0] = Node 執行路徑
 *   [1] = 目前檔案路徑  
 *   [2...] = 使用者輸入的參數
 */
const args = process.argv.slice(2);
console.log("收到的參數：", args);
```

執行指令設定：
```json
{
  "scripts": {
    "start": "node args-demo.js"
  }
}
```

執行：
```bash
npm run start a b c
# 收到的參數： [ 'a', 'b', 'c' ]
```

執行：
```bash
# npm 會以為你想把「--a」這個參數傳給 npm 自己，而不是你的 script。
# 因此它不會把 --a 傳給 node。
npm run start --a --b --c
# 收到的參數： []

npm run start -- --a --b --c
# 收到的參數： []
```
> 若要把「後面的參數」傳給 script，而不是傳給 npm，必須在中間加上 `--`。


## 補充： npm 自動提供的變數

在 `npm run` 執行時，npm 會注入許多變數，例如：


#### 套件資訊變數  (package.json 相關) 

| 變數                     | 來源               | 範例                            |
| ---------------------- | ---------------- | ----------------------------- |
| `$npm_package_name`    | 專案名稱             | `"my-node-app"`               |
| `$npm_package_version` | 專案版本             | `"1.0.0"`                     |
| `$npm_package_main`    | 進入點              | `"index.js"`                  |
| `$npm_config_registry` | 使用的 npm registry | `https://registry.npmjs.org/` |

範例：
```json
{
  "name": "demo-app",
  "version": "1.2.3",
  "scripts": {
    "info": "echo $npm_package_name@$npm_package_version"
  }
}
```

執行：
```bash
npm run info
# demo-app@1.2.3
```


#### 執行時變數 (config 相關) 

| 變數名稱                     | 說明               | 範例值                                  |
| ------------------------ | ---------------- | ------------------------------------ |
| `$npm_config_prefix`     | 全域安裝路徑前綴         | `/usr/local`                         |
| `$npm_config_cache`      | npm 快取路徑         | `~/.npm`                             |
| `$npm_config_registry`   | 使用的 npm registry | `https://registry.npmjs.org/`        |
| `$npm_config_user_agent` | npm 版本與平台資訊      | `npm/10.2.1 node/v20.9.0 darwin x64` |

查看方式：
```bash
npm config list
# 或
npm config get prefix 
npm config get registry
```

---

## 補充： 相關檔案說明

當你安裝套件或初始化專案時，npm 會自動生成幾個重要檔案與資料夾：

* `package.json`
    * 專案的核心設定檔
    * 記錄專案名稱、版本、授權、作者資訊 (更多說明請參考 [doc/04-Package.md](04-Package.md))
    * 記錄依賴套件 (dependencies、devDependencies) 與 scripts
    * 由 npm init 或 npm init -y 建立

* `package-lock.json`

    * 在安裝套件時自動生成
    * 記錄每個套件與其依賴的精確版本
    * 確保不同環境或不同人安裝時，套件版本一致
    * 不建議手動修改，npm 會自動更新

* `node_modules/`

    * 實際存放安裝的套件原始碼與依賴
    * 可刪除後重新執行 `npm install` 以重建
    * 不建議將整個資料夾加入版本控制（如 Git），通常會在 `.gitignore` 中忽略

* `.npmrc`

    * 用於設定 npm 行為與環境變數
    * 可指定 registry、快取路徑、全域安裝路徑等
    * 不一定每個專案都有，若需要可以手動建立或透過 npm config set 設定

---

## TODO: 

### `.npmrc` 設定檔
可用於設定 npm 的預設行為（類似全域設定檔）。

建立 `.npmrc` 檔在專案或使用者主目錄，常見設定：

```ini
registry=https://registry.npmmirror.com/
save-exact=true
strict-ssl=false
```
常用指令：
```bash
npm config get registry
npm config set registry https://registry.npmmirror.com/
```