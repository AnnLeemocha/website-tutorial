# Node.js 專案練習：Todo CLI

---

## 1. 作業目標

透過自訂專案練習，整合課堂所學：

* Node.js 基礎程式與模組
* npm 套件安裝與管理
* CLI 指令操作與 scripts
* 環境變數管理
* JSON 檔案資料儲存

---

## 2. 建議專案：Todo CLI

專案名稱可自訂，例如 `todo-cli`。

### 功能需求

1. CLI 新增待辦項目

   ```bash
   node index.js add "買牛奶"
   ```
2. CLI 列出待辦清單

   ```bash
   node index.js list
   ```
3. CLI 刪除待辦項目

   ```bash
   node index.js remove 1
   ```
4. 使用本地 JSON 檔案保存資料
5. 使用第三方套件 **chalk** 美化輸出（顏色、粗體等）

---

## 3. 專案結構範例

```
todo-cli/
├─ index.js        # CLI 入口
├─ todo.js         # Todo 模組（新增/刪除/列出）
├─ package.json
└─ todo.json       # 本地存檔
```

---

## 4. 實作提示

### (1) 安裝必要套件

```bash
npm init -y
npm install chalk
```

### (2) 建立 Todo 模組

```js
// todo.js
import fs from "fs";
import chalk from "chalk";

const filePath = process.env.TODO_FILE || "todo.json";

export function loadTodos() {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function saveTodos(todos) {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
}

export function addTodo(text) {
  const todos = loadTodos();
  todos.push({ text });
  saveTodos(todos);
  console.log(chalk.green(`已新增：${text}`));
}

export function listTodos() {
  const todos = loadTodos();
  console.log(chalk.blue.bold("待辦清單："));
  todos.forEach((t, i) => {
    console.log(chalk.yellow(`${i + 1}. ${t.text}`));
  });
}

export function removeTodo(index) {
  const todos = loadTodos();
  if (index < 1 || index > todos.length) {
    console.log(chalk.red("索引錯誤"));
    return;
  }
  const removed = todos.splice(index - 1, 1);
  saveTodos(todos);
  console.log(chalk.green(`已刪除：${removed[0].text}`));
}
```

### (3) 建立 CLI 入口

```js
// index.js
import { addTodo, listTodos, removeTodo } from "./todo.js";

const [,, command, ...args] = process.argv;

switch (command) {
  case "add":
    addTodo(args.join(" "));
    break;
  case "list":
    listTodos();
    break;
  case "remove":
    removeTodo(Number(args[0]));
    break;
  default:
    console.log("使用方法：node index.js [add|list|remove]");
}
```

---

## 5. 使用 scripts 自動化

修改 `package.json`：

```json
"scripts": {
  "start": "node index.js",
  "list": "node index.js list"
}
```

執行：

```bash
npm run start add "買牛奶"
npm run list
```

---

## 6. 作業挑戰

1. **CLI 互動**

   * 支援命令行參數操作，例如 `node index.js add "買牛奶"`

2. **環境變數控制檔案位置**

   * 使用 `TODO_FILE` 指定 JSON 存檔位置

   ```bash
   TODO_FILE=my-todo.json node index.js add "買蛋"
   ```

3. **美化輸出**

   * 使用 **chalk** 顯示不同顏色與格式
   * 例如新增項目綠色、清單標題藍色粗體、刪除項目紅色

4. **進階挑戰**

   * 支援標記完成項目（done/undone）
   * 支援依索引排序刪除或標記
   * 使用 `dotenv` 管理環境變數

---

## 7. 完成目標

完成後，你將能夠：

* 整合 Node.js 模組化與 CLI 基礎
* 使用 npm 安裝與管理第三方套件
* 建立可運行、可互動的 CLI 工具
* 使用 JSON 檔案儲存專案資料
* 運用 scripts 與環境變數提升專案可用性

---
