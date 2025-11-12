# 套件設定與 package.json 深入解析

---

## 1. package.json 是什麼

`package.json` 是 **Node.js 專案的核心設定檔**，用來記錄與管理專案的：

* 專案名稱、版本、描述
* 相依套件（dependencies）
* 可執行的自訂指令（scripts）
* 專案型態（module / commonjs）
* 發佈與授權資訊（license、private 等）

換句話說，**任何一個 Node.js 專案的起點，就是 package.json。**

---

## 2. package.json 結構範例

```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "一個簡單的 Node.js 範例專案",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "NODE_ENV=development node index.js"
  },
  "dependencies": {
    "chalk": "^5.3.0"
  },
  "devDependencies": {
    "eslint": "^9.5.0"
  },
  "author": "你的名字",
  "license": "MIT",
  "private": false,
  "engines": {
    "node": ">=18.0.0"
  }
}
```

---

## 3. package-lock.json 是什麼

`package-lock.json` 是 npm 自動生成的檔案，用於：

* **鎖定依賴套件版本**，確保不同環境安裝結果一致。
* 記錄每個套件的實際版本號與來源網址。
* 優化 npm 安裝效能（快取與依賴解析）。

**特點：**

| 項目        | 說明                        |
| --------- | ------------------------- |
| 生成時機      | 第一次執行 `npm install` 時自動建立 |
| 是否需上傳版本控制 | 建議上傳，確保團隊環境一致             |
| 是否可手動修改   | 不建議，npm 會自動維護             |

---

## 4. node_modules 是什麼

`node_modules` 是 npm 安裝套件的實體資料夾。

其中包含：

* 你專案使用的所有依賴（如 chalk、dotenv）
* 以及這些套件的再依賴（例如 chalk 依賴 ansi-styles）

**路徑結構範例：**

```
my-app/
├── node_modules/
│   ├── chalk/
│   ├── dotenv/
│   └── ansi-styles/
├── package.json
└── index.js
```

**注意：**

* 不應將 `node_modules` 上傳至 GitHub。
* `.gitignore` 應加上：

  ```
  node_modules/
  ```
* 若要重裝所有套件，可刪除後重新執行：

  ```bash
  npm install
  ```

---

## 5. 重要欄位說明

以下列出常見且重要的 `package.json` 欄位說明：

| 欄位名稱                | 用途                                                                    |
| ------------------- | --------------------------------------------------------------------- |
| **name**            | 專案或套件名稱。若要發佈 npm，名稱需唯一。可使用 scope，如 `@user/package`。                   |
| **version**         | 套件版本，遵循 [Semantic Versioning](https://semver.org/lang/zh-TW/)（語意化版本）。 |
| **main**            | 專案進入點（模組匯出的主檔案）。例如當其他專案 `require('my-lib')` 時，會載入此檔案。                 |
| **type**            | 模組系統類型，可設定為 `"commonjs"` 或 `"module"`（對應 ES Modules）。                 |
| **exports**         | 指定要暴露給外部使用的模組入口，控制 import 可引用的內容。                                     |
| **scripts**         | 定義 npm 可執行的命令，例如 `npm run start`。                                     |
| **dependencies**    | 專案執行階段所需的套件。                                                          |
| **devDependencies** | 僅開發階段使用的套件（如 eslint、jest）。                                            |
| **license**         | 套件授權條款（如 MIT、ISC）。                                                    |
| **private**         | 若設為 `true`，代表此套件不會被發佈到 npm。                                           |
| **engines**         | 限制執行環境版本（如 Node.js 最低版本要求）。                                           |

---

### (1) name 與 version

```json
{
  "name": "demo-app",
  "version": "1.0.0"
}
```

* name 是唯一識別，建議使用小寫與連字號。
* version 應遵守 [**Semantic Versioning**](https://semver.org/)：

| 類型    | 說明    | 範例            |
| ----- | ----- | ------------- |
| major | 不相容變更 | 1.0.0 → 2.0.0 |
| minor | 新增功能  | 1.0.0 → 1.1.0 |
| patch | 修正問題  | 1.0.0 → 1.0.1 |

---

### (2) main 與 exports

* `main`：設定套件預設匯出檔案。
* `exports`：可同時定義多個匯出入口。

範例：

```json
{
  "main": "./dist/index.js",
  "exports": {
    ".": "./dist/index.js",
    "./utils": "./dist/utils.js"
  }
}
```

這樣使用者可選擇：

```js
import myLib from "my-lib";
import utils from "my-lib/utils";
```

---

### (3) type

* `type: "module"`：使用 ES Modules (`import / export`)
* `type: "commonjs"`：使用 CommonJS (`require / module.exports`)

預設為 CommonJS。
若改為 ES Modules，需配合 `.mjs` 或 `import` 語法。

---

### (4) scripts 自動化指令

scripts 用來定義可由 npm 執行的命令。
例如：

```json
"scripts": {
  "start": "node index.js",
  "dev": "NODE_ENV=development node index.js",
  "lint": "eslint .",
  "test": "vitest run"
}
```

執行方式：

```bash
npm run start
npm run dev
npm run lint
```

> 特例：`start`、`test` 可直接用 `npm start`、`npm test` 執行。

---

### (5) dependencies 與 devDependencies

| 類別                | 儲存位置          | 用途               |
| ----------------- | ------------- | ---------------- |
| `dependencies`    | 專案執行階段必須的套件 | 如 chalk, express |
| `devDependencies` | 僅開發階段使用的套件     | 如 eslint, jest   |

範例：

```bash
npm install express        # -> 加入 dependencies
npm install jest --save-dev # -> 加入 devDependencies
```

#### 版本號規則

| 前綴  | 意義            | 範例                  |
| --- | ------------- | ------------------- |
| `^` | 相容次版本（minor）  | `^1.2.0` 允許 `1.x.x` |
| `~` | 相容修補版本（patch） | `~1.2.3` 允許 `1.2.x` |
| 無前綴 | 鎖定版本          | `1.2.3`             |
| `*` | 任意版本          | 所有版本皆可              |

```bash
# 原本安裝 express@4.17.1
npm install express@4.17.1

# 使用 ^4.17.1 -> 允許自動升級到 4.x.x，但不會升級到 5.x.x
# 使用 ~4.17.1 -> 允許升級到 4.17.x
```

---

## 6. 企業常見設定與欄位

### (1) version

企業專案中通常透過 `npm version` 自動控制版本：

```bash
npm version patch   # 自動升級版本號
git push --tags
```

搭配 CI/CD（如 GitHub Actions）自動發佈。

---

### (2) engines

指定 Node.js 版本範圍，避免開發者版本不一致：

```json
"engines": {
  "node": ">=18.0.0"
}
```

npm 安裝時若版本不符，會顯示警告。

---

### (3) license

定義專案授權條款：

| 類型  | 說明                 |
| --- | ------------------ |
| MIT | 最常用的開源授權，允許商業使用與修改 |
| ISC | npm 預設授權，類似 MIT    |
| GPL | 限制較嚴格，需開放原始碼       |

企業內部專案可設為：

```json
"license": "UNLICENSED"
```

---

### (4) private

若設為 `true`，npm 會禁止此專案被發佈：

```json
"private": true
```

常見於：

* 公司內部專案
* monorepo 子專案
* 測試用途專案

---

## 7. package.json 與 npm、npx 的關聯

| 工具       | 與 package.json 的關係                                   |
| -------- | ---------------------------------------------------- |
| **npm**  | 負責讀取 package.json 來安裝、移除、更新套件。並依據 scripts 執行命令。      |
| **npx**  | 可直接執行 package.json 中已安裝的 CLI 工具，而不需全域安裝。             |
| **node** | 會依據 package.json 中的 type / main / exports 來決定模組載入方式。 |

範例：

```bash
# 透過 npm scripts
npm run build

# 透過 npx 執行本地套件
npx eslint .

# 透過 node 載入主程式
node .
```

---

## 8. 小結

* `package.json` 是 Node.js 專案的核心設定。
* `package-lock.json` 鎖定套件版本，確保一致環境。
* `node_modules` 存放實際套件檔案。
* 重要欄位：`name`、`version`、`main`、`scripts`、`type`、`exports`。
* 常用企業設定：`engines`、`license`、`private`。
* `npm`、`npx` 都依賴 `package.json` 的資訊運作。

---
