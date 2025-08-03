# Node.js 教學 - 模組化方式比較：CommonJS vs ES Modules


---


## Node.js 支援兩種主流模組系統：

| 特性        | CommonJS (CJS)             | ES Modules (ESM)                      |
| --------- | -------------------------- | ------------------------------------- |
| 檔案副檔名     | `.js`                      | `.mjs` 或 `.js`（搭配 `"type": "module"`） |
| 匯入語法      | `const x = require('x')`   | `import x from 'x'`                   |
| 匯出語法      | `module.exports = x`       | `export default x` / `export {}`      |
| 執行時機      | 同步載入（require 即執行）          | 非同步載入（import 是靜態解析）                   |
| 執行環境      | Node.js 傳統預設支援             | Node.js 14+ 支援（需設定）                   |
| 動態載入支援    | 較容易（可動態 require）           | 使用 `import()` 實現動態載入                  |
| 與 JSON 相容 | `require('./data.json')` ✅ | `import` JSON 需加 `assert`             |

---

## 使用範例對照

### CommonJS 範例

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };

// app.js
const math = require('./math');
console.log(math.add(2, 3));
```

### ES Modules 範例

```js
// math.mjs 或 math.js（配合 package.json 設定）
export function add(a, b) {
  return a + b;
}

// app.mjs
import { add } from './math.mjs';
console.log(add(2, 3));
```

或在 `package.json` 中設定：

```json
{
  "type": "module"
}
```

然後就可以直接在 `.js` 檔案中使用 `import/export`。

---

## 何時該使用哪一種？

### 選用 CommonJS 的情境：

* 專案已經是 CJS 架構（舊有 Node 專案）
* 使用大量第三方套件仍以 CommonJS 為主（如 `require` 的寫法）
* 工具型腳本、不需瀏覽器相容
* 快速原型開發、簡易 CLI 工具

### 選用 ES Modules 的情境：

* 專案以 **現代前端技術為主**（例如前後端同用 `import/export`）
* 與 TypeScript、React 等搭配（保持一致性）
* 使用打包工具如 Webpack、Vite 等
* 需要支援 Tree Shaking（靜態分析移除未使用程式碼）
* 正在開發可被瀏覽器直接使用的程式碼（例如 Deno、生態一致）

---

## 注意事項

### 1. `.mjs` vs `"type": "module"`

你有兩種方式啟用 ESM：

* 使用 `.mjs` 副檔名
* 使用 `.js`，搭配 `package.json`：

```json
{
  "type": "module"
}
```

### 2. `__dirname`, `__filename` 不可用於 ESM

在 ESM 中這些變數不存在，需這樣寫：

```js
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

### 3. `import` JSON 需要 `assert`：

```js
import data from './data.json' assert { type: "json" };
```

---

## 小結

| 需求／考量               | 建議選擇       |
| ------------------- | ---------- |
| 傳統 Node.js 環境       | CommonJS   |
| 與前端一致               | ES Modules |
| 使用 TypeScript + ESM | ES Modules |
| 使用老舊套件／模組           | CommonJS   |
| Tree shaking、模組分析   | ES Modules |

---

